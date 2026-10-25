'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient, isSupabaseConfigured } from '../../lib/supabase'

/**
 * Server Action for admin login authentication.
 * Adheres to Impeccable guidelines: professional, respectful Indonesian copywriting, no robotic slop.
 */
export async function loginAdmin(prevState, formData) {
  const email = formData.get('email')?.toString().trim()
  const password = formData.get('password')?.toString()

  if (!email || !password) {
    return {
      success: false,
      error: 'Mohon masukkan alamat email dan kata sandi untuk melanjutkan.',
    }
  }

  // Basic email pattern check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: 'Format alamat email tidak valid. Silakan periksa kembali input Anda.',
    }
  }

  const cookieStore = await cookies()

  // 1. Authenticate with Supabase if live credentials exist
  if (isSupabaseConfigured()) {
    try {
      const supabase = await createClient()
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        return {
          success: false,
          error: 'Kredensial tidak sesuai. Pastikan alamat email dan kata sandi admin telah terdaftar dan dimasukkan dengan benar.',
        }
      }

      // Supabase client manages cookies automatically via cookieStore
      cookieStore.set('toxiccycle_admin_session', data.user.email, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    } catch {
      return {
        success: false,
        error: 'Terjadi kendala saat menghubungkan ke server autentikasi. Silakan coba kembali beberapa saat lagi.',
      }
    }
  } else {
    // 2. Local admin account when Supabase keys are pending configuration
    const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase()
    const adminPassword = process.env.ADMIN_PASSWORD
    const emailMatch = Boolean(adminEmail) && email.toLowerCase() === adminEmail
    const passwordMatch = Boolean(adminPassword) && password === adminPassword

    if (!emailMatch || !passwordMatch) {
      return {
        success: false,
        error: 'Kredensial tidak sesuai. Pastikan alamat email dan kata sandi admin telah terdaftar dan dimasukkan dengan benar.',
      }
    }

    cookieStore.set('toxiccycle_admin_session', email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
  }

  // Redirect to admin dashboard
  redirect('/admin')
}

/**
 * Server Action for admin logout.
 */
export async function logoutAdmin() {
  const cookieStore = await cookies()

  if (isSupabaseConfigured()) {
    try {
      const supabase = await createClient()
      await supabase.auth.signOut()
    } catch {
      // Ignored during sign-out
    }
  }

  cookieStore.delete('toxiccycle_admin_session')
  redirect('/login')
}

/**
 * Server Action to refresh sensor data (revalidating cached telemetry).
 */
export async function refreshTelemetry() {
  const { revalidatePath } = await import('next/cache')
  revalidatePath('/admin')
  return { success: true, timestamp: new Date().toISOString() }
}

/**
 * Server Action to generate CSV export string for telemetry log.
 */
export async function exportTelemetryCSV() {
  const headers = 'ID,Waktu,Objek,Kompartemen,Status,Kategori\n'
  const rows = [
    '1,10:48,Baterai Lithium 18650,Kompartemen B,Tersortir Otomatis,Hazardous',
    '2,10:24,Mainboard PCB Smartphone,Kompartemen A,Tersortir Otomatis,Valuable Circuit',
    '3,09:55,Kabel Adapter & Charger,Kompartemen C,Tersortir Otomatis,Copper Wire',
    '4,09:12,Modul Display AMOLED,Kompartemen A,Tersortir Otomatis,Electronic Screen',
    '5,08:40,Baterai Powerbank Li-Po,Kompartemen B,Tersortir Otomatis,Hazardous',
    '6,08:15,Kamera Sensor Modul,Kompartemen A,Tersortir Otomatis,Precision Tech',
  ].join('\n')

  return {
    filename: `toxiccycle-telemetri-${new Date().toISOString().slice(0, 10)}.csv`,
    csv: headers + rows,
  }
}



/**
 * ============================================================================
 * US-06: HARDWARE NODE & SENSOR MANAGEMENT SERVER ACTIONS
 * Strict cookie authentication verification before dispatching hardware triggers
 * ============================================================================
 */

import { verifyServerSession } from '../../lib/supabase'
import {
  pingHardwareNodes,
  calibrateLoadCell,
  testServoFlap,
} from '../../lib/hardware-api'

/**
 * Server Action: Ping Hardware Nodes (Raspberry Pi 4 & ESP32)
 */
export async function triggerPingNodes() {
  const { authenticated } = await verifyServerSession()
  if (!authenticated) {
    return {
      success: false,
      error: 'Sesi tidak valid atau telah berakhir. Akses ditolak.',
    }
  }

  try {
    const result = await pingHardwareNodes()
    return {
      success: true,
      message: result.message,
      nodes: result.nodes,
      timestamp: result.timestamp,
    }
  } catch {
    return {
      success: false,
      error: 'Gagal melakukan jabat tangan (handshake) dengan node perangkat keras.',
    }
  }
}

/**
 * Server Action: Calibrate Tare Weight on Load Cell (ESP32)
 */
export async function triggerCalibrateScale() {
  const { authenticated } = await verifyServerSession()
  if (!authenticated) {
    return {
      success: false,
      error: 'Sesi tidak valid atau telah berakhir. Akses ditolak.',
    }
  }

  try {
    const result = await calibrateLoadCell()
    return {
      success: true,
      message: result.message,
      tareOffset: result.tareOffset,
      status: result.status,
      timestamp: result.timestamp,
    }
  } catch {
    return {
      success: false,
      error: 'Terjadi kendala saat mengirim instruksi kalibrasi ke modul load cell.',
    }
  }
}

/**
 * Server Action: Test Sweep Motion on Flap Servo (ESP32 Actuator)
 */
export async function triggerTestFlapServo() {
  const { authenticated } = await verifyServerSession()
  if (!authenticated) {
    return {
      success: false,
      error: 'Sesi tidak valid atau telah berakhir. Akses ditolak.',
    }
  }

  try {
    const result = await testServoFlap()
    return {
      success: true,
      message: result.message,
      sweepCycle: result.sweepCycle,
      status: result.status,
      timestamp: result.timestamp,
    }
  } catch {
    return {
      success: false,
      error: 'Gagal menguji gerak aktuator flap servo.',
    }
  }
}

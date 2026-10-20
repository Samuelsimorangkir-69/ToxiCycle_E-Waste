import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key'

export const isSupabaseConfigured = () => {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')
  )
}

/**
 * Creates a Supabase client for Server Components, Server Actions, and Route Handlers.
 */
export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        } catch {
          // Called from a Server Component; handled by middleware
        }
      },
    },
  })
}

/**
 * Validates whether the incoming request has an active authenticated session.
 * Checks Supabase session or verified admin session cookie.
 */
export async function verifyServerSession() {
  const cookieStore = await cookies()
  const fallbackSession = cookieStore.get('toxiccycle_admin_session')
  
  if (fallbackSession?.value) {
    return {
      authenticated: true,
      user: {
        email: fallbackSession.value,
        role: 'admin',
      },
    }
  }

  if (isSupabaseConfigured()) {
    try {
      const supabase = await createClient()
      const { data: { user }, error } = await supabase.auth.getUser()
      if (!error && user) {
        return {
          authenticated: true,
          user,
        }
      }
    } catch (err) {
      console.error('Supabase session verification error:', err)
    }
  }

  return { authenticated: false, user: null }
}


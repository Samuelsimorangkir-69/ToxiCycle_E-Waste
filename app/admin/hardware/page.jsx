'use client'

import { useState, useTransition } from 'react'
import {
  Cpu,
  Radio,
  Scale,
  Sliders,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Compass,
  Zap,
} from 'lucide-react'
import {
  triggerPingNodes,
  triggerCalibrateScale,
  triggerTestFlapServo,
} from '../actions'

export default function HardwarePage() {
  const [isPending, startTransition] = useTransition()
  const [activeAction, setActiveAction] = useState(null)
  const [feedback, setFeedback] = useState(null)

  const handleAction = (actionType, actionFn, actionName) => {
    setActiveAction(actionType)
    setFeedback(null)

    startTransition(async () => {
      try {
        const result = await actionFn()
        if (result.success) {
          setFeedback({
            type: 'success',
            title: `Berhasil: ${actionName}`,
            message: result.message,
            timestamp: new Date().toLocaleTimeString('id-ID', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            }),
          })
        } else {
          setFeedback({
            type: 'error',
            title: `Kendala: ${actionName}`,
            message: result.error || 'Terjadi kesalahan sistem saat memproses perintah.',
          })
        }
      } catch {
        setFeedback({
          type: 'error',
          title: `Kendala: ${actionName}`,
          message: 'Gagal menghubungi server aksi perangkat keras.',
        })
      } finally {
        setActiveAction(null)
      }
    })
  }

  return (
    <div className="hardware-page-container">
      {/* Top Header */}
      <header className="hardware-header">
        <h1 className="font-bold text-[32px]">Pusat Kontrol Perangkat Keras</h1>
        <p className="font-normal text-[16px]">Manajemen simpul komputasi Raspberry Pi 4 dan mikrokontroler ESP32</p>
      </header>

      {/* Main Responsive Grid Layout */}
      <div className="hardware-main-layout gap-6">
        {/* Left Side: Hardware Nodes & Sensor Health */}
        <div className="hardware-column gap-6">
          {/* Section 1: Node Komputasi Inti */}
          <section aria-label="Status Node Komputasi">
            <div className="section-title-row">
              <h2 className="section-heading-sm font-semibold text-[24px]">Node Komputasi Inti</h2>
            </div>

            <div className="nodes-grid gap-6">
              {/* Node 1: Raspberry Pi 4 */}
              <article className="node-card rounded-xl">
                <div className="node-card-header">
                  <div className="node-icon-wrapper rounded-xl" aria-hidden="true">
                    <Cpu size={22} />
                  </div>
                  <div className="node-info-text">
                    <h3 className="node-name font-semibold text-[18px]">Raspberry Pi 4</h3>
                    <span className="node-role-desc font-medium text-[13px]">
                      AI Computer Vision Node
                    </span>
                  </div>
                </div>

                <div>
                  <div className="node-status-badge font-semibold text-[13px] rounded-xl">
                    <span className="pulse-dot-emerald" aria-hidden="true" />
                    <span>Terhubung / Aktif</span>
                  </div>
                </div>
              </article>

              {/* Node 2: ESP32 */}
              <article className="node-card rounded-xl">
                <div className="node-card-header">
                  <div className="node-icon-wrapper rounded-xl" aria-hidden="true">
                    <Zap size={22} />
                  </div>
                  <div className="node-info-text">
                    <h3 className="node-name font-semibold text-[18px]">ESP32</h3>
                    <span className="node-role-desc font-medium text-[13px]">
                      IoT Telemetry Node
                    </span>
                  </div>
                </div>

                <div>
                  <div className="node-status-badge font-semibold text-[13px] rounded-xl">
                    <span className="pulse-dot-emerald" aria-hidden="true" />
                    <span>Terhubung / Aktif</span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Section 2: Status Kesehatan Sensor Fisik */}
          <section aria-label="Kesehatan Modul Sensor">
            <div className="section-title-row">
              <h2 className="section-heading-sm font-semibold text-[24px]">Kesehatan Modul Sensor</h2>
            </div>

            <div className="sensors-health-grid gap-6">
              {/* Sensor 1: Load Cell */}
              <article className="sensor-health-card rounded-xl">
                <div className="sensor-health-top">
                  <div className="sensor-health-icon rounded-xl" aria-hidden="true">
                    <Scale size={18} />
                  </div>
                  <h3 className="sensor-health-name font-semibold text-[16px]">
                    Timbangan Digital (Load Cell + HX711)
                  </h3>
                </div>

                <div>
                  <span className="sensor-health-badge font-semibold text-[13px] rounded-xl">
                    <CheckCircle2 size={15} aria-hidden="true" />
                    <span>ONLINE / KALIBRASI NORMAL</span>
                  </span>
                </div>
              </article>

              {/* Sensor 2: Ultrasonik */}
              <article className="sensor-health-card rounded-xl">
                <div className="sensor-health-top">
                  <div className="sensor-health-icon rounded-xl" aria-hidden="true">
                    <Radio size={18} />
                  </div>
                  <h3 className="sensor-health-name font-semibold text-[16px]">
                    Sensor Jarak Ruang (Ultrasonik)
                  </h3>
                </div>

                <div>
                  <span className="sensor-health-badge font-semibold text-[13px] rounded-xl">
                    <CheckCircle2 size={15} aria-hidden="true" />
                    <span>ONLINE / KALIBRASI NORMAL</span>
                  </span>
                </div>
              </article>
            </div>
          </section>
        </div>

        {/* Right Side: Standalone Control Actions Panel */}
        <aside className="action-panel-card rounded-xl" aria-label="Panel Aksi Mandiri">
          <div className="action-panel-header">
            <h2 className="action-panel-title font-semibold text-[24px]">Kontrol & Diagnostik Driver</h2>
            <p className="action-panel-desc font-medium text-[13px]">
              Pemicu aksi sisi server terproteksi sesi otentikasi
            </p>
          </div>

          <div className="action-buttons-stack">
            {/* Action 1: Ping */}
            <button
              type="button"
              disabled={isPending}
              onClick={() =>
                handleAction('ping', triggerPingNodes, 'Ping Perangkat')
              }
              className="btn-hardware-action font-semibold text-[16px] rounded-xl"
              aria-label="Kirim sinyal uji konektivitas ke semua node"
            >
              <span>Ping Perangkat</span>
              {activeAction === 'ping' ? (
                <RefreshCw size={16} className="spin-animation" aria-hidden="true" />
              ) : (
                <Radio size={16} aria-hidden="true" />
              )}
            </button>

            {/* Action 2: Kalibrasi Timbangan */}
            <button
              type="button"
              disabled={isPending}
              onClick={() =>
                handleAction('calibrate', triggerCalibrateScale, 'Kalibrasi Timbangan')
              }
              className="btn-hardware-action font-semibold text-[16px] rounded-xl"
              aria-label="Jalankan kalibrasi tare ke titik nol"
            >
              <span>Kalibrasi Timbangan</span>
              {activeAction === 'calibrate' ? (
                <RefreshCw size={16} className="spin-animation" aria-hidden="true" />
              ) : (
                <Sliders size={16} aria-hidden="true" />
              )}
            </button>

            {/* Action 3: Uji Flap Servo */}
            <button
              type="button"
              disabled={isPending}
              onClick={() =>
                handleAction('servo', triggerTestFlapServo, 'Uji Gerak Flap Servo')
              }
              className="btn-hardware-action font-semibold text-[16px] rounded-xl"
              aria-label="Uji gerak mekanis pembuka katup sortir servo"
            >
              <span>Uji Gerak Flap Servo</span>
              {activeAction === 'servo' ? (
                <RefreshCw size={16} className="spin-animation" aria-hidden="true" />
              ) : (
                <Compass size={16} aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Feedback Toast Notification */}
          {feedback && (
            <div
              className={`action-feedback-toast ${
                feedback.type === 'success'
                  ? 'feedback-success'
                  : 'feedback-error'
              }`}
              role="alert"
              aria-live="polite"
            >
              {feedback.type === 'success' ? (
                <CheckCircle2 size={16} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
              ) : (
                <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
              )}
              <div>
                <strong>{feedback.title}</strong>
                <p style={{ marginTop: '0.15rem' }}>{feedback.message}</p>
                {feedback.timestamp && (
                  <span style={{ fontSize: '0.7rem', opacity: 0.8, display: 'block', marginTop: '0.25rem' }}>
                    Waktu: {feedback.timestamp}
                  </span>
                )}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}


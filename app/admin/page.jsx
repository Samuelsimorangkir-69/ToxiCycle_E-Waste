'use client'

import { useEffect, useMemo, useState, useTransition } from 'react'
import Link from 'next/link'
import { RotateCw, Download, Layers, Scale, Banknote, AlertTriangle, ArrowUpRight } from 'lucide-react'
import MetricCard from '../../components/MetricCard'
import { getCapacityColor } from '../capacity-color'
import { ECONOMIC_PRICES_EVENT, E_WASTE_CATEGORIES, formatRupiah, readPriceEntries } from './economy'
import { refreshTelemetry, exportTelemetryCSV } from './actions'

export default function AdminDashboardPage() {
  const [isPending, startTransition] = useTransition()
  const [isExporting, setIsExporting] = useState(false)
  const [lastUpdated, setLastUpdated] = useState('Baru saja')
  const [priceEntries, setPriceEntries] = useState([])
  const [pricesReady, setPricesReady] = useState(false)
  const overallCapacityPercent = 74
  const overallCapacityColor = getCapacityColor(overallCapacityPercent)

  useEffect(() => {
    const syncPrices = () => {
      setPriceEntries(readPriceEntries())
      setPricesReady(true)
    }

    syncPrices()
    window.addEventListener('storage', syncPrices)
    window.addEventListener(ECONOMIC_PRICES_EVENT, syncPrices)
    return () => {
      window.removeEventListener('storage', syncPrices)
      window.removeEventListener(ECONOMIC_PRICES_EVENT, syncPrices)
    }
  }, [])

  const valuation = useMemo(() => {
    const configuredPrices = new Map(
      priceEntries
        .filter((entry) => entry.pricePerKg !== '' && Number.isFinite(Number(entry.pricePerKg)))
        .map((entry) => [entry.id, Number(entry.pricePerKg)])
    )
    const categoryValues = E_WASTE_CATEGORIES.map((category) => ({
      ...category,
      pricePerKg: configuredPrices.get(category.id),
      subtotal: configuredPrices.has(category.id)
        ? category.weightKg * configuredPrices.get(category.id)
        : null,
    }))
    const configuredCount = categoryValues.filter((category) => category.subtotal !== null).length
    return {
      categoryValues,
      configuredCount,
      missingCount: categoryValues.length - configuredCount,
      total: categoryValues.reduce((sum, category) => sum + (category.subtotal || 0), 0),
    }
  }, [priceEntries])

  // Handle Refresh Sensor action
  const handleRefresh = () => {
    startTransition(async () => {
      await refreshTelemetry()
      const now = new Date()
      setLastUpdated(
        `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
      )
    })
  }

  // Handle Export CSV action
  const handleExportCSV = async () => {
    try {
      setIsExporting(true)
      const data = await exportTelemetryCSV()
      const blob = new Blob([data.csv], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', data.filename)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } finally {
      setIsExporting(false)
    }
  }

  // 3 Primary Metric Data (Zero AI Slop)
  const metrics = [
    {
      title: 'Total E-Waste Masuk',
      value: '1.428',
      unit: 'unit',
      subtext: '+14% periode berjalan',
      icon: Layers,
    },
    {
      title: 'Berat Akumulasi',
      value: '28,7',
      unit: 'kg',
      subtext: 'Total berat sensor dari 5 kompartemen',
      icon: Scale,
    },
    {
      title: 'Estimasi Valuasi Daur Ulang',
      value: !pricesReady
        ? 'Memuat…'
        : valuation.configuredCount === 0
          ? 'Atur harga'
          : formatRupiah(valuation.total),
      unit: '',
      subtext: !pricesReady
        ? 'Mengambil harga acuan'
        : valuation.configuredCount === 0
          ? 'Tambahkan harga per kg untuk mulai menghitung nilai.'
          : valuation.missingCount > 0
            ? `Estimasi parsial · ${valuation.missingCount} kategori belum memiliki harga`
            : 'Estimasi berat × harga acuan per kategori',
      icon: Banknote,
    },
  ]

  // Chamber Capacity Breakdown (5 Kompartemen)
  const chamberCapacity = [
    { name: 'Kompartemen 1 — Baterai + Power Bank', percent: 68 },
    { name: 'Kompartemen 2 — Keyboard + Mouse', percent: 45 },
    { name: 'Kompartemen 3 — Kabel', percent: 54 },
    { name: 'Kompartemen 4 — Charger', percent: 38 },
    { name: 'Kompartemen 5 — PCB', percent: 82 },
  ]

  // Recent AI & Sensor Detection Log
  const detectionLogs = [
    { id: 1, object: 'Baterai + Power Bank', qty: '+1 unit', chamber: 'Kompartemen 1', status: 'Tersortir Otomatis', time: '10:48' },
    { id: 2, object: 'Keyboard + Mouse', qty: '+1 unit', chamber: 'Kompartemen 2', status: 'Tersortir Otomatis', time: '10:24' },
    { id: 3, object: 'Kabel', qty: '+1 unit', chamber: 'Kompartemen 3', status: 'Tersortir Otomatis', time: '09:55' },
    { id: 4, object: 'Charger', qty: '+1 unit', chamber: 'Kompartemen 4', status: 'Tersortir Otomatis', time: '09:12' },
    { id: 5, object: 'PCB', qty: '+1 unit', chamber: 'Kompartemen 5', status: 'Tersortir Otomatis', time: '08:40' },
  ]

  return (
    <div>
      {/* Top Bar with ONLY 2 clean action buttons */}
      <header className="dashboard-topbar">
        <div className="topbar-heading">
          <h1 className="font-bold text-[32px]">Telemetri IoT</h1>
          <p className="font-normal text-[16px]">Drop-box cerdas pemilahan limbah elektronik</p>
        </div>

        <div className="topbar-actions">
          <button
            type="button"
            onClick={handleRefresh}
            disabled={isPending}
            className="btn-action btn-action-outline font-semibold text-[16px] rounded-xl"
            aria-label="Refresh data sensor"
          >
            <RotateCw
              size={15}
              className={isPending ? 'spin-animation' : ''}
              aria-hidden="true"
            />
            <span>{isPending ? 'Memperbarui...' : 'Refresh Sensor'}</span>
          </button>

          <button
            type="button"
            onClick={handleExportCSV}
            disabled={isExporting}
            className="btn-action btn-action-primary font-semibold text-[16px] rounded-xl"
            aria-label="Ekspor data telemetri ke CSV"
          >
            <Download size={15} aria-hidden="true" />
            <span>{isExporting ? 'Mengekspor...' : 'Ekspor CSV'}</span>
          </button>
        </div>
      </header>

      {/* 3 Key Metric Cards */}
      <section className="metrics-row gap-6" aria-label="Metrik Utama">
        {metrics.map((item) => (
          <MetricCard
            key={item.title}
            title={item.title}
            value={item.value}
            unit={item.unit}
            subtext={item.subtext}
            icon={item.icon}
          />
        ))}
      </section>

      <section className="valuation-panel panel-card" aria-labelledby="valuation-heading">
        <div className="valuation-header">
          <div>
            <h2 id="valuation-heading" className="panel-title font-semibold text-[24px]">Estimasi nilai e-waste</h2>
            <p className="valuation-description">Nilai dihitung dari berat tiap kategori dikalikan harga acuan per kilogram.</p>
          </div>
          <Link href="/admin/harga" className="valuation-manage-link">
            Kelola harga <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="valuation-table-wrap">
          <table className="valuation-table">
            <thead>
              <tr>
                <th scope="col">Kategori</th>
                <th scope="col">Berat tercatat</th>
                <th scope="col">Harga acuan / kg</th>
                <th scope="col">Estimasi nilai</th>
              </tr>
            </thead>
            <tbody>
              {valuation.categoryValues.map((category) => (
                <tr key={category.id}>
                  <th scope="row">{category.name}</th>
                  <td>{category.weightKg.toLocaleString('id-ID', { maximumFractionDigits: 1 })} kg</td>
                  <td>{category.pricePerKg == null ? 'Belum diatur' : formatRupiah(category.pricePerKg)}</td>
                  <td>{category.subtotal == null ? '—' : formatRupiah(category.subtotal)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row" colSpan="3">Total estimasi {valuation.missingCount > 0 && valuation.configuredCount > 0 ? '(parsial)' : ''}</th>
                <td>{valuation.configuredCount === 0 ? 'Belum tersedia' : formatRupiah(valuation.total)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className="valuation-footnote">Berat yang tampil saat ini masih memakai data contoh kompartemen. Estimasi otomatis dihitung ulang setelah harga acuan disimpan.</p>
      </section>

      {/* Main Spacious Grid: Chamber Capacity & AI Detection Logs */}
      <section className="telemetry-row gap-6" aria-label="Visual Telemetri Kompartemen dan Deteksi">
        {/* Panel 1: Kapasitas Kompartemen */}
        <div className="panel-card rounded-xl">
          <div className="panel-header">
            <h2 className="panel-title font-semibold text-[24px]">Kapasitas Kompartemen</h2>
            <span className="panel-badge font-medium text-[13px] rounded-xl">Single-Box Aktif</span>
          </div>

          {/* Circular Gauge Overview */}
          <div className="capacity-overview">
            <div className="capacity-circle-wrapper">
              <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
                {/* Background Ring */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="var(--gauge-track)"
                  strokeWidth="9"
                />
                {/* Progress Ring */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke={overallCapacityColor}
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeDasharray="314.16"
                  strokeDashoffset={314.16 * (1 - overallCapacityPercent / 100)}
                  transform="rotate(-90 60 60)"
                />
              </svg>
              <div className="capacity-circle-text">
                <span className="capacity-percent font-bold text-[32px]" style={{ color: overallCapacityColor }}>
                  {overallCapacityPercent}%
                </span>
                <span className="capacity-caption font-medium text-[13px]">Terisi</span>
              </div>
            </div>

            <div className="capacity-meta">
              <h3 className="capacity-status-title font-semibold text-[18px]">Volume Kritis Terkendali</h3>
              <p className="capacity-status-desc font-normal text-[16px]">
                Ruang penyimpanan berada dalam batas aman operasional. Estimasi waktu pengosongan berikutnya: 48 jam.
              </p>
            </div>
          </div>

          {/* Highlight Callout: Kompartemen Paling Penuh */}
          <div className="highest-chamber-callout">
            <div className="highest-callout-left">
              <AlertTriangle
                size={20}
                className="highest-callout-icon"
                style={{ color: getCapacityColor(82) }}
                aria-hidden="true"
              />
              <div>
                <div className="highest-callout-title">
                  Paling Banyak Terisi: Kompartemen 5 (PCB)
                </div>
                <div className="highest-callout-sub">
                  Kapasitas 82% (8,2 kg) — Mendekati ambang batas kritis penjemputan mitra (maks. 10 kg)
                </div>
              </div>
            </div>
            <span
              className="highest-callout-badge"
              style={{ backgroundColor: getCapacityColor(82), color: '#fff' }}
            >
              82% Tertinggi
            </span>
          </div>

          {/* Grafik Komparasi Keterisian 5 Kompartemen */}
          <div className="comparison-barchart">
            <div className="barchart-header">
              <span className="barchart-title font-semibold text-[14px]">
                Grafik Komparasi Keterisian Antar Kompartemen
              </span>
              <span className="barchart-legend font-medium text-[12px]">
                Batas Aman: 80%
              </span>
            </div>

            <div className="barchart-stage">
              {/* Horizontal Grid Guidelines */}
              <div className="barchart-grid-line" style={{ bottom: '100%' }}>
                <span className="barchart-grid-label">100%</span>
              </div>
              <div className="barchart-grid-line" style={{ bottom: '75%' }}>
                <span className="barchart-grid-label">75%</span>
              </div>
              <div className="barchart-grid-line" style={{ bottom: '50%' }}>
                <span className="barchart-grid-label">50%</span>
              </div>
              <div className="barchart-grid-line" style={{ bottom: '25%' }}>
                <span className="barchart-grid-label">25%</span>
              </div>

              {/* Vertical Bars */}
              {chamberCapacity.map((c) => {
                const capacityColor = getCapacityColor(c.percent)
                const isMax = c.percent === 82 // Kompartemen 5 PCB
                return (
                  <div key={c.name} className={`barchart-col ${isMax ? 'is-max' : ''}`}>
                    <span className="barchart-val-tag" style={{ color: capacityColor }}>
                      {c.percent}%
                    </span>
                    <div className="barchart-track" style={{ borderColor: capacityColor }}>
                      <div
                        className="barchart-fill"
                        style={{
                          height: `${c.percent}%`,
                          backgroundColor: capacityColor,
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* X-Axis Labels */}
            <div className="barchart-label-row">
              {chamberCapacity.map((c, idx) => {
                const capacityColor = getCapacityColor(c.percent)
                const isMax = c.percent === 82
                const shortNames = ['Baterai', 'Keyboard', 'Kabel', 'Charger', 'PCB']
                return (
                  <div key={c.name} className={`barchart-label-item ${isMax ? 'is-max' : ''}`}>
                    <span className="barchart-col-title" style={{ color: capacityColor }}>
                      {shortNames[idx]}
                    </span>
                    <span className="barchart-col-sub">Komp {idx + 1}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Chamber Breakdown Bars */}
          <div className="chamber-bars">
            {chamberCapacity.map((chamber) => (
              <div key={chamber.name} className="chamber-bar-item">
                <div className="chamber-bar-labels font-medium text-[14px]">
                  <span className="chamber-name">{chamber.name}</span>
                  <span className="chamber-val" style={{ color: getCapacityColor(chamber.percent) }}>
                    {chamber.percent}%
                  </span>
                </div>
                <div className="chamber-progress-track">
                  <div
                    className="chamber-progress-fill"
                    style={{
                      width: `${chamber.percent}%`,
                      backgroundColor: getCapacityColor(chamber.percent),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel 2: Aktivitas Deteksi AI & Sensor */}
        <div className="panel-card rounded-xl">
          <div className="panel-header">
            <h2 className="panel-title font-semibold text-[24px]">Aktivitas Deteksi AI & Sensor</h2>
            <span className="panel-badge font-medium text-[13px] rounded-xl">Log Terkini</span>
          </div>

          <div className="activity-list">
            {detectionLogs.map((log) => (
              <div key={log.id} className="activity-row rounded-xl">
                <div className="activity-left">
                  <span className="activity-dot" aria-hidden="true" />
                  <div className="activity-details">
                    <span className="activity-item-title font-normal text-[16px]">
                      {log.object} <strong style={{ color: 'var(--color-primary)', fontSize: '13px' }}>({log.qty})</strong>
                    </span>
                    <span className="activity-item-chamber font-medium text-[13px]">{log.chamber}</span>
                  </div>
                </div>
                <div className="activity-right">
                  <span className="activity-status-tag font-semibold text-[13px]">{log.status}</span>
                  <time className="activity-timestamp font-medium text-[13px]">{log.time}</time>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

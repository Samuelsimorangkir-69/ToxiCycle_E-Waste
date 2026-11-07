'use client'

import { useState } from 'react'
import { Radio, Scale, ShieldCheck, AlertTriangle, TrendingUp, Layers, CheckCircle2 } from 'lucide-react'
import { getCapacityColor } from '../../capacity-color'

const chambersData = [
  {
    id: 'chamber-1',
    tabLabel: 'Kompartemen 1',
    itemName: 'Baterai + Power Bank',
    title: 'Kompartemen 1 — Baterai + Power Bank',
    category: 'Limbah Baterai & Power Bank',
    capacityPercent: 68,
    ultrasonicDistance: 32,
    ultrasonicUnit: 'cm',
    ultrasonicMeta: 'Jarak sisa deteksi sensor ultrasonik menuju permukaan e-waste (tinggi ruang 100 cm)',
    loadCellWeight: 6.8,
    loadCellUnit: 'kg',
    loadCellLimit: 10.0,
    loadCellMeta: 'Berat aktual sensor load cell bawah (batas beban aman maksimal 10.0 kg)',
    totalUnits: 342,
    status: 'Kapasitas Aman Terkendali',
    statusTone: 'safe',
    accentColor: 'oklch(0.72 0.18 152)', // Emerald accent
    growth7d: '+44%',
    growthDesc: 'Pertumbuhan normal teratur',
    recentActivities: [
      { id: 1, name: 'Baterai + Power Bank', qty: '+1 unit', time: '10:48', status: 'Tersortir Otomatis' },
      { id: 2, name: 'Baterai + Power Bank', qty: '+1 unit', time: '08:15', status: 'Tersortir Otomatis' },
      { id: 3, name: 'Baterai + Power Bank', qty: '+2 unit', time: '07:30', status: 'Tersortir Otomatis' },
      { id: 4, name: 'Baterai + Power Bank', qty: '+1 unit', time: 'Kemarin', status: 'Tersortir Otomatis' },
    ],
    weeklyTrend: [
      { day: 'Sen', date: '14 Okt', percent: 24, weight: 2.4, diff: '+0%' },
      { day: 'Sel', date: '15 Okt', percent: 32, weight: 3.2, diff: '+8%' },
      { day: 'Rab', date: '16 Okt', percent: 39, weight: 3.9, diff: '+7%' },
      { day: 'Kam', date: '17 Okt', percent: 47, weight: 4.7, diff: '+8%' },
      { day: 'Jum', date: '18 Okt', percent: 53, weight: 5.3, diff: '+6%' },
      { day: 'Sab', date: '19 Okt', percent: 61, weight: 6.1, diff: '+8%' },
      { day: 'Min', date: '20 Okt', percent: 68, weight: 6.8, diff: '+7%' },
    ],
  },
  {
    id: 'chamber-2',
    tabLabel: 'Kompartemen 2',
    itemName: 'Keyboard + Mouse',
    title: 'Kompartemen 2 — Keyboard + Mouse',
    category: 'Limbah Keyboard & Mouse',
    capacityPercent: 45,
    ultrasonicDistance: 55,
    ultrasonicUnit: 'cm',
    ultrasonicMeta: 'Jarak sisa deteksi sensor ultrasonik menuju permukaan e-waste (tinggi ruang 100 cm)',
    loadCellWeight: 4.5,
    loadCellUnit: 'kg',
    loadCellLimit: 10.0,
    loadCellMeta: 'Berat aktual sensor load cell bawah (batas beban aman maksimal 10.0 kg)',
    totalUnits: 185,
    status: 'Kapasitas Normal',
    statusTone: 'safe',
    accentColor: 'oklch(0.68 0.14 165)', // Mint green accent
    growth7d: '+27%',
    growthDesc: 'Laju pembuangan stabil',
    recentActivities: [
      { id: 1, name: 'Keyboard + Mouse', qty: '+1 unit', time: '10:24', status: 'Tersortir Otomatis' },
      { id: 2, name: 'Keyboard + Mouse', qty: '+1 unit', time: '09:05', status: 'Tersortir Otomatis' },
      { id: 3, name: 'Keyboard + Mouse', qty: '+1 unit', time: '07:12', status: 'Tersortir Otomatis' },
      { id: 4, name: 'Keyboard + Mouse', qty: '+1 unit', time: 'Kemarin', status: 'Tersortir Otomatis' },
    ],
    weeklyTrend: [
      { day: 'Sen', date: '14 Okt', percent: 18, weight: 1.8, diff: '+0%' },
      { day: 'Sel', date: '15 Okt', percent: 22, weight: 2.2, diff: '+4%' },
      { day: 'Rab', date: '16 Okt', percent: 27, weight: 2.7, diff: '+5%' },
      { day: 'Kam', date: '17 Okt', percent: 31, weight: 3.1, diff: '+4%' },
      { day: 'Jum', date: '18 Okt', percent: 36, weight: 3.6, diff: '+5%' },
      { day: 'Sab', date: '19 Okt', percent: 40, weight: 4.0, diff: '+4%' },
      { day: 'Min', date: '20 Okt', percent: 45, weight: 4.5, diff: '+5%' },
    ],
  },
  {
    id: 'chamber-3',
    tabLabel: 'Kompartemen 3',
    itemName: 'Kabel',
    title: 'Kompartemen 3 — Kabel',
    category: 'Limbah Kabel',
    capacityPercent: 54,
    ultrasonicDistance: 46,
    ultrasonicUnit: 'cm',
    ultrasonicMeta: 'Jarak sisa deteksi sensor ultrasonik menuju permukaan e-waste (tinggi ruang 100 cm)',
    loadCellWeight: 5.4,
    loadCellUnit: 'kg',
    loadCellLimit: 10.0,
    loadCellMeta: 'Berat aktual sensor load cell bawah (batas beban aman maksimal 10.0 kg)',
    totalUnits: 428,
    status: 'Kapasitas Normal',
    statusTone: 'safe',
    accentColor: 'oklch(0.70 0.16 160)', // Emerald-teal accent
    growth7d: '+34%',
    growthDesc: 'Akumulasi moderat',
    recentActivities: [
      { id: 1, name: 'Kabel', qty: '+1 unit', time: '09:55', status: 'Tersortir Otomatis' },
      { id: 2, name: 'Kabel', qty: '+2 unit', time: '08:35', status: 'Tersortir Otomatis' },
      { id: 3, name: 'Kabel', qty: '+1 unit', time: '06:50', status: 'Tersortir Otomatis' },
      { id: 4, name: 'Kabel', qty: '+1 unit', time: 'Kemarin', status: 'Tersortir Otomatis' },
    ],
    weeklyTrend: [
      { day: 'Sen', date: '14 Okt', percent: 20, weight: 2.0, diff: '+0%' },
      { day: 'Sel', date: '15 Okt', percent: 26, weight: 2.6, diff: '+6%' },
      { day: 'Rab', date: '16 Okt', percent: 32, weight: 3.2, diff: '+6%' },
      { day: 'Kam', date: '17 Okt', percent: 38, weight: 3.8, diff: '+6%' },
      { day: 'Jum', date: '18 Okt', percent: 43, weight: 4.3, diff: '+5%' },
      { day: 'Sab', date: '19 Okt', percent: 49, weight: 4.9, diff: '+6%' },
      { day: 'Min', date: '20 Okt', percent: 54, weight: 5.4, diff: '+5%' },
    ],
  },
  {
    id: 'chamber-4',
    tabLabel: 'Kompartemen 4',
    itemName: 'Charger',
    title: 'Kompartemen 4 — Charger',
    category: 'Limbah Charger & Adaptor',
    capacityPercent: 38,
    ultrasonicDistance: 62,
    ultrasonicUnit: 'cm',
    ultrasonicMeta: 'Jarak sisa deteksi sensor ultrasonik menuju permukaan e-waste (tinggi ruang 100 cm)',
    loadCellWeight: 3.8,
    loadCellUnit: 'kg',
    loadCellLimit: 10.0,
    loadCellMeta: 'Berat aktual sensor load cell bawah (batas beban aman maksimal 10.0 kg)',
    totalUnits: 216,
    status: 'Kapasitas Lapang',
    statusTone: 'safe',
    accentColor: 'oklch(0.74 0.15 145)', // Vivid green accent
    growth7d: '+24%',
    growthDesc: 'Tingkat pengisian terendah',
    recentActivities: [
      { id: 1, name: 'Charger', qty: '+1 unit', time: '09:12', status: 'Tersortir Otomatis' },
      { id: 2, name: 'Charger', qty: '+1 unit', time: '08:00', status: 'Tersortir Otomatis' },
      { id: 3, name: 'Charger', qty: '+1 unit', time: '07:05', status: 'Tersortir Otomatis' },
      { id: 4, name: 'Charger', qty: '+1 unit', time: 'Kemarin', status: 'Tersortir Otomatis' },
    ],
    weeklyTrend: [
      { day: 'Sen', date: '14 Okt', percent: 14, weight: 1.4, diff: '+0%' },
      { day: 'Sel', date: '15 Okt', percent: 17, weight: 1.7, diff: '+3%' },
      { day: 'Rab', date: '16 Okt', percent: 21, weight: 2.1, diff: '+4%' },
      { day: 'Kam', date: '17 Okt', percent: 26, weight: 2.6, diff: '+5%' },
      { day: 'Jum', date: '18 Okt', percent: 30, weight: 3.0, diff: '+4%' },
      { day: 'Sab', date: '19 Okt', percent: 34, weight: 3.4, diff: '+4%' },
      { day: 'Min', date: '20 Okt', percent: 38, weight: 3.8, diff: '+4%' },
    ],
  },
  {
    id: 'chamber-5',
    tabLabel: 'Kompartemen 5',
    itemName: 'PCB',
    title: 'Kompartemen 5 — PCB',
    category: 'Limbah Papan Sirkuit Cetak (PCB)',
    capacityPercent: 82,
    ultrasonicDistance: 18,
    ultrasonicUnit: 'cm',
    ultrasonicMeta: 'Jarak sisa deteksi sensor ultrasonik menuju permukaan e-waste (tinggi ruang 100 cm)',
    loadCellWeight: 8.2,
    loadCellUnit: 'kg',
    loadCellLimit: 10.0,
    loadCellMeta: 'Berat aktual sensor load cell bawah (batas beban aman maksimal 10.0 kg)',
    totalUnits: 257,
    status: 'Mendekati Batas Kritis',
    statusTone: 'warning',
    accentColor: 'oklch(0.75 0.18 80)', // Amber accent for warning
    growth7d: '+47%',
    growthDesc: 'Pertumbuhan tercepat / Waspada penjemputan',
    recentActivities: [
      { id: 1, name: 'PCB', qty: '+1 unit', time: '08:40', status: 'Tersortir Otomatis' },
      { id: 2, name: 'PCB', qty: '+1 unit', time: '07:22', status: 'Tersortir Otomatis' },
      { id: 3, name: 'PCB', qty: '+2 unit', time: '06:15', status: 'Tersortir Otomatis' },
      { id: 4, name: 'PCB', qty: '+1 unit', time: 'Kemarin', status: 'Tersortir Otomatis' },
    ],
    weeklyTrend: [
      { day: 'Sen', date: '14 Okt', percent: 35, weight: 3.5, diff: '+0%' },
      { day: 'Sel', date: '15 Okt', percent: 44, weight: 4.4, diff: '+9%' },
      { day: 'Rab', date: '16 Okt', percent: 52, weight: 5.2, diff: '+8%' },
      { day: 'Kam', date: '17 Okt', percent: 61, weight: 6.1, diff: '+9%' },
      { day: 'Jum', date: '18 Okt', percent: 69, weight: 6.9, diff: '+8%' },
      { day: 'Sab', date: '19 Okt', percent: 76, weight: 7.6, diff: '+7%' },
      { day: 'Min', date: '20 Okt', percent: 82, weight: 8.2, diff: '+6%' },
    ],
  },
]

export default function KompartemenDetailPage() {
  const [selectedId, setSelectedId] = useState('chamber-1')
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const activeChamber =
    chambersData.find((c) => c.id === selectedId) || chambersData[0]
  const capacityColor = getCapacityColor(activeChamber.capacityPercent)

  // Circle SVG Math (Radius: 88, Circumference: 2 * PI * 88 = 552.92)
  const circleRadius = 88
  const circumference = 2 * Math.PI * circleRadius
  const strokeOffset =
    circumference * (1 - activeChamber.capacityPercent / 100)

  // 7-Day Trend Chart SVG Math (ViewBox: 0 0 680 200)
  // X: 50 to 650 (step 100). Y: 0% = 165, 100% = 25. (Height range = 140)
  const trendPoints = activeChamber.weeklyTrend.map((item, idx) => {
    const x = 50 + idx * 100
    const y = 25 + (100 - item.percent) * 1.4
    return { ...item, x, y }
  })

  // SVG Line path: M x0,y0 L x1,y1 ...
  const linePath = trendPoints
    .map((pt, idx) => `${idx === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`)
    .join(' ')

  // SVG Area path: M x0,y0 L ... L xN,yN L xN,165 L x0,165 Z
  const areaPath = `${linePath} L ${trendPoints[trendPoints.length - 1].x} 165 L ${trendPoints[0].x} 165 Z`

  return (
    <div className="chamber-page-container">
      {/* Top Header & Dynamic Chamber Switcher */}
      <header className="chamber-top-nav">
        <div className="chamber-heading">
          <h1 className="font-bold text-[32px]">Detail Kompartemen Sensor</h1>
          <p className="font-normal text-[16px]">Telemetri volumetrik ultrasonik dan penimbangan muatan aktif</p>
        </div>

        {/* Dynamic Interactive Switcher (5 Kompartemen) */}
        <div
          className="chamber-switcher-pills rounded-xl"
          role="tablist"
          aria-label="Pilihan Kompartemen Sensor"
        >
          {chambersData.map((chamber) => {
            const isSelected = chamber.id === selectedId
            return (
              <button
                key={chamber.id}
                role="tab"
                aria-selected={isSelected}
                tabIndex={0}
                onClick={() => {
                  setSelectedId(chamber.id)
                  setHoveredIndex(null)
                }}
                className={`chamber-pill-btn font-medium text-[14px] rounded-xl ${isSelected ? 'active' : ''}`}
              >
                {chamber.tabLabel}
              </button>
            )
          })}
        </div>
      </header>

      {/* Main High-Fidelity Chamber Stage */}
      <section
        className="chamber-stage-card rounded-xl"
        aria-live="polite"
        aria-label={`Data ${activeChamber.title}`}
      >
        {/* Dynamic Category Tag */}
        <div className="chamber-badge-type font-medium text-[14px] rounded-xl">
          {activeChamber.category}
        </div>

        {/* Interactive Volumetric Circle Gauge */}
        <div className="chamber-gauge-center">
          <svg
            className="gauge-svg"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            {/* Background Track */}
            <circle
              className="gauge-track"
              cx="100"
              cy="100"
              r={circleRadius}
            />
            {/* Dynamic Active Progress Ring */}
            <circle
              className="gauge-indicator"
              cx="100"
              cy="100"
              r={circleRadius}
              stroke={capacityColor}
              strokeDasharray={circumference}
              strokeDashoffset={strokeOffset}
            />
          </svg>

          {/* Centered Numbers */}
          <div className="gauge-center-content">
            <span className="gauge-big-num font-bold text-[32px]" style={{ color: capacityColor }}>
              {activeChamber.capacityPercent}%
            </span>
            <span className="gauge-sub-label font-medium text-[13px]">Volumetrik</span>
          </div>
        </div>

        {/* Status Callout */}
        <div
          className="font-medium text-[14px] rounded-xl"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 0.9rem',
            backgroundColor: 'var(--color-surface-elevated)',
            border: '1px solid var(--color-border)',
            marginBottom: '2rem',
            color: 'var(--color-text-primary)',
          }}
        >
          {activeChamber.statusTone === 'warning' ? (
            <AlertTriangle
              size={16}
              style={{ color: capacityColor }}
              aria-hidden="true"
            />
          ) : (
            <ShieldCheck
              size={16}
              style={{ color: capacityColor }}
              aria-hidden="true"
            />
          )}
          <span>{activeChamber.status}</span>
        </div>

        {/* Essential Sensor Telemetry: Ultrasonic, Load Cell (10kg), & Unit Count */}
        <div className="sensor-readings-wrapper gap-6">
          {/* Sensor 1: Ultrasonik */}
          <div className="sensor-box rounded-xl">
            <div className="sensor-box-header">
              <div className="sensor-box-icon rounded-xl" aria-hidden="true">
                <Radio size={17} />
              </div>
              <span className="sensor-box-title font-medium text-[14px]">Sensor Ultrasonik</span>
            </div>
            <div className="sensor-box-value font-bold text-[32px]">
              {activeChamber.ultrasonicDistance}
              <span className="font-medium text-[14px]">{activeChamber.ultrasonicUnit}</span>
            </div>
            <p className="sensor-box-meta font-medium text-[13px]">{activeChamber.ultrasonicMeta}</p>
          </div>

          {/* Sensor 2: Load Cell (10 kg Limit) */}
          <div className="sensor-box rounded-xl">
            <div className="sensor-box-header">
              <div className="sensor-box-icon rounded-xl" aria-hidden="true">
                <Scale size={17} />
              </div>
              <span className="sensor-box-title font-medium text-[14px]">Load Cell (Maks 10 kg)</span>
            </div>
            <div className="sensor-box-value font-bold text-[32px]">
              {activeChamber.loadCellWeight}
              <span className="font-medium text-[14px]">{activeChamber.loadCellUnit}</span>
            </div>
            <p className="sensor-box-meta font-medium text-[13px]">{activeChamber.loadCellMeta}</p>
          </div>

          {/* Metric 3: Akumulasi Unit Masuk */}
          <div className="sensor-box rounded-xl">
            <div className="sensor-box-header">
              <div className="sensor-box-icon rounded-xl" aria-hidden="true">
                <Layers size={17} />
              </div>
              <span className="sensor-box-title font-medium text-[14px]">Total {activeChamber.itemName} Masuk</span>
            </div>
            <div className="sensor-box-value font-bold text-[32px]">
              {activeChamber.totalUnits}
              <span className="font-medium text-[14px]">unit</span>
            </div>
            <p className="sensor-box-meta font-medium text-[13px]">
              Total unit {activeChamber.itemName} terdeteksi computer vision yang telah tersortir masuk ke {activeChamber.tabLabel}
            </p>
          </div>
        </div>
      </section>

      {/* Log Aktivitas Deteksi AI & Sensor Sesuai Kategori Kompartemen */}
      <section
        className="chamber-items-card rounded-xl"
        aria-label={`Log Aktivitas Deteksi ${activeChamber.title}`}
      >
        <div className="chamber-items-header">
          <div className="chamber-items-title-col">
            <h2 className="font-semibold text-[24px]" style={{ color: 'var(--color-text-primary)' }}>
              Log Aktivitas Deteksi AI & Sensor ({activeChamber.tabLabel})
            </h2>
            <p className="font-normal text-[16px]" style={{ color: 'var(--color-text-secondary)' }}>
              Pencatatan real-time unit masuk sampah elektronik &quot;{activeChamber.itemName}&quot; dari computer vision
            </p>
          </div>

          <div className="trend-badge-delta">
            <CheckCircle2 size={16} aria-hidden="true" />
            <span>Total Masuk: <strong>{activeChamber.totalUnits} unit</strong></span>
          </div>
        </div>

        <div className="chamber-items-subpanel">
          <div className="subpanel-header">
            <span className="subpanel-title font-semibold text-[14px]">
              Deteksi Masuk: {activeChamber.itemName}
            </span>
            <span className="font-medium text-[12px]" style={{ color: 'var(--color-text-muted)' }}>
              Node Sensor: Raspberry Pi 4 (AI Computer Vision)
            </span>
          </div>

          <div className="chamber-log-list">
            {activeChamber.recentActivities.map((act) => (
              <div key={act.id} className="chamber-log-item">
                <div className="chamber-log-left">
                  <span
                    className="chamber-log-dot"
                    style={{ backgroundColor: activeChamber.accentColor }}
                    aria-hidden="true"
                  />
                  <div>
                    <span className="chamber-log-name font-medium text-[14px]">{act.name}</span>
                    <strong className="chamber-log-qty">({act.qty})</strong>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    className="font-medium text-[12px]"
                    style={{
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-surface-elevated)',
                      color: 'var(--color-primary)',
                      border: '1px solid var(--color-border-subtle)',
                    }}
                  >
                    {act.status}
                  </span>
                  <time className="chamber-log-time">{act.time}</time>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-Day Accumulated Capacity Trend Chart */}
      <section
        className="chamber-trend-card rounded-xl"
        aria-label={`Grafik Tren 7 Hari Terakhir ${activeChamber.title}`}
      >
        <div className="trend-header-row">
          <div className="trend-title-col">
            <h2 className="font-semibold text-[24px]" style={{ color: 'var(--color-text-primary)' }}>
              Tren Keterisian Kapasitas Akumulasi (7 Hari Terakhir)
            </h2>
            <p className="font-normal text-[16px]" style={{ color: 'var(--color-text-secondary)' }}>
              Riwayat telemetri volume masuk untuk {activeChamber.title} ({activeChamber.growthDesc})
            </p>
          </div>

          <div className={`trend-badge-delta ${activeChamber.statusTone === 'warning' ? 'warning' : ''}`}>
            <TrendingUp size={16} aria-hidden="true" />
            <span>Kenaikan 7 Hari: <strong>{activeChamber.growth7d}</strong></span>
          </div>
        </div>

        {/* Responsive Interactive SVG Area & Line Chart */}
        <div className="trend-svg-wrapper">
          <svg
            className="trend-svg"
            viewBox="0 0 680 200"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              {/* Gradient for area under curve */}
              <linearGradient id={`trend-grad-${activeChamber.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={capacityColor} stopOpacity="0.32" />
                <stop offset="100%" stopColor={capacityColor} stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* Horizontal Grid lines */}
            <line x1="50" y1="25" x2="650" y2="25" className="trend-grid-line" />
            <text x="40" y="29" textAnchor="end" className="trend-axis-text">100%</text>

            <line x1="50" y1="60" x2="650" y2="60" className="trend-grid-line" />
            <text x="40" y="64" textAnchor="end" className="trend-axis-text">75%</text>

            <line x1="50" y1="95" x2="650" y2="95" className="trend-grid-line" />
            <text x="40" y="99" textAnchor="end" className="trend-axis-text">50%</text>

            <line x1="50" y1="130" x2="650" y2="130" className="trend-grid-line" />
            <text x="40" y="134" textAnchor="end" className="trend-axis-text">25%</text>

            <line x1="50" y1="165" x2="650" y2="165" className="trend-grid-line" />
            <text x="40" y="169" textAnchor="end" className="trend-axis-text">0%</text>

            {/* Filled Area */}
            <path
              d={areaPath}
              fill={`url(#trend-grad-${activeChamber.id})`}
              className="trend-area-path"
            />

            {/* Main Stroke Line */}
            <path
              d={linePath}
              stroke={capacityColor}
              className="trend-line-path"
            />

            {/* Data Point Markers & Labels */}
            {trendPoints.map((pt, idx) => {
              const isHovered = hoveredIndex === idx
              const isToday = idx === trendPoints.length - 1
              const pointColor = getCapacityColor(pt.percent)

              return (
                <g key={pt.date}>
                  {/* Vertical hover guide */}
                  {isHovered && (
                    <line
                      x1={pt.x}
                      y1="25"
                      x2={pt.x}
                      y2="165"
                      stroke={pointColor}
                      strokeWidth="1.5"
                      strokeDasharray="2 2"
                      opacity="0.75"
                    />
                  )}

                  {/* Outer glow ring on hover/today */}
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isHovered ? 8 : isToday ? 6 : 4}
                    fill={pointColor}
                    opacity={isHovered ? 0.35 : isToday ? 0.25 : 0}
                  />

                  {/* Main Circle Point */}
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isHovered ? 5.5 : isToday ? 4.5 : 3.5}
                    fill={pointColor}
                    stroke="var(--color-surface)"
                    strokeWidth="2"
                    className="trend-data-point"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />

                  {/* Top Percentage Label */}
                  <text
                    x={pt.x}
                    y={pt.y - 10}
                    textAnchor="middle"
                    fill={pointColor}
                    fontSize={isHovered || isToday ? '12px' : '11px'}
                    fontWeight={isHovered || isToday ? '700' : '600'}
                  >
                    {pt.percent}%
                  </text>

                  {/* X-axis Date Label */}
                  <text
                    x={pt.x}
                    y="186"
                    textAnchor="middle"
                    className="trend-axis-text"
                    fill={isToday ? 'var(--color-text-primary)' : 'var(--color-text-muted)'}
                    fontWeight={isToday ? '700' : '500'}
                  >
                    {pt.date}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* 7-Day Micro Inspection Grid Cards */}
        <div className="trend-days-grid" role="list" aria-label="Rincian 7 Hari Terakhir">
          {activeChamber.weeklyTrend.map((item, idx) => {
            const isToday = idx === activeChamber.weeklyTrend.length - 1
            const isHovered = hoveredIndex === idx
            const pointColor = getCapacityColor(item.percent)

            return (
              <div
                key={item.date}
                role="listitem"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`trend-day-card rounded-xl ${
                  isToday
                    ? activeChamber.statusTone === 'warning'
                      ? 'active-warning'
                      : 'active-today'
                    : ''
                }`}
                style={
                  isHovered
                    ? { borderColor: pointColor, backgroundColor: 'var(--color-surface-hover)' }
                    : isToday
                      ? { borderColor: pointColor }
                      : undefined
                }
              >
                <div className="trend-day-date">
                  {item.day}, {item.date}
                </div>
                <div
                  className="trend-day-val"
                  style={{ color: pointColor }}
                >
                  {item.percent}%
                </div>
                <div className="trend-day-kg">
                  {item.weight} kg
                </div>
                <div
                  className={`trend-day-delta ${
                    activeChamber.statusTone === 'warning' && isToday ? 'accent' : ''
                  }`}
                >
                  {item.diff}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

'use client'

import { useState, useEffect, useRef } from 'react'
import {
  User,
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  Plus,
  X,
  Check,
  Building2,
  CheckCircle2,
  Loader2,
  Sparkles,
  Trash2,
  AlertCircle,
  Search,
} from 'lucide-react'

export const KOMPARTEMEN_CATEGORIES = [
  { id: 'komp-1', name: 'Kompartemen 1 — Baterai + Power Bank', code: 'Komp 1', keyword: 'Baterai' },
  { id: 'komp-2', name: 'Kompartemen 2 — Keyboard + Mouse', code: 'Komp 2', keyword: 'Keyboard' },
  { id: 'komp-3', name: 'Kompartemen 3 — Kabel', code: 'Komp 3', keyword: 'Kabel' },
  { id: 'komp-4', name: 'Kompartemen 4 — Charger', code: 'Komp 4', keyword: 'Charger' },
  { id: 'komp-5', name: 'Kompartemen 5 — PCB', code: 'Komp 5', keyword: 'PCB' },
]

const initialVendors = [
  {
    id: 1,
    name: 'PT Tekno Resik',
    badges: ['Kompartemen 5 — PCB'],
    pic: 'Budi Santoso',
    phone: '+62 812-3456-7891',
    phoneClean: '6281234567891',
    email: 'kontak@teknoresik.co.id',
  },
  {
    id: 2,
    name: 'PT Eco Baterai',
    badges: ['Kompartemen 1 — Baterai + Power Bank'],
    pic: 'Siti Rahmawati',
    phone: '+62 812-3456-7892',
    phoneClean: '6281234567892',
    email: 'operasional@ecobaterai.id',
  },
  {
    id: 3,
    name: 'PT Revo Sirkular',
    badges: ['Kompartemen 2 — Keyboard + Mouse', 'Kompartemen 5 — PCB'],
    pic: 'Hendra Wijaya',
    phone: '+62 812-3456-7893',
    phoneClean: '6281234567893',
    email: 'partnership@revosirkular.com',
  },
  {
    id: 4,
    name: 'CV Daur Logam Mulia',
    badges: ['Kompartemen 3 — Kabel', 'Kompartemen 4 — Charger'],
    pic: 'Agus Pratama',
    phone: '+62 812-3456-7894',
    phoneClean: '6281234567894',
    email: 'info@daurlogammulia.co.id',
  },
  {
    id: 5,
    name: 'PT Surya E-Waste',
    badges: ['Kompartemen 4 — Charger', 'Kompartemen 5 — PCB'],
    pic: 'Dewi Anggraini',
    phone: '+62 812-3456-7895',
    phoneClean: '6281234567895',
    email: 'logistik@suryaewaste.id',
  },
  {
    id: 6,
    name: 'PT Hijau Sirkular',
    badges: [
      'Kompartemen 1 — Baterai + Power Bank',
      'Kompartemen 2 — Keyboard + Mouse',
      'Kompartemen 3 — Kabel',
    ],
    pic: 'Farhan Ramadhan',
    phone: '+62 812-3456-7896',
    phoneClean: '6281234567896',
    email: 'halo@hijausirkular.com',
  },
]

const getVendorBadges = (vendor) => {
  if (Array.isArray(vendor.badges) && vendor.badges.length > 0) {
    return vendor.badges
  }
  if (vendor.badge) {
    if (vendor.badge.includes(',')) {
      return vendor.badge.split(',').map((b) => b.trim())
    }
    return [vendor.badge]
  }
  return ['Kompartemen 1 — Baterai + Power Bank']
}

export default function MitraPage() {
  const [vendors, setVendors] = useState(initialVendors)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isShaking, setIsShaking] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})
  const [errorMsg, setErrorMsg] = useState('')
  const [newlyAddedId, setNewlyAddedId] = useState(null)
  const [toast, setToast] = useState(null)

  const nameInputRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    badges: ['Kompartemen 1 — Baterai + Power Bank'],
    pic: '',
    phone: '',
    email: '',
  })

  // Load custom vendors from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('toxiccycle-custom-mitra')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setVendors([...parsed, ...initialVendors])
        }
      }
    } catch {
      // Ignore fallback
    }
  }, [])

  // Auto-focus first input when modal opens
  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        nameInputRef.current?.focus()
      }, 80)
      return () => clearTimeout(timer)
    }
  }, [isModalOpen])

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleCloseModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  // Auto-dismiss toast
  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => {
      setToast(null)
    }, 4500)
    return () => clearTimeout(timer)
  }, [toast])

  // Clear newly added highlight after 4 seconds
  useEffect(() => {
    if (!newlyAddedId) return
    const timer = setTimeout(() => {
      setNewlyAddedId(null)
    }, 4000)
    return () => clearTimeout(timer)
  }, [newlyAddedId])

  const handleOpenModal = () => {
    setErrorMsg('')
    setFieldErrors({})
    setIsShaking(false)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    if (isSubmitting) return
    setIsModalOpen(false)
    setErrorMsg('')
    setFieldErrors({})
    setIsShaking(false)
  }

  // Data kapasitas tiap kompartemen: max 10 kg per kompartemen
  const KOMPARTEMEN_SENSOR = [
    { label: 'Baterai + Power Bank', percent: 68, maxKg: 10 },
    { label: 'Keyboard + Mouse',     percent: 45, maxKg: 10 },
    { label: 'Kabel',                percent: 54, maxKg: 10 },
    { label: 'Charger',              percent: 38, maxKg: 10 },
    { label: 'PCB',                  percent: 82, maxKg: 10 },
  ]

  const generateWhatsAppLink = (vendor) => {
    const badges = getVendorBadges(vendor)
    const badgesText = badges.map((b) => `- ${b}`).join('\n')

    // Hitung berat aktual tiap kompartemen: (percent / 100) * maxKg, dibulatkan 1 desimal
    const sensorLines = KOMPARTEMEN_SENSOR.map((k, i) => {
      const beratKg = ((k.percent / 100) * k.maxKg).toFixed(1).replace('.', ',')
      return `- Kompartemen ${i + 1} (${k.label}): ${k.percent}% (${beratKg} kg)`
    }).join('\n')

    const totalKg = KOMPARTEMEN_SENSOR.reduce(
      (sum, k) => sum + (k.percent / 100) * k.maxKg,
      0
    ).toFixed(1).replace('.', ',')

    const message = `Halo ${vendor.pic}, saya Admin ToxicCycle.

Berikut pembaruan status kapasitas IoT Smart Drop-Box saat ini:
${sensorLines}
Total Akumulasi: ${totalKg} kg.

Kategori Spesialisasi Penjemputan (${vendor.name}):
${badgesText}

Mohon konfirmasi jadwal penjemputan daur ulang dari pihak ${vendor.name}. Terima kasih.`

    return `https://wa.me/${vendor.phoneClean}?text=${encodeURIComponent(message)}`
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: false }))
    }
    if (errorMsg) setErrorMsg('')
  }

  const toggleCategory = (categoryName) => {
    setFormData((prev) => {
      const exists = prev.badges.includes(categoryName)
      let updated
      if (exists) {
        updated = prev.badges.filter((b) => b !== categoryName)
      } else {
        updated = [...prev.badges, categoryName]
      }
      return { ...prev, badges: updated }
    })
    if (fieldErrors.badges) {
      setFieldErrors((prev) => ({ ...prev, badges: false }))
    }
    if (errorMsg) setErrorMsg('')
  }

  const selectAllCategories = () => {
    setFormData((prev) => ({
      ...prev,
      badges: KOMPARTEMEN_CATEGORIES.map((k) => k.name),
    }))
    if (fieldErrors.badges) {
      setFieldErrors((prev) => ({ ...prev, badges: false }))
    }
  }

  const clearAllCategories = () => {
    setFormData((prev) => ({
      ...prev,
      badges: [],
    }))
  }

  const triggerShake = () => {
    setIsShaking(true)
    setTimeout(() => setIsShaking(false), 450)
  }

  const handleAddVendor = async (e) => {
    e.preventDefault()

    const errors = {}
    if (!formData.name.trim()) errors.name = true
    if (!formData.pic.trim()) errors.pic = true
    if (!formData.phone.trim()) errors.phone = true
    if (!formData.email.trim()) errors.email = true
    if (!formData.badges || formData.badges.length === 0) errors.badges = true

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      triggerShake()
      if (errors.badges && Object.keys(errors).length === 1) {
        setErrorMsg('Pilih minimal satu kategori spesialisasi kompartemen untuk mitra ini.')
      } else {
        setErrorMsg('Mohon lengkapi seluruh formulir bertanda merah sebelum menyimpan.')
      }
      return
    }

    setIsSubmitting(true)

    // Clean phone number for wa.me
    let cleanDigits = formData.phone.replace(/\D/g, '')
    if (cleanDigits.startsWith('0')) {
      cleanDigits = '62' + cleanDigits.slice(1)
    } else if (cleanDigits.startsWith('8')) {
      cleanDigits = '62' + cleanDigits
    }

    const newId = Date.now()
    const newVendor = {
      id: newId,
      name: formData.name.trim(),
      badges: formData.badges,
      badge: formData.badges.join(', '),
      pic: formData.pic.trim(),
      phone: formData.phone.trim(),
      phoneClean: cleanDigits,
      email: formData.email.trim(),
      isCustom: true,
    }

    // Delay 400ms for realistic pleasant tactile feedback
    setTimeout(() => {
      const updatedList = [newVendor, ...vendors]
      setVendors(updatedList)

      // Save custom vendors to localStorage
      try {
        const customOnly = updatedList.filter((v) => v.isCustom || v.id > 10)
        localStorage.setItem('toxiccycle-custom-mitra', JSON.stringify(customOnly))
      } catch {
        // Ignored
      }

      // Reset form & state
      setFormData({
        name: '',
        badges: ['Kompartemen 1 — Baterai + Power Bank'],
        pic: '',
        phone: '',
        email: '',
      })
      setErrorMsg('')
      setFieldErrors({})
      setIsSubmitting(false)
      setIsModalOpen(false)

      // Highlight new card & show Toast
      setNewlyAddedId(newId)
      setToast({
        type: 'success',
        title: 'Mitra Berhasil Ditambahkan!',
        message: `${newVendor.name} telah terdaftar dan siap dihubungi melalui WhatsApp.`,
      })
    }, 400)
  }

  const handleDeleteVendor = (vendorId, vendorName) => {
    const updatedList = vendors.filter((v) => v.id !== vendorId)
    setVendors(updatedList)

    try {
      const customOnly = updatedList.filter((v) => v.isCustom || v.id > 10)
      localStorage.setItem('toxiccycle-custom-mitra', JSON.stringify(customOnly))
    } catch {
      // Ignored
    }

    setToast({
      type: 'info',
      title: 'Mitra Dihapus',
      message: `${vendorName} telah dihapus dari daftar mitra.`,
    })
  }

  // Filtered vendors by Search Query & Category
  const filteredVendors = vendors.filter((v) => {
    const badges = getVendorBadges(v)
    const matchesSearch =
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.pic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      badges.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()))

    if (!matchesSearch) return false

    if (selectedCategory === 'ALL') return true
    return badges.some((b) => b.toLowerCase().includes(selectedCategory.toLowerCase()))
  })

  return (
    <div className="mitra-page-container">
      {/* Toast Notification Container */}
      {toast && (
        <aside className="mitra-toast-container" aria-live="polite">
          <div className="mitra-toast" role="alert">
            <CheckCircle2 size={20} className="mitra-toast-icon" aria-hidden="true" />
            <div className="mitra-toast-body">
              <span className="mitra-toast-title">{toast.title}</span>
              <span className="mitra-toast-desc">{toast.message}</span>
            </div>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="mitra-toast-close"
              aria-label="Tutup notifikasi"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
        </aside>
      )}

      {/* Header with Interactive Tambah Mitra Action Button */}
      <header className="mitra-topbar-wrapper">
        <div className="mitra-header">
          <h1 className="font-bold text-[32px]">Mitra Daur Ulang</h1>
          <p className="font-normal text-[16px]">
            Direktori vendor berlisensi penanganan limbah elektronik aktif ({vendors.length} mitra terdaftar)
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenModal}
          className="btn-action btn-action-primary btn-tambah-mitra font-semibold text-[16px] rounded-xl"
          aria-label="Tambah mitra daur ulang baru"
        >
          <Plus size={18} className="btn-plus-icon" aria-hidden="true" />
          <span>Tambah Mitra</span>
        </button>
      </header>

      {/* Search & Category Filter Bar */}
      <section className="mitra-filter-bar" aria-label="Pencarian dan Filter Mitra">
        <div className="mitra-search-wrap">
          <Search size={16} className="mitra-search-icon" aria-hidden="true" />
          <input
            type="text"
            placeholder="Cari nama vendor, PIC, kompartemen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mitra-search-input"
            aria-label="Cari nama vendor, PIC, atau kompartemen"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '12px',
                background: 'none',
                border: 'none',
                color: 'var(--color-text-muted)',
                cursor: 'pointer',
              }}
              aria-label="Hapus pencarian"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="mitra-filter-pills" role="radiogroup" aria-label="Filter kategori kompartemen">
          <button
            type="button"
            onClick={() => setSelectedCategory('ALL')}
            className={`mitra-filter-btn ${selectedCategory === 'ALL' ? 'active' : ''}`}
            role="radio"
            aria-checked={selectedCategory === 'ALL'}
          >
            Semua ({vendors.length})
          </button>
          {KOMPARTEMEN_CATEGORIES.map((cat) => {
            const count = vendors.filter((v) =>
              getVendorBadges(v).some((b) => b.toLowerCase().includes(cat.keyword.toLowerCase()))
            ).length
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.keyword)}
                className={`mitra-filter-btn ${selectedCategory === cat.keyword ? 'active' : ''}`}
                role="radio"
                aria-checked={selectedCategory === cat.keyword}
              >
                {cat.code} ({count})
              </button>
            )
          })}
        </div>
      </section>

      {/* Elastic OpenDesign Grid */}
      <section className="mitra-grid gap-6" aria-label="Daftar Vendor Mitra">
        {filteredVendors.length === 0 ? (
          <div
            style={{
              gridColumn: '1 / -1',
              padding: '48px 24px',
              textAlign: 'center',
              backgroundColor: 'var(--color-surface)',
              border: '1px dashed var(--color-border)',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', marginBottom: '8px' }}>
              Tidak ditemukan mitra yang sesuai dengan pencarian atau filter yang dipilih.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('ALL')
              }}
              className="btn-action btn-action-outline font-medium text-[13px] rounded-xl"
              style={{ marginTop: '8px' }}
            >
              Reset Filter Pencarian
            </button>
          </div>
        ) : (
          filteredVendors.map((vendor) => {
            const waLink = generateWhatsAppLink(vendor)
            const vendorBadges = getVendorBadges(vendor)
            const isNewlyAdded = vendor.id === newlyAddedId
            const isCustom = vendor.isCustom || vendor.id > 10

            return (
              <article
                key={vendor.id}
                className={`mitra-card rounded-xl ${isNewlyAdded ? 'mitra-card-highlighted' : ''}`}
              >
                <div className="mitra-top">
                  {/* Header Kartu: Avatar Perusahaan + Nama & Status */}
                  <div className="mitra-card-header">
                    <div className="mitra-company-wrap">
                      <div className="mitra-company-avatar">
                        <Building2 size={22} aria-hidden="true" />
                      </div>
                      <div className="mitra-company-text">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <h2 className="mitra-name font-semibold text-[18px]">{vendor.name}</h2>
                          {isNewlyAdded && (
                            <span className="mitra-badge-new">
                              <Sparkles size={11} aria-hidden="true" />
                              Baru
                            </span>
                          )}
                        </div>
                        <span className="mitra-verified-tag font-medium">
                          <CheckCircle2 size={12} aria-hidden="true" />
                          Vendor Berlisensi Aktif
                        </span>
                      </div>
                    </div>

                    {isCustom && (
                      <button
                        type="button"
                        onClick={() => handleDeleteVendor(vendor.id, vendor.name)}
                        className="btn-delete-mitra"
                        title="Hapus mitra ini"
                        aria-label={`Hapus mitra ${vendor.name}`}
                      >
                        <Trash2 size={16} aria-hidden="true" />
                      </button>
                    )}
                  </div>

                  {/* Spesialisasi Kompartemen Box */}
                  <div className="mitra-category-box">
                    <div className="mitra-category-heading">
                      <span className="mitra-category-title">Spesialisasi Kompartemen</span>
                      <span className="mitra-category-count">{vendorBadges.length} Kompartemen</span>
                    </div>
                    <div
                      className="mitra-badges-wrap"
                      aria-label={`Kategori spesialisasi: ${vendorBadges.join(', ')}`}
                    >
                      {vendorBadges.map((badgeText, idx) => (
                        <span key={idx} className="mitra-badge">
                          {badgeText}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Balanced Key-Value Rows: Label di Kiri, Nilai di Kanan */}
                  <div className="mitra-info-list">
                    <div className="mitra-info-item">
                      <div className="mitra-info-label">
                        <User size={15} className="mitra-info-icon" aria-hidden="true" />
                        <span>PIC Penanggung Jawab</span>
                      </div>
                      <strong className="mitra-info-value">{vendor.pic}</strong>
                    </div>

                    <div className="mitra-info-item">
                      <div className="mitra-info-label">
                        <Phone size={15} className="mitra-info-icon" aria-hidden="true" />
                        <span>Nomor WhatsApp</span>
                      </div>
                      <span className="mitra-info-value">{vendor.phone}</span>
                    </div>

                    <div className="mitra-info-item">
                      <div className="mitra-info-label">
                        <Mail size={15} className="mitra-info-icon" aria-hidden="true" />
                        <span>Email Resmi</span>
                      </div>
                      <span className="mitra-info-value">{vendor.email}</span>
                    </div>
                  </div>
                </div>

                {/* Dynamic WhatsApp Link Button */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp rounded-xl"
                  aria-label={`Hubungi WhatsApp ${vendor.pic} dari ${vendor.name} (Buka di tab baru)`}
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  <span>Hubungi WhatsApp</span>
                  <ExternalLink size={14} aria-hidden="true" style={{ opacity: 0.8 }} />
                </a>
              </article>
            )
          })
        )}
      </section>

      {/* Modal Dialog Tambah Mitra dengan Animasi & Validasi Interaktif */}
      {isModalOpen && (
        <div
          className="modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal()
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className={`modal-card rounded-xl ${isShaking ? 'shake' : ''}`}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    backgroundColor: 'var(--color-surface-hover)',
                    borderRadius: '10px',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                  }}
                >
                  <Building2 size={22} aria-hidden="true" />
                </div>
                <div>
                  <h2 id="modal-title" className="modal-title font-semibold text-[22px]">
                    Tambah Mitra Daur Ulang
                  </h2>
                  <p className="modal-subtitle font-medium text-[13px]">
                    Daftarkan vendor resmi pengelolaan limbah e-waste
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="modal-close-btn"
                aria-label="Tutup dialog"
                disabled={isSubmitting}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <form onSubmit={handleAddVendor} className="modal-form" noValidate>
              {/* Nama Perusahaan */}
              <div className="modal-field">
                <label htmlFor="vendor-name" className="font-medium text-[14px]">
                  Nama Perusahaan / Vendor <span style={{ color: 'var(--color-error-text)' }}>*</span>
                </label>
                <div className="modal-input-wrap">
                  <Building2 size={16} className="modal-input-icon" aria-hidden="true" />
                  <input
                    ref={nameInputRef}
                    id="vendor-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Contoh: PT Sinar Daur Mandiri"
                    className={`rounded-xl font-normal text-[15px] ${
                      fieldErrors.name ? 'modal-input-error' : ''
                    }`}
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Multi-select Kategori Kompartemen */}
              <div className="modal-field">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label className="font-medium text-[14px]">
                    Kategori Spesialisasi Kompartemen <span style={{ color: 'var(--color-error-text)' }}>*</span>
                  </label>
                  <span
                    style={{
                      fontSize: '12px',
                      color: formData.badges.length > 0 ? 'var(--color-primary)' : 'var(--color-text-muted)',
                      fontWeight: 600,
                    }}
                  >
                    {formData.badges.length} dari {KOMPARTEMEN_CATEGORIES.length} dipilih
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '2px 0 6px',
                  }}
                >
                  <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', margin: 0 }}>
                    Pilih kategori kompartemen yang dapat ditampung oleh mitra:
                  </p>
                  <div className="category-quick-actions">
                    <button
                      type="button"
                      onClick={selectAllCategories}
                      className="btn-quick-tag"
                      title="Pilih semua kategori kompartemen"
                    >
                      Pilih Semua
                    </button>
                    <button
                      type="button"
                      onClick={clearAllCategories}
                      className="btn-quick-tag"
                      title="Bersihkan pilihan kategori"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                <div
                  className={`category-selection-list ${fieldErrors.badges ? 'category-has-error' : ''}`}
                  role="group"
                  aria-label="Pilih Kategori Kompartemen"
                >
                  {KOMPARTEMEN_CATEGORIES.map((komp) => {
                    const isSelected = formData.badges.includes(komp.name)
                    return (
                      <button
                        key={komp.id}
                        type="button"
                        onClick={() => toggleCategory(komp.name)}
                        className={`category-option-btn ${isSelected ? 'selected' : ''}`}
                        role="checkbox"
                        aria-checked={isSelected}
                      >
                        <div className="category-option-left">
                          <div className="category-option-checkbox">
                            {isSelected && <Check size={13} strokeWidth={3} aria-hidden="true" />}
                          </div>
                          <span className="category-option-label">{komp.name}</span>
                        </div>
                        <span className="category-option-badge">{komp.code}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* PIC */}
              <div className="modal-field">
                <label htmlFor="vendor-pic" className="font-medium text-[14px]">
                  Nama PIC (Penanggung Jawab) <span style={{ color: 'var(--color-error-text)' }}>*</span>
                </label>
                <div className="modal-input-wrap">
                  <User size={16} className="modal-input-icon" aria-hidden="true" />
                  <input
                    id="vendor-pic"
                    name="pic"
                    type="text"
                    required
                    placeholder="Contoh: Dian Prasetyo"
                    className={`rounded-xl font-normal text-[15px] ${
                      fieldErrors.pic ? 'modal-input-error' : ''
                    }`}
                    value={formData.pic}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <div className="modal-field">
                <label htmlFor="vendor-phone" className="font-medium text-[14px]">
                  Nomor WhatsApp PIC <span style={{ color: 'var(--color-error-text)' }}>*</span>
                </label>
                <div className="modal-input-wrap">
                  <Phone size={16} className="modal-input-icon" aria-hidden="true" />
                  <input
                    id="vendor-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Contoh: 081234567890 atau +62 812-3456-7890"
                    className={`rounded-xl font-normal text-[15px] ${
                      fieldErrors.phone ? 'modal-input-error' : ''
                    }`}
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="modal-field">
                <label htmlFor="vendor-email" className="font-medium text-[14px]">
                  Email Perusahaan <span style={{ color: 'var(--color-error-text)' }}>*</span>
                </label>
                <div className="modal-input-wrap">
                  <Mail size={16} className="modal-input-icon" aria-hidden="true" />
                  <input
                    id="vendor-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Contoh: kontak@sinardaur.co.id"
                    className={`rounded-xl font-normal text-[15px] ${
                      fieldErrors.email ? 'modal-input-error' : ''
                    }`}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Error Alert Box with Animation */}
              {errorMsg && (
                <div
                  className="error-feedback"
                  role="alert"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    marginTop: '2px',
                  }}
                >
                  <AlertCircle size={16} style={{ flexShrink: 0 }} aria-hidden="true" />
                  <span style={{ fontSize: '13px' }}>{errorMsg}</span>
                </div>
              )}

              {/* Modal Action Footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  disabled={isSubmitting}
                  className="btn-action btn-action-outline font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-action btn-action-primary font-semibold"
                  style={{ minWidth: '140px' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      <span>Menyimpan...</span>
                    </>
                  ) : (
                    <>
                      <Check size={16} aria-hidden="true" />
                      <span>Simpan Mitra</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

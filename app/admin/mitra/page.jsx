'use client'

import { useState, useEffect } from 'react'
import { User, Phone, Mail, MessageCircle, ExternalLink, Plus, X, Check } from 'lucide-react'

export const KOMPARTEMEN_CATEGORIES = [
  { id: 'komp-1', name: 'Kompartemen 1 — Baterai + Power Bank', code: 'Komp 1' },
  { id: 'komp-2', name: 'Kompartemen 2 — Keyboard + Mouse', code: 'Komp 2' },
  { id: 'komp-3', name: 'Kompartemen 3 — Kabel', code: 'Komp 3' },
  { id: 'komp-4', name: 'Kompartemen 4 — Charger', code: 'Komp 4' },
  { id: 'komp-5', name: 'Kompartemen 5 — PCB', code: 'Komp 5' },
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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    badges: ['Kompartemen 1 — Baterai + Power Bank'],
    pic: '',
    phone: '',
    email: '',
  })
  const [errorMsg, setErrorMsg] = useState('')

  // Load custom vendors from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('toxiccycle-custom-mitra')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setVendors([...initialVendors, ...parsed])
        }
      }
    } catch {
      // Ignore fallback
    }
  }, [])

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
        setErrorMsg('')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  const generateWhatsAppLink = (vendor) => {
    const badges = getVendorBadges(vendor)
    const badgesText = badges.map((b) => `- ${b}`).join('\n')

    const message = `Halo ${vendor.pic}, saya Admin ToxicCycle.

Berikut pembaruan status kapasitas IoT Smart Drop-Box saat ini:
- Kompartemen 1 (Baterai + Power Bank): 68% (156,8 kg)
- Kompartemen 2 (Keyboard + Mouse): 45% (62,4 kg)
- Kompartemen 3 (Kabel): 54% (85,3 kg)
- Kompartemen 4 (Charger): 38% (44,2 kg)
- Kompartemen 5 (PCB): 82% (142,5 kg)
Total Akumulasi: 491,2 kg.

Kategori Spesialisasi Penjemputan (${vendor.name}):
${badgesText}

Mohon konfirmasi jadwal penjemputan daur ulang dari pihak ${vendor.name}. Terima kasih.`

    return `https://wa.me/${vendor.phoneClean}?text=${encodeURIComponent(message)}`
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
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
  }

  const handleAddVendor = (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.pic.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Mohon lengkapi seluruh formulir mitra sebelum menyimpan.')
      return
    }

    if (!formData.badges || formData.badges.length === 0) {
      setErrorMsg('Pilih minimal satu kategori spesialisasi kompartemen untuk mitra ini.')
      return
    }

    // Clean phone number for wa.me
    let cleanDigits = formData.phone.replace(/\D/g, '')
    if (cleanDigits.startsWith('0')) {
      cleanDigits = '62' + cleanDigits.slice(1)
    } else if (cleanDigits.startsWith('8')) {
      cleanDigits = '62' + cleanDigits
    }

    const newVendor = {
      id: Date.now(),
      name: formData.name.trim(),
      badges: formData.badges,
      badge: formData.badges.join(', '),
      pic: formData.pic.trim(),
      phone: formData.phone.trim(),
      phoneClean: cleanDigits,
      email: formData.email.trim(),
    }

    const updatedList = [...vendors, newVendor]
    setVendors(updatedList)

    // Save custom vendors to localStorage
    try {
      const customOnly = updatedList.filter((v) => v.id > 10)
      localStorage.setItem('toxiccycle-custom-mitra', JSON.stringify(customOnly))
    } catch {
      // Ignored
    }

    // Reset & close
    setFormData({
      name: '',
      badges: ['Kompartemen 1 — Baterai + Power Bank'],
      pic: '',
      phone: '',
      email: '',
    })
    setErrorMsg('')
    setIsModalOpen(false)
  }

  return (
    <div className="mitra-page-container">
      {/* Header with Tambah Mitra Action Button */}
      <header className="mitra-topbar-wrapper">
        <div className="mitra-header">
          <h1 className="font-bold text-[32px]">Mitra Daur Ulang</h1>
          <p className="font-normal text-[16px]">Direktori vendor berlisensi penanganan limbah elektronik aktif</p>
        </div>

        <button
          type="button"
          onClick={() => {
            setErrorMsg('')
            setIsModalOpen(true)
          }}
          className="btn-action btn-action-primary font-semibold text-[16px] rounded-xl"
          aria-label="Tambah mitra daur ulang baru"
        >
          <Plus size={16} aria-hidden="true" />
          <span>Tambah Mitra</span>
        </button>
      </header>

      {/* Elastic OpenDesign Grid */}
      <section className="mitra-grid gap-6" aria-label="Daftar Vendor Mitra">
        {vendors.map((vendor) => {
          const waLink = generateWhatsAppLink(vendor)
          const vendorBadges = getVendorBadges(vendor)

          return (
            <article key={vendor.id} className="mitra-card rounded-xl">
              <div className="mitra-top">
                <div className="mitra-title-row">
                  <h2 className="mitra-name font-semibold text-[18px]">{vendor.name}</h2>
                  <div className="mitra-badges-wrap" aria-label={`Kategori spesialisasi: ${vendorBadges.join(', ')}`}>
                    {vendorBadges.map((badgeText, idx) => (
                      <span key={idx} className="mitra-badge font-medium text-[12px] rounded-xl">
                        {badgeText}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mitra-info-list">
                  <div className="mitra-info-item font-normal text-[14px]">
                    <User size={16} className="mitra-info-icon" aria-hidden="true" />
                    <span>PIC:</span>
                    <strong className="mitra-info-value">{vendor.pic}</strong>
                  </div>

                  <div className="mitra-info-item font-normal text-[14px]">
                    <Phone size={16} className="mitra-info-icon" aria-hidden="true" />
                    <span>Kontak:</span>
                    <span className="mitra-info-value">{vendor.phone}</span>
                  </div>

                  <div className="mitra-info-item font-normal text-[14px]">
                    <Mail size={16} className="mitra-info-icon" aria-hidden="true" />
                    <span>Email:</span>
                    <span className="mitra-info-value">{vendor.email}</span>
                  </div>
                </div>
              </div>

              {/* Dynamic WhatsApp Link Button */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp font-semibold text-[16px] rounded-xl"
                aria-label={`Hubungi WhatsApp ${vendor.pic} dari ${vendor.name} (Buka di tab baru)`}
              >
                <MessageCircle size={17} aria-hidden="true" />
                <span>Hubungi WhatsApp</span>
                <ExternalLink size={14} aria-hidden="true" style={{ opacity: 0.8 }} />
              </a>
            </article>
          )
        })}
      </section>

      {/* Modal Dialog Tambah Mitra */}
      {isModalOpen && (
        <div
          className="modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false)
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-card rounded-xl">
            <div className="modal-header">
              <div>
                <h2 id="modal-title" className="modal-title font-semibold text-[24px]">
                  Tambah Mitra Daur Ulang
                </h2>
                <p className="modal-subtitle font-medium text-[13px]">
                  Daftarkan vendor resmi pengelolaan limbah e-waste
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="modal-close-btn"
                aria-label="Tutup dialog"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <form onSubmit={handleAddVendor} className="modal-form" noValidate>
              <div className="modal-field">
                <label htmlFor="vendor-name" className="font-medium text-[14px]">Nama Perusahaan / Vendor</label>
                <input
                  id="vendor-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Contoh: PT Sinar Daur Mandiri"
                  className="rounded-xl font-normal text-[16px]"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              {/* Multi-select Kategori Kompartemen 1 sampai 5 */}
              <div className="modal-field">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label className="font-medium text-[14px]">Kategori Spesialisasi Kompartemen</label>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                    {formData.badges.length} dipilih
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', margin: '2px 0 6px' }}>
                  Pilih satu atau lebih kategori kompartemen yang dapat ditampung oleh mitra:
                </p>

                <div className="category-selection-list" role="group" aria-label="Pilih Kategori Kompartemen">
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

              <div className="modal-field">
                <label htmlFor="vendor-pic" className="font-medium text-[14px]">Nama PIC (Penanggung Jawab)</label>
                <input
                  id="vendor-pic"
                  name="pic"
                  type="text"
                  required
                  placeholder="Contoh: Dian Prasetyo"
                  className="rounded-xl font-normal text-[16px]"
                  value={formData.pic}
                  onChange={handleInputChange}
                />
              </div>

              <div className="modal-field">
                <label htmlFor="vendor-phone">Nomor WhatsApp PIC</label>
                <input
                  id="vendor-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Contoh: +62 812-3456-7890"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="modal-field">
                <label htmlFor="vendor-email">Email Perusahaan</label>
                <input
                  id="vendor-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Contoh: kontak@sinardaur.co.id"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              {errorMsg && (
                <div className="error-feedback" role="alert" style={{ marginTop: '0.25rem' }}>
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="modal-footer">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn-action btn-action-outline"
                >
                  Batal
                </button>
                <button type="submit" className="btn-action btn-action-primary">
                  Simpan Mitra
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

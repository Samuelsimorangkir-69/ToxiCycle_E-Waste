'use client'

import { useEffect, useState } from 'react'
import { Banknote, Check, Plus, Save, Trash2 } from 'lucide-react'
import {
  E_WASTE_CATEGORIES,
  formatRupiah,
  readPriceEntries,
  writePriceEntries,
} from '../economy'

export default function ReferencePricesPage() {
  const [entries, setEntries] = useState([])
  const [newCategoryName, setNewCategoryName] = useState('')
  const [newCategoryPrice, setNewCategoryPrice] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setEntries(readPriceEntries())
    setIsReady(true)
  }, [])

  const updatePrice = (id, value) => {
    setEntries((current) => current.map((entry) => (
      entry.id === id ? { ...entry, pricePerKg: value } : entry
    )))
    setMessage('')
    setError('')
  }

  const savePrices = (event) => {
    event.preventDefault()
    setError('')
    setMessage('')

    const invalidEntry = entries.find((entry) => {
      if (entry.pricePerKg === '') return false
      const price = Number(entry.pricePerKg)
      return !Number.isFinite(price) || price <= 0
    })

    if (invalidEntry) {
      setError(`Masukkan harga lebih dari Rp 0 untuk kategori ${invalidEntry.name}.`)
      return
    }

    try {
      writePriceEntries(entries.map((entry) => ({
        ...entry,
        pricePerKg: entry.pricePerKg === '' ? '' : Number(entry.pricePerKg),
      })))
      setMessage('Harga acuan tersimpan. Dashboard akan menghitung ulang estimasi.')
    } catch {
      setError('Harga gagal disimpan di browser ini. Periksa ruang penyimpanan lalu coba lagi.')
    }
  }

  const addCategory = (event) => {
    event.preventDefault()
    setError('')
    setMessage('')
    const name = newCategoryName.trim()
    const price = Number(newCategoryPrice)

    if (!name) {
      setError('Nama kategori wajib diisi.')
      return
    }
    if (entries.some((entry) => entry.name.toLocaleLowerCase('id-ID') === name.toLocaleLowerCase('id-ID'))) {
      setError('Kategori tersebut sudah tersedia.')
      return
    }
    if (!Number.isFinite(price) || price <= 0) {
      setError('Harga acuan harus lebih dari Rp 0 per kg.')
      return
    }

    const uniqueId = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : Date.now().toString(36)
    const id = `custom-${uniqueId}`
    const nextEntries = [...entries, { id, name, pricePerKg: price }]
    try {
      writePriceEntries(nextEntries)
      setEntries(nextEntries)
      setNewCategoryName('')
      setNewCategoryPrice('')
      setMessage('Kategori dan harga acuan berhasil ditambahkan.')
    } catch {
      setError('Kategori gagal disimpan di browser ini. Coba lagi.')
    }
  }

  const removeCategory = (entry) => {
    if (E_WASTE_CATEGORIES.some((category) => category.id === entry.id)) return
    const nextEntries = entries.filter((item) => item.id !== entry.id)
    try {
      writePriceEntries(nextEntries)
      setEntries(nextEntries)
      setMessage(`Kategori ${entry.name} dihapus.`)
      setError('')
    } catch {
      setError('Kategori gagal dihapus. Coba lagi.')
    }
  }

  const configuredCount = entries.filter((entry) => entry.pricePerKg !== '').length

  return (
    <div className="reference-prices-page">
      <header className="reference-prices-heading">
        <div>
          <h1 className="font-bold text-[32px]">Harga Acuan E-Waste</h1>
          <p>Kelola nilai per kilogram untuk kategori yang masuk ke stasiun drop-box.</p>
        </div>
        <div className="reference-prices-count" aria-live="polite">
          <Banknote size={17} aria-hidden="true" />
          {configuredCount} dari {entries.length} harga diatur
        </div>
      </header>

      <div className="reference-prices-note">
        <strong>Perhitungan dashboard</strong>
        <span>Estimasi setiap kategori = berat sensor (kg) × harga acuan (Rp/kg). Perubahan harga langsung digunakan untuk perhitungan berikutnya.</span>
      </div>

      <form className="reference-prices-form" onSubmit={savePrices}>
        <div className="reference-prices-table-wrap">
          <table className="reference-prices-table">
            <thead>
              <tr>
                <th scope="col">Kategori e-waste</th>
                <th scope="col">Harga acuan per kg</th>
                <th scope="col">Nilai saat ini</th>
                <th scope="col"><span className="sr-only">Aksi</span></th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => {
                const standardCategory = E_WASTE_CATEGORIES.find((category) => category.id === entry.id)
                return (
                  <tr key={entry.id}>
                    <th scope="row">
                      <span className="price-category-name">{entry.name}</span>
                      <span className="price-category-meta">
                        {standardCategory
                        ? `Berat tercatat ${standardCategory.weightKg.toLocaleString('id-ID', { maximumFractionDigits: 1 })} kg`
                          : 'Belum terhubung ke data berat sensor'}
                      </span>
                    </th>
                    <td>
                      <label className="price-input-wrap">
                        <span className="price-input-prefix">Rp</span>
                        <input
                          type="number"
                          min="1"
                          step="1"
                          inputMode="numeric"
                          value={entry.pricePerKg}
                          onChange={(event) => updatePrice(entry.id, event.target.value)}
                          placeholder="Contoh: 15000"
                          aria-label={`Harga acuan ${entry.name} per kilogram`}
                        />
                      </label>
                    </td>
                    <td className="price-value-cell">
                      {entry.pricePerKg === '' ? 'Belum diatur' : `${formatRupiah(Number(entry.pricePerKg))} / kg`}
                    </td>
                    <td>
                      {!standardCategory && (
                        <button
                          type="button"
                          className="price-remove-button"
                          onClick={() => removeCategory(entry)}
                          aria-label={`Hapus kategori ${entry.name}`}
                        >
                          <Trash2 size={16} aria-hidden="true" />
                        </button>
                      )}
                    </td>
                  </tr>
                )
              })}
              {!isReady && (
                <tr><td colSpan="4" className="price-loading-cell">Memuat harga tersimpan…</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {(error || message) && (
          <p className={`price-form-feedback ${error ? 'is-error' : 'is-success'}`} role={error ? 'alert' : 'status'}>
            {error ? null : <Check size={16} aria-hidden="true" />}
            {error || message}
          </p>
        )}

        <div className="reference-prices-footer">
          <span>Harga tersimpan di browser ini. Sinkronisasi lintas perangkat memerlukan tabel harga bersama di Supabase.</span>
          <button type="submit" className="btn-action btn-action-primary font-semibold text-[16px] rounded-xl" disabled={!isReady}>
            <Save size={16} aria-hidden="true" />
            Simpan harga
          </button>
        </div>
      </form>

      <form className="add-price-category" onSubmit={addCategory}>
        <div className="add-price-category-copy">
          <h2 className="font-semibold text-[18px]">Tambah kategori harga</h2>
          <p>Kategori tambahan dapat dikelola di sini. Nilainya masuk ke estimasi setelah kategori memiliki data berat sensor.</p>
        </div>
        <div className="add-price-category-fields">
          <label>
            <span>Nama kategori</span>
            <input value={newCategoryName} onChange={(event) => setNewCategoryName(event.target.value)} placeholder="Contoh: Monitor" />
          </label>
          <label>
            <span>Harga per kg</span>
            <div className="price-input-wrap">
              <span className="price-input-prefix">Rp</span>
              <input type="number" min="1" step="1" inputMode="numeric" value={newCategoryPrice} onChange={(event) => setNewCategoryPrice(event.target.value)} placeholder="Contoh: 12000" />
            </div>
          </label>
          <button type="submit" className="btn-action btn-action-outline font-semibold text-[16px] rounded-xl">
            <Plus size={16} aria-hidden="true" /> Tambah
          </button>
        </div>
      </form>
    </div>
  )
}

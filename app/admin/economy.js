export const ECONOMIC_STORAGE_KEY = 'toxiccycle-category-reference-prices-v1'
export const ECONOMIC_PRICES_EVENT = 'toxiccycle:prices-updated'

// Berat ini mengikuti data sensor demo yang saat ini ditampilkan pada detail kompartemen.
export const E_WASTE_CATEGORIES = [
  { id: 'battery-powerbank', name: 'Baterai & Power Bank', weightKg: 6.8 },
  { id: 'keyboard-mouse', name: 'Keyboard & Mouse', weightKg: 4.5 },
  { id: 'cable', name: 'Kabel', weightKg: 5.4 },
  { id: 'charger-adapter', name: 'Charger & Adaptor', weightKg: 3.8 },
  { id: 'pcb', name: 'Papan Sirkuit Cetak (PCB)', weightKg: 8.2 },
]

export function getInitialPriceEntries() {
  return E_WASTE_CATEGORIES.map(({ id, name }) => ({
    id,
    name,
    pricePerKg: '',
  }))
}

export function readPriceEntries() {
  if (typeof window === 'undefined') return getInitialPriceEntries()

  try {
    const stored = window.localStorage.getItem(ECONOMIC_STORAGE_KEY)
    if (!stored) return getInitialPriceEntries()

    const parsed = JSON.parse(stored)
    if (!Array.isArray(parsed)) return getInitialPriceEntries()

    const savedById = new Map(parsed.map((entry) => [entry.id, entry]))
    const knownEntries = E_WASTE_CATEGORIES.map(({ id, name }) => {
      const saved = savedById.get(id)
      return {
        id,
        name,
        pricePerKg: saved?.pricePerKg ?? '',
      }
    })
    const customEntries = parsed.filter(
      (entry) => !E_WASTE_CATEGORIES.some((category) => category.id === entry.id)
    )

    return [...knownEntries, ...customEntries]
  } catch {
    return getInitialPriceEntries()
  }
}

export function writePriceEntries(entries) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(ECONOMIC_STORAGE_KEY, JSON.stringify(entries))
  window.dispatchEvent(new Event(ECONOMIC_PRICES_EVENT))
}

export function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
}

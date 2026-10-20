// ToxicCycle PWA Service Worker
const CACHE_NAME = 'toxiccycle-v1'
const ASSETS_TO_CACHE = [
  '/',
  '/manifest.json',
  '/icon-192.svg',
  '/icon-512.svg',
  '/icon-maskable.svg'
]

// 1. Install event: pre-cache essential PWA assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE)
    })
  )
  self.skipWaiting()
})

// 2. Activate event: purge old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    })
  )
  self.clients.claim()
})

// 3. Fetch event: Network-first for dynamic navigation, Cache-first for static icons
self.addEventListener('fetch', (event) => {
  const { request } = event

  // Ignore non-GET requests (e.g. POST for Server Actions)
  if (request.method !== 'GET') {
    return
  }

  // Network-first for page navigations (ensures live telemetry data)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match(request))
    )
    return
  }

  // Cache-first for icons and manifest
  if (
    request.url.includes('/icon-') ||
    request.url.includes('/manifest.json')
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        return (
          cached ||
          fetch(request).then((response) => {
            if (response && response.status === 200) {
              const clone = response.clone()
              caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
            }
            return response
          })
        )
      })
    )
    return
  }

  // Default network pass-through
  event.respondWith(fetch(request).catch(() => caches.match(request)))
})


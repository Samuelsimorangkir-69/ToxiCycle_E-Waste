'use client'

import { useEffect } from 'react'

export default function PwaRegister() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .catch(() => {
          // Handled gracefully in offline or restricted environments
        })
    }
  }, [])

  return null
}


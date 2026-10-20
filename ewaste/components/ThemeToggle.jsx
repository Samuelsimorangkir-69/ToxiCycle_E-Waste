'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Read active theme from DOM or localStorage on mount
    const currentTheme =
      document.documentElement.getAttribute('data-theme') ||
      localStorage.getItem('toxiccycle-theme') ||
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')

    setTheme(currentTheme)
    document.documentElement.setAttribute('data-theme', currentTheme)
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem('toxiccycle-theme', nextTheme)
  }

  // Prevent layout shift during SSR
  if (!mounted) {
    return (
      <button
        type="button"
        className={`theme-toggle-btn ${className}`}
        aria-label="Pengalih Tema"
        disabled
      >
        <Moon size={17} aria-hidden="true" />
      </button>
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle-btn ${className}`}
      aria-label={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
      title={isDark ? 'Mode Terang' : 'Mode Gelap'}
    >
      {isDark ? (
        <Sun size={17} aria-hidden="true" className="theme-icon sun-icon" />
      ) : (
        <Moon size={17} aria-hidden="true" className="theme-icon moon-icon" />
      )}
    </button>
  )
}


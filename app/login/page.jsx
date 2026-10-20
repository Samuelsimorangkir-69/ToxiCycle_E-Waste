'use client'

import { useActionState, useState } from 'react'
import { Eye, EyeOff, AlertCircle, ArrowRight } from 'lucide-react'
import { loginAdmin } from '../admin/actions'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [state, formAction, isPending] = useActionState(loginAdmin, null)

  return (
    <div className="login-canvas">
      <div className="auth-card rounded-xl">
        {/* Header: Pure Minimalist Identity */}
        <header className="auth-header">
          <div className="brand-badge rounded-xl" aria-hidden="true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
              <path d="M11 19h8.2a1.8 1.8 0 0 0 1.57-.88 1.78 1.78 0 0 0 .005-1.78L17.1 9.5" />
              <path d="M13 3.99a1.8 1.8 0 0 0-2 0l-3.9 6.7a1.8 1.8 0 0 0 0 1.8l2.5 4.3" />
              <circle cx="12" cy="12" r="2.5" />
            </svg>
          </div>
          <h1 className="auth-title font-bold text-[32px]">ToxicCycle</h1>
          <p className="auth-subtitle font-normal text-[16px]">Konsol Masuk Admin</p>
        </header>

        {/* Minimalist Form */}
        <form action={formAction} className="auth-form" noValidate>
          <div className="form-group">
            <label htmlFor="email" className="form-label font-medium text-[14px]">
              Email Admin
            </label>
            <div className="input-container">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                disabled={isPending}
                placeholder="admin@toxiccycle.id"
                className="form-input font-normal text-[16px] rounded-xl"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label font-medium text-[14px]">
              Kata Sandi
            </label>
            <div className="input-container">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                disabled={isPending}
                placeholder="••••••••"
                className="form-input font-normal text-[16px] rounded-xl"
                style={{ paddingRight: '2.75rem' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="password-toggle-btn"
                aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                tabIndex={0}
              >
                {showPassword ? (
                  <EyeOff size={18} aria-hidden="true" />
                ) : (
                  <Eye size={18} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          <button type="submit" disabled={isPending} className="btn-submit font-semibold text-[16px] rounded-xl">
            <span>{isPending ? 'Memverifikasi...' : 'Masuk'}</span>
            {!isPending && <ArrowRight size={16} aria-hidden="true" />}
          </button>
        </form>

        {/* Professional Error Message */}
        {state?.error && (
          <div className="error-feedback font-medium text-[14px] rounded-xl" role="alert" aria-live="polite">
            <AlertCircle size={18} className="error-icon" aria-hidden="true" />
            <span>{state.error}</span>
          </div>
        )}
      </div>
    </div>
  )
}


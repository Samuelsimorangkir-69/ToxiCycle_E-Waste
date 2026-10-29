'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useFormStatus } from 'react-dom'
import { LayoutDashboard, Boxes, Users, Cpu, LogOut } from 'lucide-react'
import { logoutAdmin } from '../app/admin/actions'
import ThemeToggle from './ThemeToggle'

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    name: 'Detail Kompartemen',
    href: '/admin/kompartemen',
    icon: Boxes,
  },
  {
    name: 'Mitra Daur Ulang',
    href: '/admin/mitra',
    icon: Users,
  },
  {
    name: 'Perangkat Keras',
    href: '/admin/hardware',
    icon: Cpu,
  },
]

function LogoutButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-logout font-semibold text-[16px] rounded-xl"
      aria-label="Keluar dari sesi admin"
    >
      <LogOut size={17} aria-hidden="true" />
      <span>{pending ? 'Keluar...' : 'Keluar'}</span>
    </button>
  )
}

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="admin-sidebar" aria-label="Navigasi Utama">
      <div>
        {/* Brand Emblem & Theme Switcher */}
        <div className="sidebar-brand-row">
          <Link href="/admin" className="sidebar-brand">
            <div className="brand-icon-wrapper rounded-xl" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
                <path d="M11 19h8.2a1.8 1.8 0 0 0 1.57-.88 1.78 1.78 0 0 0 .005-1.78L17.1 9.5" />
                <path d="M13 3.99a1.8 1.8 0 0 0-2 0l-3.9 6.7a1.8 1.8 0 0 0 0 1.8l2.5 4.3" />
                <circle cx="12" cy="12" r="2.5" />
              </svg>
            </div>
            <span className="brand-title font-bold">ToxicCycle</span>
          </Link>
          <ThemeToggle />
        </div>

        {/* Navigation List */}
        <nav className="sidebar-nav">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive =
              item.href === '/admin'
                ? pathname === '/admin'
                : pathname?.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link font-medium text-[16px] rounded-xl ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={18} aria-hidden="true" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Footer / Logout */}
      <div className="sidebar-footer">
        <form action={logoutAdmin}>
          <LogoutButton />
        </form>
      </div>
    </aside>
  )
}

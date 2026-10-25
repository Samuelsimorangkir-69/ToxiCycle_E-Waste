import Sidebar from '../../components/Sidebar'

export const metadata = {
  title: 'ToxicCycle — Dasbor Admin',
  description: 'Panel Pengelolaan IoT Smart Drop-Box E-Waste',
}

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="admin-main">
        {children}
      </main>
    </div>
  )
}


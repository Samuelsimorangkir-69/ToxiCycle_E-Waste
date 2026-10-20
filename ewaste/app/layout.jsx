import './globals.css'
import PwaRegister from '../components/PwaRegister'

export const viewport = {
  themeColor: '#10B981',
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: 'ToxicCycle — Konsol Masuk Admin',
  description: 'Sistem Telemetri IoT Smart Drop-Box E-Waste',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'ToxicCycle',
  },
  icons: {
    icon: '/icon-192.svg',
    apple: '/icon-192.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('toxiccycle-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <PwaRegister />
        <main>{children}</main>
      </body>
    </html>
  )
}

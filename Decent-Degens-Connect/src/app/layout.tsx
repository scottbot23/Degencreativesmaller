import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Degen Creative',
  description: 'IOS/Android app created by community member @BlakeG',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#fafafa] text-[#1d1d1f] min-h-screen font-sans">
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50">
          <div className="relative max-w-[1200px] mx-auto px-4 py-2">
            <div className="absolute left-4">
              <div className="text-sm text-gray-600">
                CA: HUD773DHDY74483HDK8833J
              </div>
            </div>
            <div className="absolute right-4">
              <div className="flex gap-6 text-sm font-medium items-center">
                <a href="https://t.me/degencreative" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.6 8.2L16.2 18c-.2.8-1.5.9-1.9.2-.6-.8-1.7-2-2.9-3-.9.8-1.7 1.7-2.3 2.4-.3.4-.9.3-1.1-.1L7 15.2c-.2-.3 0-.8.3-1 1.5-1 3.3-2.3 4.4-3-.8-.8-2.3-2.1-2.8-2.5-.6-.4-.1-1.3.5-1.2 1.2.2 7.5 2.9 8.2 3.2.2.1.3.3.3.5 0 .1 0 .2-.1.3z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/degencreative" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2 0 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3 0-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2 0-1.3-.1-1.6-.1-4.8s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.6-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7.1.1 5.8.1 5 .3 4.2.6c-.8.3-1.5.7-2.1 1.4C1.4 2.7 1 3.4.7 4.2c-.3.8-.5 1.6-.5 3C0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.3 2.1.6 2.9.3.8.7 1.5 1.4 2.1.7.7 1.4 1.1 2.1 1.4.8.3 1.6.5 2.9.6 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.1-.3 2.9-.6.8-.3 1.5-.7 2.1-1.4.7-.7 1.1-1.4 1.4-2.1.3-.8.5-1.6.6-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.1-.6-2.9-.3-.8-.7-1.5-1.4-2.1-.7-.7-1.4-1.1-2.1-1.4-.8-.3-1.6-.5-2.9-.6C15.3 0 14.9 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.8c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z"/>
                  </svg>
                </a>
                <a href="mailto:contact@degencreative.com" className="text-gray-600 hover:text-black transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3v18h24V3H0zm2 2h20l-10 8L2 5zm0 14V7l10 8 10-8v12H2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-[32px]">
          {children}
        </main>
      </body>
    </html>
  )
} 
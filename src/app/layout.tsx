import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CloneGPT',
  description: 'An unofficial remake of ChatGPT.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div>
          {/* Sidebar */}
          {/* ClientProvider - Notification */}
          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}

import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - OEM Radio Repair',
    default: 'OEM Radio Repair',
  },
  description:
    'We make repairing your factory radio fast and easy using quality parts from trusted companies.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}

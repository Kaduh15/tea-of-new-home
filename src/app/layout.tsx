import type { Metadata } from 'next'
import { Arapey, Gwendolyn } from 'next/font/google'
import './globals.css'

const GwendolynSans = Gwendolyn({
  variable: '--font-Gwendolyn-sans',
  subsets: ['latin'],
  weight: '400',
})

const ArapeySans = Arapey({
  variable: '--font-Arapey-sans',
  subsets: ['latin'],
  weight: ['400']
})

export const metadata: Metadata = {
  title: 'Chá de casa nova',
  description: 'Lista de Presentes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${GwendolynSans.variable} ${ArapeySans.variable} min-h-screen bg-[#f0f1ed] px-4 py-10 font-arapey text-zinc-800 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

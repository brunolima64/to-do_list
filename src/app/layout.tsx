import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lista de tarefas'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-gradient-to-r from-sky-800 to-green-300 text-white">{children}</body>
    </html>
  )
}

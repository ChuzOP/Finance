import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Finance',
  description: 'Una aplicación de gestión de finanzas personales :D',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <Head>
        <title>Finance</title>
      </Head>
      <body>{children}</body>
    </html>
  )
}

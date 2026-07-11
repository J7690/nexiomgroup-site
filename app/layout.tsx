import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nexiom Group | Courtage académique, Academia & Nexiom AI Studio',
  description: 'Groupe africain de référence en courtage académique, plateformes éducatives et IA marketing. Academia concentre les offres et inscriptions, Nexiom AI Studio pilote les campagnes et réseaux sociaux.',
  keywords: ['courtage académique', 'formation Afrique', 'éducation', 'Nexiom Group', 'Academia', 'Nexiom AI Studio'],
  openGraph: {
    title: 'Nexiom Group | Courtage académique, Academia & Nexiom AI Studio',
    description: 'Groupe africain de référence en courtage académique, plateformes éducatives et IA marketing.',
    url: 'https://nexiomgroup.space',
    siteName: 'Nexiom Group',
    images: [
      {
        url: '/assets/img/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexiom Group | Courtage académique, Academia & Nexiom AI Studio',
    description: 'Groupe africain de référence en courtage académique, plateformes éducatives et IA marketing.',
    images: ['/assets/img/og-image.jpg'],
  },
  themeColor: '#1B7F5A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

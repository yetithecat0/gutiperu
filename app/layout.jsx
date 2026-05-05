import { Instrument_Serif, Syne, Space_Mono } from 'next/font/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Guti Perú | Emprendedor & Consultor IA | Arturo Caccha',
  description:
    'Marca personal de Luis Arturo Caccha Gutiérrez — emprendedor, docente, consultor IA, Vibe coding, productor audiovisual y activista de sostenibilidad en Lima, Perú. Fundador de DW Automatizaciones, Ikreo Perú, Guti Perú Studio.',
  keywords: [
    'Luis Arturo Caccha Gutiérrez',
    'gutiperu',
    'emprendedor Lima',
    'consultor IA Perú',
    'fotografía profesional',
    'docente',
    'DW Automatizaciones',
  ],
  authors: [{ name: 'Luis Arturo Caccha Gutiérrez', url: 'https://gutiperu.com' }],
  creator: 'Luis Arturo Caccha Gutiérrez',
  metadataBase: new URL('https://gutiperu.com'),
  openGraph: {
    title: 'Guti Perú | Emprendedor, Docente & Consultor IA | Luis Arturo Caccha Gutiérrez',
    description:
      'Construyo tecnología, negocios e imágenes — siempre desde la convicción de que el progreso debe ser humano y sostenible.',
    url: 'https://gutiperu.com',
    siteName: 'gutiperu.com',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Guti Perú | Arturo Caccha',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luis Arturo Caccha Gutiérrez — gutiperu.com',
    description: 'Emprendedor · Docente · Consultor IA · Fotógrafo · Lima, Perú',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://gutiperu.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${instrumentSerif.variable} ${syne.variable} ${spaceMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}

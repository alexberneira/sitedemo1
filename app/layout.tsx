import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Dr. Lucas Almeida - Odontologia Estética | São Paulo',
  description: 'Especialista em odontologia estética com mais de 10 anos de experiência. Implantes, lentes de contato dental, clareamento e ortodontia. Agende sua consulta gratuita.',
  keywords: 'dentista, odontologia estética, implantes, lentes de contato dental, clareamento, ortodontia, São Paulo',
  openGraph: {
    title: 'Dr. Lucas Almeida - Odontologia Estética',
    description: 'Especialista em odontologia estética com mais de 10 anos de experiência.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className={`${poppins.className} font-sans`}>{children}</body>
    </html>
  )
} 
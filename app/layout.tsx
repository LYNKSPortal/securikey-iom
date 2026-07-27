import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/navigation/Header'
import { Footer } from '@/components/sections/Footer'
import { siteConfig, services, testimonials, serviceAreas, team } from '@/lib/data'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Securikey | Trusted Locksmith & Security Specialists Isle of Man',
    template: '%s | Securikey Isle of Man',
  },
  description:
    "Securikey are the Isle of Man's trusted locksmith specialists, covering Douglas, Onchan, Castletown, Peel, Ramsey and Port Erin. Automotive key programming, emergency callouts, key cutting, safes, engraving and security solutions. 24 hour service, island-wide coverage.",
  keywords: [
    'locksmith Isle of Man',
    'auto locksmith Isle of Man',
    'car key replacement Isle of Man',
    'key cutting Douglas',
    'locksmith Douglas',
    'locksmith Onchan',
    'locksmith Castletown',
    'locksmith Peel',
    'locksmith Ramsey',
    'locksmith Port Erin',
    'emergency locksmith Isle of Man',
    'commercial locksmith Isle of Man',
    'domestic locksmith Isle of Man',
    'automotive locksmith Isle of Man',
    'key programming Isle of Man',
    'safe engineer Isle of Man',
    '24 hour locksmith Isle of Man',
  ],
  authors: [{ name: 'Securikey' }],
  creator: 'Securikey',
  publisher: 'Securikey',
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.siteUrl,
    siteName: 'Securikey Isle of Man',
    title: 'Securikey | Trusted Locksmith & Security Specialists Isle of Man',
    description:
      'Professional locksmith, automotive key programming, emergency callouts, key cutting, engraving, safes and security solutions.',
    images: [
      {
        url: '/meta-twitter.jpg',
        width: 1000,
        height: 1000,
        alt: 'Securikey Isle of Man',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Securikey | Trusted Locksmith & Security Specialists Isle of Man',
    description:
      'Professional locksmith, automotive key programming, emergency callouts, key cutting, engraving, safes and security solutions.',
    images: ['/meta-twitter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'GOOGLE_VERIFICATION_CODE',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/favicon/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: 'Securikey',
    description:
      "The Isle of Man's trusted locksmith specialists. Automotive, domestic and commercial locksmith services.",
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postcode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.address.latitude,
      longitude: siteConfig.address.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '13:00',
      },
    ],
    image: [`${siteConfig.siteUrl}/meta-twitter.jpg`],
    logo: `${siteConfig.siteUrl}/dark-logo-updated.png`,
    areaServed: [
      { '@type': 'Place', name: 'Isle of Man' },
      ...serviceAreas.map((town) => ({ '@type': 'Place', name: town })),
    ],
    priceRange: '££',
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      // siteConfig.social.linkedin,
    ],
    founder: team.map((member) => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'IM',
      availableLanguage: 'English',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Locksmith Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          areaServed: 'Isle of Man',
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (
        testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
      ).toFixed(1),
      reviewCount: testimonials.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating,
        bestRating: 5,
      },
      reviewBody: t.quote,
    })),
  }

  return (
    <html lang="en-GB" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

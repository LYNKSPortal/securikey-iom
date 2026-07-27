import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { QuoteForm } from '@/components/quote/QuoteForm'
import { siteConfig } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Get a Quote | Securikey Isle of Man',
  description:
    'Request a free, no-obligation quote for locksmith, key cutting, automotive key programming, safes, engraving or security services on the Isle of Man.',
  alternates: {
    canonical: '/quote/',
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/quote/`,
    title: 'Get a Quote | Securikey Isle of Man',
    description:
      'Request a free, no-obligation quote for locksmith, key cutting, automotive key programming, safes, engraving or security services on the Isle of Man.',
  },
  twitter: {
    title: 'Get a Quote | Securikey Isle of Man',
    description:
      'Request a free, no-obligation quote for locksmith, key cutting, automotive key programming, safes, engraving or security services on the Isle of Man.',
  },
}

export default function QuotePage() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-24" aria-label="Get a quote">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/SecuriKey_19-scaled.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>
      <Container className="relative max-w-5xl">
        <QuoteForm />
      </Container>
    </section>
  )
}

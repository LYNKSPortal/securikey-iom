'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, ArrowRight, Shield, Clock, MapPin, KeyRound } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/lib/data'

const heroStats = [
  { icon: Shield, label: '30+ Years Experience' },
  { icon: Clock, label: '24 Hour Callout' },
  { icon: MapPin, label: 'Entire Island Covered' },
  { icon: KeyRound, label: 'Thousands of Keys Cut' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-charcoal"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <Image
          src="/SecuriKey_35-scaled.jpg"
          alt="Securikey mobile locksmith van and team on the Isle of Man"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(177,18,38,0.25),_transparent_50%)]" />
      </div>

      <Container className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
            </span>
            <span className="text-sm font-medium text-white/90">24 Hour Emergency Service Available</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-display-xl font-bold text-white text-balance"
          >
            The Isle of Man&apos;s Trusted Locksmith Specialists
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
          >
            Professional locksmith, automotive key programming, emergency callouts, key
            cutting, engraving, safes and security solutions — all from a local team you can
            trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <Button href="/quote/" size="lg" variant="primary">
              Get a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex h-14 items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 text-base font-heading font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            >
              <Phone className="h-5 w-5 text-red" aria-hidden="true" />
              Call 24 Hours
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 lg:max-w-4xl"
        >
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20"
            >
              <stat.icon
                className="h-6 w-6 text-red transition-transform duration-300 group-hover:-translate-y-1"
                aria-hidden="true"
              />
              <p className="mt-3 text-sm font-semibold text-white">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

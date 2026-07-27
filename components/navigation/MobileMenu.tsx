'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { X, Phone, MapPin, Clock } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/data'
import { Button } from '@/components/ui/Button'

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <motion.div
      id="mobile-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-charcoal"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="flex h-full flex-col px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={onClose} className="relative flex items-center" aria-label="Securikey home">
            <div className="relative h-[52px] w-[156px]">
              <Image
                src="/light-logo-updated.png"
                alt="Securikey"
                fill
                className="object-contain"
                sizes="156px"
              />
            </div>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -mr-2 rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="mt-16 flex-1" aria-label="Mobile navigation">
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block py-4 text-3xl font-heading font-medium text-white border-b border-white/10 hover:text-red transition-colors"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6 pb-6"
        >
          <Button href="/quote/" size="lg" className="w-full" onClick={onClose}>
            Get a Quote
          </Button>
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center justify-center gap-2 text-white font-semibold"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
          <div className="flex flex-col gap-2 text-sm text-grey-400">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {siteConfig.openingHours.weekday}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {siteConfig.address.city}, Isle of Man
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

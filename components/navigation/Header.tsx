'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { MobileMenu } from './MobileMenu'
import { navLinks, siteConfig } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo',
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-grey-200/60 shadow-soft py-3'
            : 'bg-transparent py-5'
        )}
      >
        <Container className="flex items-center justify-between">
          <Link
            href="/"
            className="relative z-10 flex items-center transition-colors duration-300"
            aria-label="Securikey home"
          >
            <div className="relative h-[67px] w-[200px]">
              <Image
                src="/light-logo-updated.png"
                alt="Securikey"
                fill
                className={cn(
                  'object-contain transition-opacity duration-300',
                  scrolled ? 'opacity-0' : 'opacity-100'
                )}
                sizes="200px"
                priority
              />
              <Image
                src="/dark-logo-updated.png"
                alt="Securikey"
                fill
                className={cn(
                  'object-contain transition-opacity duration-300',
                  scrolled ? 'opacity-100' : 'opacity-0'
                )}
                sizes="200px"
              />
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-full transition-all duration-300',
                  scrolled
                    ? 'text-foreground/80 hover:text-foreground hover:bg-grey-100'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className={cn(
                'flex items-center gap-2 text-sm font-semibold transition-colors duration-300',
                scrolled ? 'text-foreground' : 'text-white'
              )}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </a>
            <Button href="/quote/" size="sm">
              Get a Quote
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={cn(
              'xl:hidden relative z-10 p-2 -mr-2 rounded-full transition-colors',
              scrolled ? 'text-foreground hover:bg-grey-100' : 'text-white hover:bg-white/10'
            )}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </Container>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
      </AnimatePresence>
    </>
  )
}

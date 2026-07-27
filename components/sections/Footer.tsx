'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { siteConfig, navLinks, team } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal pt-20 lg:pt-28 pb-10" aria-label="Footer">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 pb-16 border-b border-white/10">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 font-heading font-bold text-white tracking-tight">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red text-white text-base">
                S
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-xl">SECURIKEY</span>
                <span className="text-[0.65rem] font-medium tracking-[0.18em] text-grey-400">LOCKSMITHS</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-grey-400 leading-relaxed">
              The Isle of Man&apos;s trusted locksmith specialists. Professional, reliable and
              island-wide security services since 1990.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href={siteConfig.social.facebook}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:bg-white hover:text-charcoal"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.instagram}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:bg-white hover:text-charcoal"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-heading font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-grey-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-heading font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="mt-6 space-y-4 text-grey-400">
              {team.map((member) => (
                <li key={member.name}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-grey-600">
                    {member.name}
                  </p>
                  <a
                    href={`tel:${member.phone}`}
                    className="mt-1 flex items-center gap-3 transition-colors duration-300 hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-red" aria-hidden="true" />
                    {member.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-1 flex items-center gap-3 transition-colors duration-300 hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-red" aria-hidden="true" />
                    {member.email}
                  </a>
                </li>
              ))}
              <li>
                <span className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 text-red" aria-hidden="true" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.region}
                    <br />
                    {siteConfig.address.postcode}
                  </span>
                </span>
              </li>
              <li>
                <span className="flex items-start gap-3">
                  <Clock className="h-4 w-4 mt-1 text-red" aria-hidden="true" />
                  <span>
                    {siteConfig.openingHours.weekday}
                    <br />
                    {siteConfig.openingHours.saturday}
                    <br />
                    {siteConfig.openingHours.sunday}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-grey-600">
            &copy; {currentYear} Securikey Isle of Man. All rights reserved.
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-red px-6 py-3 text-sm font-heading font-semibold text-white transition-all duration-300 hover:bg-red-dark md:w-auto"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Emergency: {siteConfig.phoneDisplay}
          </a>
        </div>
      </Container>
    </footer>
  )
}

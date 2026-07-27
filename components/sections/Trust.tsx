'use client'

import { motion } from 'framer-motion'
import { Clock, Car, Building, Wrench, Cpu, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const badges = [
  { icon: Clock, title: '24 Hour Emergency Callout' },
  { icon: Car, title: 'Automotive Specialists' },
  { icon: Building, title: 'Domestic & Commercial' },
  { icon: Wrench, title: 'Fully Equipped Mobile Workshops' },
  { icon: Cpu, title: 'Advanced Key Programming' },
  { icon: MapPin, title: 'Local Isle of Man Business' },
]

export function Trust() {
  return (
    <section className="relative -mt-16 z-20 pb-24" aria-label="Trust badges">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-grey-200 bg-white p-8 shadow-soft md:p-10"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-grey-50 text-red">
                  <badge.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{badge.title}</h3>
                  <p className="mt-1 text-sm text-grey-600">
                    Trusted expertise you can rely on, every time.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

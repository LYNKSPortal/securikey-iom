'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { inStoreServices } from '@/lib/data'

export function InStore() {
  return (
    <section
      id="in-store"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="in-store-heading"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          <div>
            <SectionHeader
              id="in-store-heading"
              eyebrow="In Store"
              title="Visit us in Douglas for expert services while you wait"
              align="left"
              description="Our shop is more than a counter. It is a place for precision key cutting, security advice, engraving, repairs and carefully chosen products."
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <a
                href="/quote/"
                className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-3.5 text-sm font-heading font-semibold text-white transition-all duration-300 hover:bg-red-dark hover:gap-3"
              >
                Book a Visit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {inStoreServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-2xl border border-grey-200 bg-grey-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red/20 hover:shadow-soft"
                >
                  <h3 className="text-lg font-heading font-bold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm text-grey-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-grey-200 shadow-soft">
            <Image
              src="/the-shop.jpg"
              alt="SecuriKey shop front in Douglas"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

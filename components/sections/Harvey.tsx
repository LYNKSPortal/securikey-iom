'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function Harvey() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="harvey-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-grey-100">
              <Image
                src="/harvey.jpg"
                alt="Harvey, Securikey's sponsored junior golfer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden w-48 rounded-3xl border border-grey-200 bg-white p-6 shadow-soft lg:block">
              <p className="text-3xl font-heading font-bold text-red">Harvey</p>
              <p className="mt-1 text-sm font-medium text-grey-600">Our sponsored Golfer</p>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <SectionHeader
              id="harvey-heading"
              eyebrow="Community"
              title="Proud sponsors of Harvey"
              align="left"
              description="Securikey believes in backing local talent. We are proud to sponsor Harvey as he competes across the island and beyond."
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 space-y-5 text-grey-600 leading-relaxed"
            >
              <p>
                Supporting Harvey is about more than putting a logo on a golf bag. It is about
                investing in the people who make the Isle of Man special and celebrating
                dedication, discipline and the pursuit of excellence.
              </p>
              <p>
                We are grateful for the community that supports us, and sponsoring Harvey is one
                small way we give something back.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="/quote/"
                className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-3.5 text-sm font-heading font-semibold text-white transition-all duration-300 hover:bg-red-dark hover:gap-3"
              >
                Support Harvey
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-heading font-semibold text-foreground transition-all duration-300 hover:bg-foreground hover:text-white"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

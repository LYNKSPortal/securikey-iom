'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { mobileWorkshops, onTheGoImages } from '@/lib/data'
import { Check } from 'lucide-react'

function WorkshopVisual({ name, image }: { name: string; image: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-charcoal">
      <Image
        src={image}
        alt={`Securikey ${name} mobile locksmith van on the Isle of Man`}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
    </div>
  )
}

export function MobileWorkshops() {
  return (
    <section
      id="mobile-workshops"
      className="py-24 lg:py-32 bg-grey-50"
      aria-labelledby="mobile-workshops-heading"
    >
      <Container>
        <SectionHeader
          id="mobile-workshops-heading"
          eyebrow="Mobile Workshops"
          title="Two fully equipped workshops, ready to come to you"
          description="Our mobile vans are more than transport — they are professional workshops on wheels, stocked and ready to solve your problem on-site."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {mobileWorkshops.map((workshop, index) => (
            <motion.div
              key={workshop.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group overflow-hidden rounded-3xl border border-grey-200 bg-white transition-all duration-500 hover:shadow-lift"
            >
              <WorkshopVisual name={workshop.name} image={workshop.image} />
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-red" />
                  <span className="text-sm font-semibold uppercase tracking-widest text-red">
                    {workshop.focus}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-heading font-bold text-foreground">
                  {workshop.name}
                </h3>
                <p className="mt-4 text-grey-600 leading-relaxed">{workshop.description}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {workshop.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red/10 text-red">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-red">On The Go</p>
          <h3 className="mt-2 text-2xl font-heading font-bold text-foreground">
            Our workshops out on the island
          </h3>
          <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3">
            {onTheGoImages.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-grey-200"
              >
                <Image
                  src={src}
                  alt="Securikey mobile locksmith workshop van on the Isle of Man"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

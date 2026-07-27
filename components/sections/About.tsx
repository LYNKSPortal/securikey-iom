'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { team } from '@/lib/data'

function Portrait({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-grey-100">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 400px"
      />
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white" aria-labelledby="about-heading">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <SectionHeader
              id="about-heading"
              eyebrow="About Us"
              title="A family-run locksmith business built on trust"
              align="left"
              description="For more than three decades, Securikey has been the name Islanders trust for honest advice, skilled workmanship and dependable service."
            />

            <AnimatedSection delay={0.2}>
              <div className="mt-10 space-y-6 text-grey-600 leading-relaxed">
                <p>
                  Founded on old-fashioned values of reliability and craftsmanship, Securikey has
                  grown alongside the Isle of Man community. Today, the business combines decades
                  of hands-on experience with the latest key programming and security technology.
                </p>
                <p>
                  Whether you are locked out at midnight, need a replacement car key, or want to
                  secure a commercial property, our team approaches every job with the same care
                  and attention to detail.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <p className="text-4xl font-heading font-bold text-red">30+</p>
                  <p className="mt-1 text-sm text-grey-600">Years serving the island</p>
                </div>
                <div>
                  <p className="text-4xl font-heading font-bold text-red">24/7</p>
                  <p className="mt-1 text-sm text-grey-600">Emergency response</p>
                </div>
                <div>
                  <p className="text-4xl font-heading font-bold text-red">100%</p>
                  <p className="mt-1 text-sm text-grey-600">Local business</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl border border-grey-200 bg-grey-50 p-3 shadow-soft transition-all duration-500 hover:shadow-lift">
                  <Portrait src={member.image} alt={`Portrait of ${member.name}`} />
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-heading font-bold text-foreground">
                        {member.name}
                      </h3>
                      <span className="rounded-full bg-red/10 px-3 py-1 text-xs font-semibold text-red">
                        {member.experience} yrs
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-grey-600">{member.role}</p>
                    <p className="mt-4 text-sm text-grey-600 leading-relaxed">
                      {member.description}
                    </p>
                    <div className="mt-4 space-y-2 border-t border-grey-200 pt-4">
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-red"
                      >
                        <Phone className="h-4 w-4 text-red" aria-hidden="true" />
                        {member.phoneDisplay}
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-red"
                      >
                        <Mail className="h-4 w-4 text-red" aria-hidden="true" />
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

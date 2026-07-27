'use client'

import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { Icon } from '@/components/ui/Icon'
import { services } from '@/lib/data'

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-grey-50" aria-labelledby="services-heading">
      <Container>
        <SectionHeader
          id="services-heading"
          eyebrow="What We Do"
          title="Comprehensive security services for every situation"
          description="From emergency lockouts to advanced automotive key programming, our skilled team delivers professional solutions across the Isle of Man."
        />

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <article className="group relative flex h-full flex-col rounded-3xl border border-grey-200 bg-white p-8 transition-all duration-500 hover:border-red/30 hover:bg-grey-50 hover:shadow-lift">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-grey-50 text-red shadow-soft transition-all duration-300 group-hover:bg-red group-hover:text-white group-hover:shadow-lift">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-heading font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-grey-600 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="/quote/"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red transition-all duration-300 group-hover:gap-3"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}

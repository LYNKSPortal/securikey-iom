'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { Icon } from '@/components/ui/Icon'
import { whyChooseUs } from '@/lib/data'

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-24 lg:py-32 bg-grey-50"
      aria-labelledby="why-choose-heading"
    >
      <Container>
        <SectionHeader
          id="why-choose-heading"
          eyebrow="Why Choose Us"
          title="The Securikey difference is in the details"
          description="We combine traditional service values with modern tools and training, giving you security solutions that are reliable, fairly priced and built to last."
        />

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
          {whyChooseUs.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group h-full rounded-3xl border border-grey-200 bg-white p-7 transition-all duration-300 hover:border-red/20 hover:bg-grey-50 hover:shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-grey-50 text-red shadow-soft transition-all duration-300 group-hover:bg-red group-hover:text-white">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-heading font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-grey-600 leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}

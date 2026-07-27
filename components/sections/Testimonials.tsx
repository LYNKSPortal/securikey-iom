'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Facebook } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { testimonials } from '@/lib/data'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-gold text-gold' : 'text-grey-200'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', skipSnaps: false }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section
      id="reviews"
      className="py-24 lg:py-32 overflow-hidden bg-charcoal"
      aria-labelledby="reviews-heading"
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeader
            id="reviews-heading"
            eyebrow="Reviews"
            title="What our customers say"
            description="Real feedback from Islanders who trust Securikey for their homes, vehicles and businesses."
            align="left"
            dark
            className="max-w-2xl"
          />
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white hover:text-charcoal disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white hover:text-charcoal disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>

      <div className="mt-16 pl-6 lg:pl-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative flex-[0_0_85%] min-w-0 sm:flex-[0_0_45%] lg:flex-[0_0_32%]"
              >
                <article className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
                  <div>
                    <div className="flex items-center justify-between">
                      <StarRating rating={testimonial.rating} />
                      <Facebook className="h-5 w-5 text-[#1877F2]" aria-hidden="true" />
                    </div>
                    <blockquote className="mt-6 text-lg font-medium leading-relaxed text-white/90">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red/20 text-red font-heading font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-white/60">{testimonial.location}</p>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

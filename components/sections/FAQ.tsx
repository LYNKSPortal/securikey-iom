'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { faqs } from '@/lib/data'

export function FAQ() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section id="faq" className="py-24 lg:py-32 bg-grey-50" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Container className="max-w-3xl">
        <SectionHeader
          id="faq-heading"
          eyebrow="FAQ"
          title="Frequently asked questions"
          align="center"
          description="Answers to common questions about our locksmith services across the Isle of Man."
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <motion.details
              key={faq.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group rounded-2xl border border-grey-200 bg-white p-6 open:shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-bold text-foreground">
                {faq.question}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-red transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-4 text-grey-600 leading-relaxed">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </Container>
    </section>
  )
}

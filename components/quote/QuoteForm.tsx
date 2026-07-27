'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { quoteSchema, type QuoteFormData } from '@/lib/schema'
import { services, siteConfig } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  })

  async function onSubmit(data: QuoteFormData) {
    setServerError(null)
    try {
      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Something went wrong. Please call us directly.')
      setSubmitted(true)
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'An unexpected error occurred')
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <a
          href={`tel:${siteConfig.phone}`}
          className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl border border-grey-200 bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-lift"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-red">
              Need immediate assistance?
            </p>
            <p className="mt-1 text-lg text-foreground">
              Our 24-hour emergency team is ready to help right now.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-red px-6 py-3 text-sm font-heading font-semibold text-white transition-all duration-300 hover:bg-red-dark">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </span>
        </a>
      </motion.div>

      <div className="mt-12 rounded-4xl border border-grey-200 bg-white p-8 shadow-soft md:p-12 lg:p-16">
        <SectionHeader
          id="quote-heading"
          eyebrow="Get a Quote"
          title="Tell us what you need"
          description="Fill in the form below and we will get back to you with a clear, no-obligation quote. For emergencies, please call directly."
        />

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="mt-12 flex flex-col items-center rounded-3xl bg-grey-50 p-10 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-heading font-bold text-foreground">
                Quote request received
              </h3>
              <p className="mt-3 max-w-md text-grey-600">
                Thank you for contacting Securikey. A member of our team will be in touch shortly.
              </p>
              <a
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-heading font-semibold text-white transition-all duration-300 hover:bg-charcoal"
              >
                Return Home
              </a>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="mt-12 grid gap-6 md:grid-cols-2"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">
                  Name <span className="text-red">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className="h-13 w-full rounded-2xl border border-grey-200 bg-grey-50 px-5 py-3.5 text-foreground outline-none transition-all duration-300 placeholder:text-grey-400 focus:border-red focus:bg-white focus:ring-2 focus:ring-red/20"
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="flex items-center gap-1.5 text-sm text-red">
                    <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                  Phone <span className="text-red">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className="h-13 w-full rounded-2xl border border-grey-200 bg-grey-50 px-5 py-3.5 text-foreground outline-none transition-all duration-300 placeholder:text-grey-400 focus:border-red focus:bg-white focus:ring-2 focus:ring-red/20"
                  placeholder="07624 123 456"
                />
                {errors.phone && (
                  <p className="flex items-center gap-1.5 text-sm text-red">
                    <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="h-13 w-full rounded-2xl border border-grey-200 bg-grey-50 px-5 py-3.5 text-foreground outline-none transition-all duration-300 placeholder:text-grey-400 focus:border-red focus:bg-white focus:ring-2 focus:ring-red/20"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="flex items-center gap-1.5 text-sm text-red">
                    <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-semibold text-foreground">
                  Address <span className="text-red">*</span>
                </label>
                <input
                  id="address"
                  type="text"
                  {...register('address')}
                  className="h-13 w-full rounded-2xl border border-grey-200 bg-grey-50 px-5 py-3.5 text-foreground outline-none transition-all duration-300 placeholder:text-grey-400 focus:border-red focus:bg-white focus:ring-2 focus:ring-red/20"
                  placeholder="123 Main Road, Douglas"
                />
                {errors.address && (
                  <p className="flex items-center gap-1.5 text-sm text-red">
                    <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="service" className="text-sm font-semibold text-foreground">
                  Service Required <span className="text-red">*</span>
                </label>
                <select
                  id="service"
                  {...register('service')}
                  className="h-13 w-full rounded-2xl border border-grey-200 bg-grey-50 px-5 py-3.5 text-foreground outline-none transition-all duration-300 focus:border-red focus:bg-white focus:ring-2 focus:ring-red/20"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
                {errors.service && (
                  <p className="flex items-center gap-1.5 text-sm text-red">
                    <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  Message <span className="text-red">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message')}
                  className="w-full rounded-2xl border border-grey-200 bg-grey-50 px-5 py-3.5 text-foreground outline-none transition-all duration-300 placeholder:text-grey-400 focus:border-red focus:bg-white focus:ring-2 focus:ring-red/20 resize-none"
                  placeholder="Tell us about your request..."
                />
                {errors.message && (
                  <p className="flex items-center gap-1.5 text-sm text-red">
                    <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {serverError && (
                <div className="md:col-span-2 rounded-2xl border border-red/20 bg-red/5 p-4 text-sm text-red">
                  {serverError}
                </div>
              )}

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-14 items-center gap-2 rounded-full bg-red px-9 text-base font-heading font-semibold text-white transition-all duration-300 hover:bg-red-dark hover:gap-3 disabled:opacity-60 disabled:hover:gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Request a Quote
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

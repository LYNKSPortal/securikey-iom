import { z } from 'zod'

export const quoteSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  address: z.string().min(5, 'Please enter your address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please tell us a little more about your request'),
})

export type QuoteFormData = z.infer<typeof quoteSchema>

import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { quoteSchema } from '@/lib/schema'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = quoteSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', issues: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const data = result.data

    if (!resend) {
      console.error('RESEND_API_KEY is not configured. Quote request was not emailed:', data)
      return NextResponse.json({ error: 'Email service is not configured' }, { status: 500 })
    }

    const fromAddress = process.env.RESEND_FROM_EMAIL || 'Securikey Quotes <onboarding@resend.dev>'
    const toAddress = process.env.RESEND_TO_EMAIL || 'info@securikey.im'

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: data.email || undefined,
      subject: `New quote request — ${data.service}`,
      text: [
        `New quote request from the Securikey website`,
        ``,
        `Name: ${data.name}`,
        `Phone: ${data.phone}`,
        `Email: ${data.email || 'Not provided'}`,
        `Address: ${data.address}`,
        `Service: ${data.service}`,
        ``,
        `Message:`,
        data.message,
      ].join('\n'),
    })

    if (error) {
      console.error('Failed to send quote request email:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

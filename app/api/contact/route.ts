import { NextResponse } from 'next/server'
import { quoteSchema } from '@/lib/schema'

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

    // In production, integrate with your email provider here (e.g. Resend, SendGrid, Nodemailer).
    // For now we return a success response so the UI can demonstrate the flow.
    console.log('Quote request received:', result.data)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

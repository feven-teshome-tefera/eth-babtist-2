import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
const contactToEmail = process.env.CONTACT_TO_EMAIL
const contactFromEmail = process.env.CONTACT_FROM_EMAIL

const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(request: Request) {
  if (!resend || !contactToEmail || !contactFromEmail) {
    return NextResponse.json({ error: 'Contact email service is not configured.' }, { status: 500 })
  }

  const body = (await request.json()) as {
    firstName?: string
    lastName?: string
    email?: string
    subject?: string
    message?: string
  }

  const firstName = body.firstName?.trim() ?? ''
  const lastName = body.lastName?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const subject = body.subject?.trim() ?? ''
  const message = body.message?.trim() ?? ''

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: email,
      subject: `[EBCE Contact] ${subject}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unable to send message.' }, { status: 500 })
  }
}

import { Resend } from 'resend'
import type { H3Event } from 'h3'

const resend = new Resend(process.env.NUXT_PRIVATE_RESEND_API_KEY)

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = (await readBody(event))
    const { email, subject, message, phone, fullname } = body
    return await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['sanzekas@gmail.com'],
      replyTo: email,
      subject: `Pesan Baru dari Portfolio: ${subject}`,
      html: `
      <h2>Ada pesan baru dari Website Portfolio Anda!</h2>
      <p>Berikut adalah detail pesannya:</p>
      <ul>
        <li><strong>Nama:</strong> ${fullname}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>No. HP:</strong> ${phone}</li>
        <li><strong>Subjek:</strong> ${subject}</li>
        <li><strong>Pesan:</strong> ${message}</li>
      </ul>
      `,
    })
  }
  catch (error) {
    return { error }
  }
})

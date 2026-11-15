// app/api/newsletter/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    // Send notification to you
    const { error } = await resend.emails.send({
      from: 'Newsletter <newsletter@drettang.com>',
      to: ['dr.ettang@gmail.com'],
      subject: 'New Newsletter Subscriber',
      html: `<p><strong>Email:</strong> ${email}</p>`,
    });

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to subscribe.' }, { status: 500 });
  }
}
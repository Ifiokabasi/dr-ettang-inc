
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Check Resend API key
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is missing');

      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    // Initialise Resend inside the request handler
    const resend = new Resend(apiKey);

    const body = await request.json();
    const email = String(body.email || '').trim();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Send newsletter notification
    const { error } = await resend.emails.send({
      from: 'Newsletter <newsletter@drettang.com>',
      to: ['dr.ettang@gmail.com'],
      subject: 'New Newsletter Subscriber',
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${email.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);

      return NextResponse.json(
        { error: 'Unable to process subscription.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Newsletter server error:', error);

    return NextResponse.json(
      { error: 'Failed to subscribe.' },
      { status: 500 }
    );
  }
}

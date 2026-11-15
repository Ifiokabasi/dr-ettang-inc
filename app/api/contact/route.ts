
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Escape user input before inserting it into HTML emails
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

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

    // Basic validation
    if (
      !body.name ||
      !body.email ||
      !body.reason ||
      !body.message
    ) {
      return NextResponse.json(
        { error: 'Name, email, reason, and message are required.' },
        { status: 400 }
      );
    }

    // Escape user-submitted content
    const name = escapeHtml(String(body.name));
    const email = escapeHtml(String(body.email));
    const reason = escapeHtml(String(body.reason));
    const message = escapeHtml(String(body.message))
      .replace(/\r\n|\r|\n/g, '<br />');

    const newsletter = body.newsletter ? 'Yes' : 'No';

    // Send contact notification
    const { data, error } = await resend.emails.send({
      from: 'Dr Ettang <hello@drettang.com>',
      to: ['dr.ettang@gmail.com'],
      subject: `New Contact Request from ${String(body.name).slice(0, 100)}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <p><strong>Newsletter Opt-in:</strong> ${newsletter}</p>
      `,
      replyTo: String(body.email),
    });

    if (error) {
      console.error('Resend error:', error);

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });

  } catch (error) {
    console.error('Contact server error:', error);

    return NextResponse.json(
      { error: 'Failed to send contact email.' },
      { status: 500 }
    );
  }
}

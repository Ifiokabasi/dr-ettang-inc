// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.reason || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, reason, and message are required.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact <onboarding@resend.dev>', // Replace with verified domain in production
      to: ['dr.ettang@gmail.com'], // 
      subject: `New Contact Request from ${body.name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Reason:</strong> ${body.reason}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br />')}</p>
        <hr />
        <p><strong>Newsletter Opt-in:</strong> ${body.newsletter ? 'Yes' : 'No'}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
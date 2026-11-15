// app/api/book/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      // For testing, use 'onboarding@resend.dev'. For production, use your verified domain.
      from: 'Booking <onboarding@resend.dev>',
      to: ['dr.ettang@gmail.com'], // ← Replace with your email
      subject: `New Booking Request from ${body.name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Location:</strong> ${body.location}</p>
        <p><strong>Preferred Date:</strong> ${body.date}</p>
        <p><strong>Preferred Time:</strong> ${body.time}</p>
        <hr />
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
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
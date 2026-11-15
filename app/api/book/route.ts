
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Check API key
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is missing');

      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    // Initialise Resend only when a booking request arrives
    const resend = new Resend(apiKey);

    const body = await request.json();

    // Basic validation
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    // Send booking notification
    const { data, error } = await resend.emails.send({
      from: 'Dr Ettang Bookings <bookings@drettang.com>',
      to: ['dr.ettang@gmail.com'],
      subject: `New Booking Request from ${body.name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Service:</strong> ${body.service || 'Not provided'}</p>
        <p><strong>Location:</strong> ${body.location || 'Not provided'}</p>
        <p><strong>Preferred Date:</strong> ${body.date || 'Not provided'}</p>
        <p><strong>Preferred Time:</strong> ${body.time || 'Not provided'}</p>
        <hr />
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
      `,
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
    console.error('Booking server error:', error);

    return NextResponse.json(
      { error: 'Failed to send booking email.' },
      { status: 500 }
    );
  }
}

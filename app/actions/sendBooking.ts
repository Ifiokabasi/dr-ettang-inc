'use server';

import { client } from '@/sanity/lib/client';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBooking(formData: FormData) {
  const bookingData = {
    service: formData.get('service'),
    location: formData.get('location'),
    date: formData.get('date'),
    time: formData.get('time'),
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    _type: 'booking',
    _createdAt: new Date().toISOString(),
  };

  try {
    // 1. Save to Sanity
    await client.create(bookingData);

    // 2. Send email notification to the owner
    await resend.emails.send({
      from: 'bookings@drettang.com',        // verified domain address
      to: 'dr.ettang@gmail.com',            // owner's inbox
      replyTo: bookingData.email as string, // so owner can reply to customer
      subject: `New Booking Request from ${bookingData.name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Service:</strong> ${bookingData.service}</p>
        <p><strong>Location:</strong> ${bookingData.location}</p>
        <p><strong>Date:</strong> ${bookingData.date} at ${bookingData.time}</p>
        <p><strong>Name:</strong> ${bookingData.name}</p>
        <p><strong>Email:</strong> ${bookingData.email}</p>
        <p><strong>Phone:</strong> ${bookingData.phone || 'Not provided'}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Booking failed:', error);
    return { success: false, error: 'Failed to send request.' };
  }
}
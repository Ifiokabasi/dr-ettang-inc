'use client';

import { WhatsAppFloating } from 'nextjs-whatsapp-cta';

export default function WhatsAppWidget() {
  return (
    <WhatsAppFloating
      phone="+27784851545" // Ebizzy's WhatsApp number
      message="Hello, I'm coming from your website."
      position="bottom-right"
    />
  );
}
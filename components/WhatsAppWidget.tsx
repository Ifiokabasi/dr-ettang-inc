'use client';

import { WhatsAppFloating } from 'nextjs-whatsapp-cta';

export default function WhatsAppWidget() {
  return (
    <WhatsAppFloating
      phone="+27645596158" // Ebizzy's WhatsApp number
      message="Hello, I'm coming from your website."
      position="bottom-right"
    />
  );
}
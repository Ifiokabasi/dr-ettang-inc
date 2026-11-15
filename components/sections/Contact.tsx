import { ContactSection, Reveal } from "@/components/Motion";
import { ContactForm } from "@/components/Forms";

export default function Contact() {
  return (
    <ContactSection image="/images/contact-image.jpg">
      <Reveal className="relative z-[2] mx-auto max-w-[1000px] px-page py-[clamp(60px,10vw,180px)]">
        <h2 className="mb-6 text-[clamp(40px,5vw,64px)] font-bold tracking-[-0.03em]">Contact Us</h2>
        <p className="mb-3">Your message has been received successfully. We appreciate you reaching out and will be in touch as soon as possible. Thank you for considering Dr. Ettang.</p>
        <ContactForm />
      </Reveal>
    </ContactSection>
  );
}

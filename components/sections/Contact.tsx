import { ContactSection, Reveal } from "@/components/Motion";
import { ContactForm } from "@/components/Forms";

export default function Contact() {
  return (
    <ContactSection image="/images/contact-image.jpg">
      <Reveal className="relative z-[2] mx-auto max-w-[1000px] px-page py-[clamp(60px,10vw,180px)]">
        <h2 className="mb-6 text-[clamp(40px,5vw,64px)] font-bold tracking-[-0.03em]">Contact Us</h2>
        <p className="mb-3">If you have questions about our practice or would like to book a consultation, please use the form below. You can also reach us by mail at: Plot 245 Liberty Boulevard, Jos, Plateau State. Nigeria</p>
        <ContactForm />
      </Reveal>
    </ContactSection>
  );
}


/* eslint-disable @next/next/no-img-element */
import { services } from "@/components/data";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { ArrowUpRight, HeartPulse, MoveUpRight } from "lucide-react";

const explore = [
  ["Home", "#home"],
  ["About Dr Ettang", "#about"],
  ["Services", "#services"],
  ["Health Journal", "#journal"],
  ["Ask Dr Ettang", "#telemedicine"],
  ["Contact", "#contact"],
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/drettang/",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/DrEttang/",
    icon: FaFacebookF,
  },
    {
      name: "LinkedIn",
      href: "https://za.linkedin.com/in/drettang",
      icon: FaLinkedinIn,
    },

    

];

const heading =
  "mb-6 text-[10px] font-bold uppercase tracking-[.2em] text-[#64849C]";

const linkStyle =
  "text-[13px] text-[#50565B] transition-colors duration-300 hover:text-[#64849C]";

export default function Footer() {
  return (
    <footer className="mx-edge mb-4 mt-16 overflow-hidden rounded-[36px] border border-[#90ADC6]/25 bg-[#FAFBFC] shadow-lift">

      {/* Brand introduction */}
      <div className="px-8 pb-14 pt-16 md:px-16 md:pb-16 md:pt-20">
        <div className="flex flex-col justify-between gap-8 border-b border-[#90ADC6]/25 pb-12 md:flex-row md:items-end">

          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[.25em] text-[#64849C]">
              DR. ETTANG INC. — PRIVATE HEALTHCARE
            </p>

            <h2 className="max-w-[620px] text-3xl font-medium leading-[1.2] tracking-[-.04em] text-[#20272D] md:text-5xl">
              Healthcare with a
              <span className="text-[#90ADC6]"> human touch.</span>
            </h2>

            <p className="mt-5 max-w-[430px] text-sm leading-7 text-[#69737A]">
              Thoughtful medical care, built around you.
              Supporting healthier lives through personalised
              healthcare and compassionate service.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-5 rounded-full bg-[#90ADC6] px-7 py-4 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#66869E]"
          >
            Get in touch
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-12 px-8 pb-16 md:grid-cols-3 md:px-16 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <img
            src="/images/Transparent_Icon Full.png"
            alt="Dr Ettang Inc"
            className="mb-7 w-[170px] object-contain"
          />

          <p className="max-w-[250px] text-[13px] leading-7 text-[#69737A]">
            Providing thoughtful medical care for individuals
            and families, with consultations available in person,
            through home visits and via telehealth.
          </p>

          <div className="mt-7 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#64849C]">
            <HeartPulse size={15} />
            Your health. Our priority.
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className={heading}>Our Services</h4>
          <ul className="space-y-4">
            {services.map((s) => (
              <li key={s.t}>
                <a href="#services" className={linkStyle}>
                  {s.t}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className={heading}>Explore</h4>
          <ul className="space-y-4">
            {explore.map(([label, href]) => (
              <li key={label}>
                <a href={href} className={linkStyle}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="col-span-2 md:col-span-1">
          <h4 className={heading}>Connect With Us</h4>

          <p className="mb-7 max-w-[230px] text-[13px] leading-7 text-[#69737A]">
            Stay informed. Discover health insights, updates
            and practical advice for healthier living.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#90ADC6]/35 text-[#64849C] transition-all duration-300 hover:border-[#90ADC6] hover:bg-[#90ADC6] hover:text-white"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact strip */}
      <div className="mx-8 mb-8 flex flex-col justify-between gap-5 rounded-[20px] bg-[#EDF3F7] px-7 py-7 md:mx-16 md:flex-row md:items-center md:px-10">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#64849C]">
            Need medical assistance?
          </p>
          <p className="text-lg font-medium tracking-tight text-[#26343E]">
            We're here to help you take care of your health.
          </p>
        </div>

        <a
          href="#telemedicine"
          className="group flex w-fit items-center gap-2 text-xs font-bold text-[#64849C] transition-colors hover:text-[#26343E]"
        >
          Book a consultation
          <MoveUpRight
            size={15}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>

      {/* Legal / copyright */}
      <div className="mx-8 border-t border-[#90ADC6]/25 py-7 md:mx-16">
        <div className="flex flex-col justify-between gap-5 text-[11px] text-[#78838A] md:flex-row md:items-center">

          <p>
            © {new Date().getFullYear()} Dr. Ettang Inc. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <a href="/terms" className="transition hover:text-[#64849C]">
              Terms & Conditions
            </a>
            <a href="/privacy" className="transition hover:text-[#64849C]">
              Privacy Policy
            </a>
          </div>

          <a
            href="#home"
            className="flex w-fit items-center gap-2 font-semibold text-[#64849C] transition hover:text-[#26343E]"
          >
            Back to top
            <MoveUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const links = [
  ["Home", "#home"],
  ["Our Services", "#services"],
  ["Telemedicine", "#telemedicine"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-5">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-[76px] items-center justify-between rounded-[22px] border border-white/10 bg-ink/80 px-5 text-white shadow-2xl shadow-black/10 backdrop-blur-2xl md:h-[82px] md:px-7">

          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <div className="flex items-center">
              <img
                src="/images/logo-white.png"
                alt="Dr. Ettang Inc."
                className="h-10 w-auto transition duration-300 group-hover:scale-[1.03] md:h-12"
              />
            </div>

            <div className="hidden border-l border-white/15 pl-3 sm:block">
              <span className="block font-display text-[15px] font-medium tracking-tight">
                Dr. Ettang Inc.
              </span>
              <span className="mt-0.5 block text-[9px] uppercase tracking-[0.2em] text-white/45">
                Medical Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1">
              {links.map(([label, href], index) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`relative block rounded-full px-5 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                      index === 0
                        ? "bg-white text-ink"
                        : "text-white/65 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+2340000000000"
              className="hidden xl:flex flex-col text-right leading-tight"
            >
              <span className="text-[9px] uppercase tracking-[0.18em] text-white/40">
                Call us
              </span>
              <span className="mt-1 text-[12px] font-medium text-white/80">
                +234 000 000 0000
              </span>
            </a>

            <Button href="#book" arrow="right">
              BOOK A CONSULTATION
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] transition hover:bg-white/10 md:h-12 md:w-12 lg:hidden"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-px w-full bg-white transition-transform duration-300 ${
                  open ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-white transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-white transition-transform duration-300 ${
                  open ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>

          {/* Mobile Menu */}
          <div
            className={`absolute left-0 right-0 top-[calc(100%+10px)] overflow-hidden rounded-[22px] border border-white/10 bg-ink/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 lg:hidden ${
              open
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }`}
          >
            <nav className="p-3">
              <ul className="space-y-1">
                {links.map(([label, href], index) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-4 text-sm font-medium transition ${
                        index === 0
                          ? "bg-white text-ink"
                          : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                      }`}
                    >
                      {label}

                      <span className="text-xs opacity-40">↗</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-2 border-t border-white/10 pt-3">
                <a
                  href="#book"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl bg-brand px-4 py-4 text-sm font-semibold text-ink"
                >
                  <span>Book a consultation</span>
                  <span>→</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
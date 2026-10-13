/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/Motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-b-[56px] bg-[#90ADC6] lg:rounded-b-[72px]">
      {/* Background atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Soft light */}
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/25 blur-3xl" />

        {/* Yellow glow */}
        <div className="absolute right-[-180px] top-[5%] h-[520px] w-[520px] rounded-full bg-[#FAD02C]/15 blur-3xl" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(0,0,0,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.7)_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      {/* Decorative rings */}
      <div
        className="pointer-events-none absolute right-[8%] top-[8%] hidden h-[460px] w-[460px] rounded-full border border-white/30 lg:block"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[13%] top-[14%] hidden h-[330px] w-[330px] rounded-full border border-white/20 lg:block"
        aria-hidden="true"
      />

      <div className="wrap relative z-10 grid min-h-[780px] items-center gap-10 py-16 lg:grid-cols-[1fr_.9fr] lg:gap-0 lg:py-0">
        {/* LEFT */}
        <div className="relative z-20 pt-8 lg:pt-20">
          {/* Eyebrow */}
          <Reveal>
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/30 backdrop-blur-md">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FAD02C] shadow-[0_0_18px_rgba(250,208,44,.8)]" />
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/60">
                Dr Ettang · Medical Practice
              </span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal>
            <h1 className="max-w-[800px] font-display text-[clamp(48px,6vw,92px)] font-semibold leading-[0.97] tracking-[-0.05em] text-black">
              Exceptional
              <br />

              <span className="text-[#E9EAEC]">
                healthcare.
              </span>{" "}
              <span className="text-black">
                Personalised
              </span>

              <br />

              <span className="font-serif font-normal italic text-black/75">
                around you.
              </span>
            </h1>
          </Reveal>

          {/* Description */}
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[570px] text-[17px] leading-8 text-black/60 lg:text-[19px]">
              Thoughtful, expert medical care designed around you — from
              consultation and diagnosis to treatment, follow-up and
              long-term wellbeing.
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              {/* Primary CTA */}
              <a
                href="#book"
                className="group inline-flex items-center gap-4 rounded-full bg-[#000000] px-7 py-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/85"
              >
                BOOK A CONSULTATION

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FAD02C] text-black transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#services"
                className="group inline-flex items-center gap-3 rounded-full border border-black/20 bg-white/20 px-6 py-4 text-sm font-semibold tracking-wide text-black backdrop-blur-md transition-all duration-300 hover:border-black/40 hover:bg-white/30"
              >
                OUR SERVICES

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </Reveal>

          {/* Trust indicators */}
          <Reveal delay={0.28}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 text-black/55">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FAD02C] text-black">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className="text-sm">
                  Experienced clinicians
                </span>
              </div>

              <div className="h-4 w-px bg-black/15" />

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FAD02C] text-black">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className="text-sm">
                  Patient-first care
                </span>
              </div>

              <div className="h-4 w-px bg-black/15" />

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FAD02C] text-black">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className="text-sm">
                  Modern healthcare
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — DOCTOR */}
        <Reveal
          x={70}
          y={0}
          delay={0.2}
          className="relative order-first flex min-h-[470px] items-end justify-center lg:order-none lg:min-h-[780px]"
        >
          {/* Image backdrop */}
          <div
            className="absolute bottom-0 right-[-10%] h-[500px] w-[500px] rounded-[48%_52%_42%_58%/55%_45%_55%_45%] bg-[#E9EAEC] lg:h-[680px] lg:w-[680px]"
            aria-hidden="true"
          />

          {/* Yellow accent circle */}
          <div
            className="absolute bottom-[12%] right-[2%] h-[180px] w-[180px] rounded-full bg-[#FAD02C] lg:h-[230px] lg:w-[230px]"
            aria-hidden="true"
          />

          {/* Inner ring */}
          <div
            className="absolute bottom-[6%] right-[7%] h-[430px] w-[430px] rounded-full border border-black/10 lg:h-[580px] lg:w-[580px]"
            aria-hidden="true"
          />

          {/* Doctor */}
          <img
            src="/images/hero-doctor.png"
            alt="Dr Ettang in a white coat"
            className="relative z-10 h-auto w-[390px] object-contain object-bottom drop-shadow-[0_35px_45px_rgba(0,0,0,.22)] sm:w-[480px] lg:w-[650px]"
          />

          {/* Availability card */}
          <div className="absolute bottom-[6%] left-0 z-20 w-[235px] rounded-[22px] border border-white/70 bg-[#E9EAEC]/95 p-5 shadow-[0_25px_70px_rgba(0,0,0,.16)] backdrop-blur-xl sm:left-[4%] lg:bottom-[12%] lg:left-[-4%]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAD02C]">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/30" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-black" />
                </span>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/45">
                  Availability
                </p>

                <p className="mt-1 text-sm font-semibold text-black">
                  Now accepting
                </p>
              </div>
            </div>

            <div className="mt-4 border-t border-black/10 pt-3 text-xs leading-5 text-black/55">
              Appointments available in-person,
              <br />
              virtually and for home visits.
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute right-0 top-[16%] z-20 hidden w-[160px] rounded-[20px] border border-white/70 bg-[#E9EAEC]/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,.12)] backdrop-blur-xl sm:block lg:right-[-2%] lg:top-[22%]">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#FAD02C] text-black">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 3v18M3 12h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="text-xs font-semibold leading-5 text-black">
              Care that puts you first.
            </p>

            <p className="mt-1 text-[10px] leading-4 text-black/45">
              Every consultation. Every patient.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Bottom information strip */}
      <div className="relative z-20 border-t border-black/10 bg-black/90">
        <div className="wrap flex min-h-[72px] flex-col justify-center gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-0">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
            Your health. Your care. Your journey.
          </p>

          <a
            href="#contact"
            className="group flex items-center gap-3 text-sm font-medium text-white/75 transition hover:text-white"
          >
            Find our clinic

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FAD02C] text-black transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
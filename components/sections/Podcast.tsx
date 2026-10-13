
/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/Motion";

const platforms = [
  { name: "YouTube", href: "#" },
  { name: "Spotify", href: "#" },
];

export default function Podcast() {
  return (
    <section
      id="podcast"
      className="mx-edge mb-10 overflow-hidden rounded-[32px] bg-[#173B57] text-white md:rounded-[40px]"
    >
      <div className="grid md:min-h-[680px] md:grid-cols-2">
        {/* LEFT: EDITORIAL CONTENT */}
        <Reveal x={-35} y={0}>
          <div className="flex h-full flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-[clamp(40px,5vw,76px)] lg:py-20">
            <div className="mb-9 flex items-center gap-3">
              <span className="h-px w-9 bg-[#FAD02C]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">
                The Ask Dr Ettang Podcast
              </span>
            </div>

            <h2 className="font-display text-[clamp(44px,5.3vw,74px)] font-medium leading-[0.98] tracking-[-0.055em]">
              Your health
              <br />
              questions.
              <br />
              <span className="text-[#FAD02C]">Clear answers.</span>
            </h2>

            <p className="mt-8 max-w-[440px] text-[15px] leading-[1.9] text-white/80 sm:text-base">
              Understanding your health shouldn't be complicated. Join
              Dr Ettang for thoughtful conversations that make medical
              knowledge clearer, more practical, and easier to apply
              to everyday life.
            </p>

            <p className="mt-4 max-w-[420px] text-sm leading-[1.9] text-white/60">
              From everyday symptoms and medication to nutrition and
              family wellbeing, discover trusted insights to help you
              make more informed decisions about your health.
            </p>

            {/* LISTENING PLATFORMS */}
            <div className="mt-10 border-t border-white/15 pt-6">
              <span className="mb-4 block text-[9px] font-semibold uppercase tracking-[0.24em] text-white/50">
                Listen. Learn. Live better.
              </span>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    className="group inline-flex items-center gap-2 text-xs font-medium text-white/80 transition-colors duration-300 hover:text-[#FAD02C]"
                  >
                    {platform.name}
                    <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT: FULL-HEIGHT PORTRAIT */}
        <Reveal x={35} y={0} delay={0.15}>
          <div className="group relative isolate h-full min-h-[480px] overflow-hidden bg-[#244D69] sm:min-h-[600px] md:min-h-[680px]">
            {/* Soft blue lighting */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(144,173,198,0.28),transparent_60%)]" />

            {/* Decorative portrait frame */}
            <div className="pointer-events-none absolute inset-x-[8%] top-[7%] z-[2] h-[78%] rounded-t-full border border-white/15" />

            {/* Portrait fills the entire container */}
            <img
              src="/images/askDr.jpg"
              alt="Dr Ettang recording the Ask Dr Ettang podcast"
              className="absolute inset-0 z-[1] h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />

            {/* Blue gradient for text contrast */}
            <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#102B40]/95 via-[#173B57]/10 to-transparent" />

            {/* CAPTION AND CTA */}
            <div className="absolute inset-x-0 bottom-0 z-[3] flex flex-col items-start gap-6 p-6 sm:p-10 lg:p-12">
              <div className="border-l-2 border-[#FAD02C] pl-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/65">
                  Health. Clarity. Confidence.
                </p>

                <p className="mt-2 font-display text-2xl tracking-tight text-white sm:text-3xl">
                  Ask Dr Ettang
                </p>
              </div>

              <a
                href="#"
                className="group/button inline-flex min-h-[52px] items-center gap-6 bg-[#FAD02C] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#173B57] transition-all duration-300 hover:bg-white"
              >
                Watch the podcast
                <span className="text-lg transition-transform duration-300 group-hover/button:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

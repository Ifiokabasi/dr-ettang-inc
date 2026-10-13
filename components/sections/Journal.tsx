
/* eslint-disable @next/next/no-img-element */
import { Item, Reveal, Stagger } from "@/components/Motion";
import { posts } from "@/components/data";
import Button from "@/components/ui/Button";

export default function Journal() {
  return (
    <section
      id="journal"
      className="mx-edge overflow-hidden rounded-[32px] bg-[#F5F5F3] py-20 text-[#171717] sm:rounded-[40px] sm:py-24 lg:py-32"
    >
      <div className="wrap">

        {/* SECTION HEADER */}
        <Reveal>
          <div className="mb-14 flex flex-col gap-8 border-b border-black/10 pb-10 md:mb-16 md:flex-row md:items-end md:justify-between">

            <div className="max-w-3xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[#90ADC6]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/50">
                  The Health Journal
                </span>
              </div>

              <h2 className="font-display text-[clamp(44px,6.5vw,88px)] font-medium leading-[0.98] tracking-[-0.055em]">
                A healthier life
                <br />
                <span className="text-[#90ADC6]">starts with knowledge.</span>
              </h2>
            </div>

            <div className="max-w-[300px] md:pb-2">
              <p className="text-[14px] leading-[1.9] text-black/55 sm:text-[15px]">
                Clear, thoughtful insights to help you make informed decisions
                about your health, wellbeing and the people you love.
              </p>
            </div>
          </div>
        </Reveal>

        {/* JOURNAL ARTICLES */}
        <Stagger className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {posts.map((p, index) => (
            <Item key={p.t} className="group flex flex-col">

              {/* IMAGE */}
              <a
                href="#"
                aria-label={`Read ${p.t}`}
                className="relative mb-6 block overflow-hidden rounded-[20px] bg-[#E9EAEC]"
              >
                <div className="aspect-[4/4.6] overflow-hidden">
                  <img
                    src={`/images/${p.img}.jpg`}
                    alt={p.t}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />
                </div>

                {/* Subtle image overlay */}
                <div className="absolute inset-0 bg-black/[0.02] transition-colors duration-500 group-hover:bg-black/[0.08]" />

                {/* Article number */}
                <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/90 text-[10px] font-medium text-black backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Hover arrow */}
                <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-[#FAD02C] text-lg text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  ↗
                </span>
              </a>

              {/* ARTICLE CONTENT */}
              <div className="flex flex-1 flex-col">

                <div className="mb-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#90ADC6]" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/45">
                    Health & Wellbeing
                  </span>
                </div>

                <h3 className="mb-4 max-w-[420px] font-display text-[clamp(25px,2.4vw,32px)] font-medium leading-[1.12] tracking-[-0.035em] text-[#171717] transition-colors duration-300 group-hover:text-[#607F98]">
                  <a href="#">{p.t}</a>
                </h3>

                <p className="mb-7 max-w-[420px] text-[14px] leading-[1.9] text-black/55">
                  Discover practical perspectives and thoughtful guidance to
                  help you better understand your health and everyday wellbeing.
                </p>

                {/* READ LINK */}
                <div className="mt-auto border-t border-black/10 pt-5">
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-black transition-colors hover:text-[#607F98]"
                  >
                    Read article
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>

        {/* BOTTOM CTA */}
        <Reveal>
          <div className="mt-16 flex flex-col gap-6 border-t border-black/10 pt-8 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="font-display text-2xl tracking-tight sm:text-3xl">
                Your wellbeing, better informed.
              </p>
              <p className="mt-2 text-sm text-black/50">
                Explore more insights from Dr. Ettang.
              </p>
            </div>

            <Button href="#" variant="dark">
              Explore the journal
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}


import { Item, Reveal, Stagger } from "@/components/Motion";
import { services, lorem } from "@/components/data";
import Eyebrow from "@/components/ui/Eyebrow";
import { Arrow, Icon } from "@/components/ui/Icons";

export default function Services() {
  return (
    <section
      id="services"
      className="mx-edge mt-10 overflow-hidden rounded-[32px] bg-[#F5F5F3] py-20 sm:rounded-[40px] sm:py-24 lg:mt-14 lg:py-32"
    >
      <div className="wrap">

        {/* HEADER */}
        <Reveal>
          <div className="mb-14 border-b border-black/10 px-6 pb-10 sm:px-10 md:mb-16 md:flex md:items-end md:justify-between md:gap-12 lg:px-0">

            <div className="max-w-3xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[#90ADC6]" />
                <Eyebrow>HOW I CAN HELP</Eyebrow>
              </div>

              <h2 className="font-display text-[clamp(42px,5.5vw,76px)] font-medium leading-[1.02] tracking-[-0.055em] text-[#171717]">
                Healthcare built
                <br />
                <span className="text-[#7898B1]">around you.</span>
              </h2>
            </div>

            <p className="mt-6 max-w-[340px] text-[14px] leading-[1.9] text-black/55 md:mt-0 md:pb-1 sm:text-[15px]">
              Thoughtful medical care, personalised to your needs. Get the
              guidance, support and clarity you need to take charge of your
              wellbeing.
            </p>
          </div>
        </Reveal>

        {/* SERVICES */}
        <Stagger className="mx-auto grid max-w-[1340px] grid-cols-1 gap-4 px-6 sm:grid-cols-2 sm:gap-5 sm:px-10 lg:grid-cols-3 lg:gap-6 lg:px-0">
          {services.map((s, index) => (
            <Item key={s.t} className="group">
              <article className="relative flex h-full min-h-[310px] flex-col overflow-hidden rounded-[24px] border border-black/[0.07] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#90ADC6]/60 hover:shadow-[0_24px_60px_-35px_rgba(30,50,65,0.25)] sm:p-8 lg:min-h-[330px]">

                {/* ICON & NUMBER */}
                <div className="mb-9 flex items-start justify-between">
                  <div className="grid size-[58px] place-items-center rounded-[18px] bg-[#EAF0F4] text-[#536F85] transition-all duration-300 group-hover:bg-[#90ADC6] group-hover:text-white">
                    <Icon d={s.d} />
                  </div>

                  <span className="pt-2 text-[10px] font-medium tracking-[0.18em] text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mb-3 font-display text-[25px] font-medium leading-[1.2] tracking-[-0.035em] text-[#171717] sm:text-[28px]">
                  {s.t}
                </h3>

                {/* DESCRIPTION */}
                <p className="mb-8 max-w-[360px] text-[14px] leading-[1.9] text-black/55">
                  {lorem}
                </p>

                {/* LINK */}
                <div className="mt-auto border-t border-black/[0.08] pt-5">
                  <a
                    href="#book"
                    className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#536F85] transition-colors duration-300 hover:text-black"
                  >
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <Arrow />
                    </span>
                  </a>
                </div>

                {/* ACCENT */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FAD02C] transition-all duration-500 group-hover:w-full" />
              </article>
            </Item>
          ))}
        </Stagger>

        {/* FOOTER */}
        <Reveal>
          <div className="mx-6 mt-12 flex flex-col gap-5 border-t border-black/10 pt-7 sm:mx-10 sm:mt-16 md:flex-row md:items-center md:justify-between lg:mx-0">
            <p className="max-w-[460px] text-[13px] leading-[1.8] text-black/50">
              Your health deserves individual attention. Let’s find the right
              care for you.
            </p>

            <a
              href="#book"
              className="group inline-flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#171717]"
            >
              Book a consultation
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Arrow />
              </span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

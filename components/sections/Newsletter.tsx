
import { Reveal } from "@/components/Motion";
import { NewsletterForm } from "@/components/Forms";

export default function Newsletter() {
  return (
    <section className="mx-edge my-20 grid items-center gap-10 overflow-hidden rounded-[32px] border border-white/10 bg-[#173B57] p-[clamp(28px,6vw,100px)] text-white shadow-lift md:rounded-[40px] lg:grid-cols-[1.2fr_.8fr]">
      <Reveal>
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-9 bg-[#FAD02C]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">
            The Newsletter
          </span>
        </div>

        <h2 className="mb-7 max-w-[700px] font-display text-[clamp(42px,5.6vw,80px)] font-medium leading-[1.02] tracking-[-0.055em] text-white">
          Good stories.
          <br />
          <span className="text-[#FAD02C]">Delivered.</span>
        </h2>

        <p className="mb-8 max-w-[600px] text-base leading-[1.9] text-white/70 sm:text-lg">
          Get thoughtful health insights, practical advice, and the latest
          updates from Dr Ettang, delivered straight to your inbox.
        </p>

        <NewsletterForm />
      </Reveal>

      {/* DECORATIVE NEWSLETTER ICON */}
      <div
        aria-hidden="true"
        className="relative mx-auto hidden aspect-square w-[min(300px,100%)] place-items-center rounded-full border border-[#90ADC6]/25 bg-[radial-gradient(circle,rgba(144,173,198,0.2),transparent_70%)] lg:grid"
      >
        <div className="absolute inset-[12%] rounded-full border border-white/[0.08]" />

        <svg
          width="129"
          height="129"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FAD02C"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </div>
    </section>
  );
}

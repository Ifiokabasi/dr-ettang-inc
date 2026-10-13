import { Reveal } from "@/components/Motion";

export default function Tagline() {
  return (
    <section className="mx-auto max-w-[1100px] px-page py-24 text-center">
      <Reveal>
        <h2 className="font-display text-[clamp(28px,3.5vw,50px)] font-medium leading-[1.35] tracking-[-0.025em]">Doctor-led care. Personal attention · Modern healthcare · Convenient access</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-4 font-display text-[clamp(20px,2.5vw,36px)] font-light text-[#777]">Healthcare that sees the person, not just the symptoms.</p>
      </Reveal>
    </section>
  );
}

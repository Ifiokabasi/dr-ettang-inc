/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/Motion";
import { BookingCard } from "@/components/Forms";

export default function Booking() {
  return (
    <section id="book" className="mx-edge mt-10 grid items-end gap-8 overflow-hidden rounded-[48px] bg-book px-[clamp(20px,6vw,155px)] pt-[120px] lg:grid-cols-[1.1fr_.9fr]">
      <Reveal x={-60} y={0}>
        <h2 className="mb-10 font-display text-[clamp(30px,3.4vw,48px)] tracking-[-0.02em] text-[#f2f2f2]">BOOK A SESSION NOW</h2>
        <BookingCard />
      </Reveal>
      <Reveal x={80} y={0} delay={0.15}>
        <img src="/images/team.png" alt="Dr Ettang smiling" className="ml-auto max-h-[780px] object-contain object-bottom" />
      </Reveal>
    </section>
  );
}

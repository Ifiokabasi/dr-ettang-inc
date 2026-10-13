/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/Motion";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";

const p = "mb-3 max-w-[620px] text-lg leading-[30px] text-mid";

export default function About() {
  return (
    <section id="about" className="relative mx-edge grid items-center gap-10 overflow-hidden rounded-[48px] bg-about px-6 pt-10 lg:grid-cols-[1fr_1.2fr] lg:px-0 lg:pt-[60px]">
      <Reveal className="self-end max-lg:order-2" x={-80} y={0}>
        <img src="/images/about.png" alt="Dr Ettang reviewing a tablet" className="max-h-[720px] w-full object-contain object-bottom" />
      </Reveal>
      <Reveal x={60} y={0} delay={0.15} className="lg:pr-12">
        <Eyebrow>TELE HEALTH - GENERAL PRACTIONER</Eyebrow>
        <h2 className="mb-10 font-display text-[clamp(40px,4.9vw,70px)] font-semibold leading-[1.05] tracking-[-0.035em] text-white">A different kind of medical practice.</h2>
        <p className={p}>Good healthcare begins with listening.</p>
        <p className={p}>At Dr Ettang Medical Practice, we combine experienced clinical care with a personal approach designed around the individual.</p>
        <p className={p}>Whether you need a routine consultation, ongoing care or medical attention from the comfort of your home, our goal is simple: to make quality healthcare more accessible, thoughtful and convenient.</p>
        <Button href="#contact" arrow="left" className="mb-[60px] mt-7">MEET DR ETTANG</Button>
      </Reveal>
    </section>
  );
}

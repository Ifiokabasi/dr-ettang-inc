"use client";
import { useRef } from "react";
import { MotionConfig, motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const view = { once: true, amount: 0.2 } as const;

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Fades and slides content in once when it scrolls into view. */
export function Reveal({ children, className, delay = 0, x = 0, y = 40 }: {
  children: React.ReactNode; className?: string; delay?: number; x?: number; y?: number;
}) {
  return (
    <motion.div className={className} initial={{ opacity: 0, x, y }} whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={view} transition={{ duration: 0.8, delay, ease }}>
      {children}
    </motion.div>
  );
}

/** Parent that staggers its <Item> children into view. */
export function Stagger({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} initial="hidden" whileInView="show" viewport={view}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}>
      {children}
    </motion.div>
  );
}

export function Item({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={{ hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}>
      {children}
    </motion.div>
  );
}

/** Contact section whose background image drifts slower than the page (parallax). */
export function ContactSection({ children, image }: { children: React.ReactNode; image: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-10%", "10%"]);
  return (
    <section ref={ref} id="contact" className="relative mx-edge overflow-hidden rounded-[48px] bg-[#2c3a33] text-[#f5f5f5]">
      <motion.div className="absolute inset-x-0 inset-y-[-15%] bg-cover bg-center will-change-transform" style={{ y, backgroundImage: `url(${image})` }} aria-hidden />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/35 to-black/70" aria-hidden />
      {children}
    </section>
  );
}

/** Thin yellow reading-progress bar pinned to the top of the page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div className="fixed inset-x-0 top-0 z-[200] h-[3px] origin-left bg-brand" style={{ scaleX }} aria-hidden />;
}

const items = ["In-person care", "Home visits", "Telehealth", "Family medicine", "Preventive healthcare", "Chronic disease management"];

export default function TrustBar() {
  return (
    <div aria-hidden className="mx-edge mb-10 overflow-hidden rounded-full bg-ink py-5 text-white/70">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="relative px-9 font-display text-xs font-medium uppercase tracking-[.22em] after:absolute after:-right-1.5 after:text-brand after:content-['✦']">{t}</span>
        ))}
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import { services } from "@/components/data";

const explore = [["Home", "#home"], ["About Dr Ettang", "#about"], ["Services", "#services"], ["Health Journal", "#journal"], ["Ask Dr Ettang", "#telemedicine"], ["Contact", "#contact"]];
const h4 = "mb-3 text-sm font-bold uppercase tracking-[.14em] text-black";

export default function Footer() {
  return (
    <footer className="mx-edge mb-4 mt-10 rounded-[48px] border border-black/[.08] bg-white px-page pb-8 pt-20 text-sm shadow-lift">
      <div className="grid grid-cols-2 gap-12 lg:grid-cols-[200px_1.3fr_1fr_1fr]">
        <img src="/images/Transparent_Icon Full.png" alt="Dr Ettang Inc" className="w-[200px]" />
        <div><h4 className={h4}>Dr Ettang Inc</h4><p className="max-w-[265px] leading-6">Providing thoughtful medical care for individuals and families, with consultations available in person, through home visits and via telehealth.</p></div>
        <div><h4 className={h4}>Our Services</h4><ul>{services.map((s) => <li key={s.t} className="leading-[30px]">{s.t}</li>)}</ul></div>
        <div><h4 className={h4}>Explore</h4><ul>{explore.map(([l, h]) => <li key={l} className="leading-[30px]"><a href={h} className="transition hover:text-teal">{l}</a></li>)}</ul></div>
      </div>
      <div className="mt-16 flex flex-wrap gap-8 border-t border-black/[.08] pt-7 font-semibold">
        <span>© 2026 Dr. Ettang Inc. All rights reserved.</span><a href="#" className="hover:text-teal">Terms and Condition</a><a href="#" className="hover:text-teal">Private Policy</a>
      </div>
    </footer>
  );
}

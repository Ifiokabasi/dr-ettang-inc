"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";

const SERVICES = ["General Practice", "Family Medicine", "Home Visits", "Telehealth", "Chronic Disease Management", "Preventive Healthcare"];
const LOCATIONS = ["In-person clinic", "Home visit", "Telehealth (video)"];
const STEPS = ["Service Selection", "Date and Time", "Your information"];

const input = "h-[46px] w-full rounded-xl border border-[#5f5f5f]/60 bg-white px-3.5 font-display text-base text-[#222] outline-none transition focus:border-[#0099c6] focus:ring-4 focus:ring-cyan/20";
const label = "mb-2 mt-[18px] block font-display text-xl text-black";
const shell = "mb-20 rounded-[28px] border border-white/70 bg-white/70 shadow-lift backdrop-blur-xl";

export function BookingCard() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  if (done) return <div role="status" className={`${shell} p-8`}><h3 className="mb-2 text-[32px] font-semibold text-ink">Request sent</h3><p>Thank you. We will confirm your appointment shortly.</p></div>;
  return (
    <div className={`${shell} grid gap-7 px-7 pb-9 pt-12 md:grid-cols-[230px_1fr]`}>
      <div className="grid content-start gap-[26px] md:border-r md:border-[#999] md:pr-6" role="tablist">
        {STEPS.map((s, i) => (
          <button key={s} role="tab" aria-current={step === i} onClick={() => setStep(i)}
            className={`flex h-[70px] items-center rounded-2xl px-[17px] text-left font-display text-base transition ${step === i ? "bg-ink text-white" : "bg-black/5 hover:bg-black/10"}`}>{s}</button>
        ))}
      </div>
      <form onSubmit={(e) => { e.preventDefault(); step < 2 ? setStep(step + 1) : setDone(true); }}>
        <h3 className="mb-6 border-b border-[#999] pb-3 text-[32px] font-semibold text-ink">{STEPS[step]}</h3>
        {step === 0 && (<>
          <label htmlFor="svc" className={label}>Service:</label>
          <select id="svc" className={input} required defaultValue=""><option value="" disabled>Select Service</option>{SERVICES.map((s) => <option key={s}>{s}</option>)}</select>
          <label htmlFor="loc" className={label}>Location:</label>
          <select id="loc" className={input} required defaultValue=""><option value="" disabled>Select Location</option>{LOCATIONS.map((s) => <option key={s}>{s}</option>)}</select>
        </>)}
        {step === 1 && (<>
          <label htmlFor="date" className={label}>Preferred date:</label><input id="date" type="date" className={input} required />
          <label htmlFor="time" className={label}>Preferred time:</label><input id="time" type="time" className={input} required />
        </>)}
        {step === 2 && (<>
          <label htmlFor="bn" className={label}>Full name:</label><input id="bn" className={input} required />
          <label htmlFor="be" className={label}>Email:</label><input id="be" type="email" className={input} required />
          <label htmlFor="bp" className={label}>Phone:</label><input id="bp" type="tel" className={input} />
        </>)}
        <Button variant="dark" type="submit" className="mt-[30px] w-full justify-center">{step < 2 ? "Continue" : "Request appointment"}</Button>
      </form>
    </div>
  );
}

export function NewsletterForm() {
  const [ok, setOk] = useState(false);
  if (ok) return <p role="status">You are subscribed. Thank you.</p>;
  return (
    <form onSubmit={(e) => { e.preventDefault(); setOk(true); }} className="flex flex-wrap gap-3">
      <label htmlFor="nl" className="sr-only">Email address</label>
      <input id="nl" type="email" required placeholder="Your email address" className="h-[54px] min-w-[220px] flex-1 rounded-xl border border-[#555] bg-[#333] px-3.5 text-white outline-none transition focus:ring-4 focus:ring-brand/30" />
      <Button variant="outline" type="submit">Sign Up</Button>
    </form>
  );
}

const cInput = "h-[54px] w-full rounded-xl border border-white/20 bg-white/10 px-3.5 text-white backdrop-blur outline-none transition focus:ring-4 focus:ring-brand/35 [&>option]:text-black";
const cLabel = "mb-1.5 mt-5 block text-[13px] font-medium";
const Req = () => <b className="text-[#eb5454]">*</b>;

export function ContactForm() {
  const [ok, setOk] = useState(false);
  if (ok) return <p role="status">Thank you. We will get back to you soon.</p>;
  return (
    <form onSubmit={(e) => { e.preventDefault(); setOk(true); }}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><label htmlFor="cn" className={cLabel}>Name <Req /></label><input id="cn" className={cInput} required /></div>
        <div><label htmlFor="ce" className={cLabel}>Email <Req /></label><input id="ce" type="email" className={cInput} required /></div>
      </div>
      <label htmlFor="cr" className={cLabel}>What’s your reason for contacting us? <Req /></label>
      <select id="cr" className={cInput} required defaultValue=""><option value="" disabled>Choose One</option><option>Book a consultation</option><option>Home visit</option><option>Telehealth</option><option>Other</option></select>
      <label htmlFor="cm" className={cLabel}>Tell Us More <Req /></label>
      <textarea id="cm" required className={`${cInput} h-[140px] resize-y py-3.5`} />
      <label className="mt-5 flex items-center gap-2.5 text-[15px] font-bold"><input type="checkbox" className="accent-brand" /> Updates: Subscribe to our Newsletter</label>
      <Button type="submit" className="mt-8 h-[72px] w-full justify-center font-black tracking-[.08em]">CONNECT WITH US</Button>
    </form>
  );
}

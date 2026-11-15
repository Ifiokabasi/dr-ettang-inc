"use client";
import Button from "@/components/ui/Button";
import { useState, useRef, type FormEvent } from 'react';

const SERVICES = ["General Practice", "Family Medicine", "Home Visits", "Telehealth", "Chronic Disease Management", "Preventive Healthcare"];
const LOCATIONS = ["In-person clinic", "Home visit", "Telehealth (video)"];
const STEPS = ["Service Selection", "Date and Time", "Your information"];

const input = "h-[46px] w-full rounded-xl border border-[#5f5f5f]/60 bg-white px-3.5 font-display text-base text-[#222] outline-none transition focus:border-[#0099c6] focus:ring-4 focus:ring-cyan/20";
const label = "mb-2 mt-[18px] block font-display text-xl text-black";
const shell = "mb-20 rounded-[28px] border border-white/70 bg-white/70 shadow-lift backdrop-blur-xl";


export function BookingCard() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Store all booking information across steps
  const [formData, setFormData] = useState({
    svc: '',
    loc: '',
    date: '',
    time: '',
    bn: '',
    be: '',
    bp: '',
  });

  const formRef = useRef<HTMLFormElement>(null);

  // Update individual fields without losing other values
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Navigate between steps
  const handleStepChange = (nextStep: number) => {
    if (nextStep <= step) {
      setStep(nextStep);
      return;
    }

    // Only allow moving one step forward after validation
    if (nextStep === step + 1) {
      if (formRef.current?.reportValidity()) {
        setStep(nextStep);
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Move to the next step if not on the final step
    if (step < 2) {
      setStep(step + 1);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send ALL accumulated form data
      const data = {
        service: formData.svc,
        location: formData.loc,
        date: formData.date,
        time: formData.time,
        name: formData.bn,
        email: formData.be,
        phone: formData.bp,
      };

      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit booking');
      }

      setDone(true);

    } catch (error) {
      console.error('Booking submission error:', error);
      alert(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );

    } finally {
      setIsSubmitting(false);
    }
  };

  // Success screen
  if (done) {
    return (
      <div role="status" className={`${shell} p-8`}>
        <h3 className="mb-2 text-[32px] font-semibold text-ink">
          Request sent
        </h3>
        <p>
          Thank you. We will confirm your appointment shortly.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`${shell} grid gap-7 px-7 pb-9 pt-12 md:grid-cols-[230px_1fr]`}
    >
      {/* Step navigation */}
      <div
        className="grid content-start gap-[26px] md:border-r md:border-[#999] md:pr-6"
        role="tablist"
      >
        {STEPS.map((s, i) => (
          <button
            key={s}
            type="button"
            role="tab"
            aria-selected={step === i}
            onClick={() => handleStepChange(i)}
            className={`flex h-[70px] items-center rounded-2xl px-[17px] text-left font-display text-base transition ${
              step === i
                ? 'bg-ink text-white'
                : 'bg-black/5 hover:bg-black/10'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Booking form */}
      <form ref={formRef} onSubmit={handleSubmit}>
        <h3 className="mb-6 border-b border-[#999] pb-3 text-[32px] font-semibold text-ink">
          {STEPS[step]}
        </h3>

        {/* Step 1: Service & Location */}
        {step === 0 && (
          <>
            <label htmlFor="svc" className={label}>
              Service:
            </label>

            <select
              id="svc"
              name="svc"
              className={input}
              required
              value={formData.svc}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Service
              </option>

              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <label htmlFor="loc" className={label}>
              Location:
            </label>

            <select
              id="loc"
              name="loc"
              className={input}
              required
              value={formData.loc}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Location
              </option>

              {LOCATIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </>
        )}

        {/* Step 2: Preferred Time */}
        {step === 1 && (
          <>
            <label htmlFor="date" className={label}>
              Preferred date:
            </label>

            <input
              id="date"
              name="date"
              type="date"
              className={input}
              required
              value={formData.date}
              onChange={handleChange}
            />

            <label htmlFor="time" className={label}>
              Preferred time:
            </label>

            <input
              id="time"
              name="time"
              type="time"
              className={input}
              required
              value={formData.time}
              onChange={handleChange}
            />
          </>
        )}

        {/* Step 3: Your Details */}
        {step === 2 && (
          <>
            <label htmlFor="bn" className={label}>
              Full name:
            </label>

            <input
              id="bn"
              name="bn"
              type="text"
              className={input}
              required
              value={formData.bn}
              onChange={handleChange}
            />

            <label htmlFor="be" className={label}>
              Email:
            </label>

            <input
              id="be"
              name="be"
              type="email"
              className={input}
              required
              value={formData.be}
              onChange={handleChange}
            />

            <label htmlFor="bp" className={label}>
              Phone:
            </label>

            <input
              id="bp"
              name="bp"
              type="tel"
              className={input}
              value={formData.bp}
              onChange={handleChange}
            />
          </>
        )}

        {/* Navigation and submission */}
        <div className="mt-[30px] flex gap-3">
          {step > 0 && (
            <Button
              variant="dark"
              type="button"
              className="flex-1 justify-center"
              disabled={isSubmitting}
              onClick={() => setStep(step - 1)}
            >
              Back
            </Button>
          )}

          <Button
            variant="dark"
            type="submit"
            className="flex-1 justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? 'Sending...'
              : step < 2
                ? 'Continue'
                : 'Request appointment'}
          </Button>
        </div>
      </form>
    </div>
  );
}


export function NewsletterForm() {
  const [ok, setOk] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('nl');

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error('Failed');
      setOk(true);
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (ok) return <p role="status">You are subscribed. Thank you.</p>;

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-3">
      <label htmlFor="nl" className="sr-only">Email address</label>
      <input
        id="nl"
        name="nl"
        type="email"
        required
        placeholder="Your email address"
        className="h-[54px] min-w-[220px] flex-1 rounded-xl border border-[#555] bg-[#333] px-3.5 text-white outline-none transition focus:ring-4 focus:ring-brand/30"
      />
      <Button variant="outline" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Signing up...' : 'Sign Up'}
      </Button>
    </form>
  );
}

const cInput = "h-[54px] w-full rounded-xl border border-white/20 bg-white/10 px-3.5 text-white backdrop-blur outline-none transition focus:ring-4 focus:ring-brand/35 [&>option]:text-black";
const cLabel = "mb-1.5 mt-5 block text-[13px] font-medium";
const Req = () => <b className="text-[#eb5454]">*</b>;

export function ContactForm() {
  const [ok, setOk] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('cn'),
      email: formData.get('ce'),
      reason: formData.get('cr'),
      message: formData.get('cm'),
      newsletter: formData.get('newsletter') === 'on',
    };

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit');
      }

      setOk(true);
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (ok) return <p role="status">Thank you. We will get back to you soon.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cn" className={cLabel}>Name <Req /></label>
          <input id="cn" name="cn" className={cInput} required />
        </div>
        <div>
          <label htmlFor="ce" className={cLabel}>Email <Req /></label>
          <input id="ce" name="ce" type="email" className={cInput} required />
        </div>
      </div>

      <label htmlFor="cr" className={cLabel}>What's your reason for contacting us? <Req /></label>
      <select id="cr" name="cr" className={cInput} required defaultValue="">
        <option value="" disabled>Choose One</option>
        <option>Book a consultation</option>
        <option>Home visit</option>
        <option>Telehealth</option>
        <option>Other</option>
      </select>

      <label htmlFor="cm" className={cLabel}>Tell Us More <Req /></label>
      <textarea id="cm" name="cm" required className={`${cInput} h-[140px] resize-y py-3.5`} />

      <label className="mt-5 flex items-center gap-2.5 text-[15px] font-bold">
        <input type="checkbox" name="newsletter" className="accent-brand" />
        Updates: Subscribe to our Newsletter
      </label>

      <Button
        type="submit"
        className="mt-8 h-[72px] w-full justify-center font-black tracking-[.08em]"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'SENDING...' : 'CONNECT WITH US'}
      </Button>
    </form>
  );
}

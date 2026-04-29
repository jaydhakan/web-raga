import { CheckCircle2, Mail, MessageCircle, Phone } from 'lucide-react';
import { type FormEvent, useMemo, useState } from 'react';
import { Seo } from '@/components/common/Seo';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { siteConfig } from '@/constants/site';
import { pageSeo } from '@/data/seo';
import { getGeneralTripPlanningWhatsAppUrl } from '@/utils/whatsapp';

const initialForm = {
  name: '',
  email: '',
  destination: '',
  travelMonth: '',
  travelers: '',
  hotelPreference: '',
  budget: '',
  notes: '',
};

export function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [isPrepared, setIsPrepared] = useState(false);

  const whatsappUrl = useMemo(
    () =>
      getGeneralTripPlanningWhatsAppUrl({
        name: form.name,
        destination: form.destination,
        travelMonth: form.travelMonth,
        travelers: form.travelers,
        hotelPreference: form.hotelPreference,
        budget: form.budget,
        notes: form.notes,
      }),
    [form],
  );

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
    setIsPrepared(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPrepared(true);
    // TODO: Replace this static preparation state with API, Formspree, EmailJS, or CRM submission.
  };

  return (
    <section className="section-shell">
      <Seo {...pageSeo.contact} />
      <Container className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="reveal-section">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-raga-rust">Contact RAGA International</p>
          <h1 className="mt-5 font-display text-6xl font-semibold leading-[0.98]">Get a clear quote path before you book.</h1>
          <p className="mt-6 text-base leading-8 text-raga-ink/68">
            Share your destination, travel month, number of travellers, hotel preference, and approximate
            budget. We will prepare the enquiry for WhatsApp so RAGA International can suggest the right package variant.
          </p>
          <div className="mt-6 grid gap-2 text-sm font-bold text-raga-pine">
            <span>Free consultation</span>
            <span>Transparent inclusions before payment</span>
            <span>Availability checked before final quote</span>
          </div>
          <div className="mt-9 grid gap-4 text-sm font-semibold">
            <a className="focus-ring flex items-center gap-3 rounded-sm text-raga-ink/76 transition hover:text-raga-rust" href={`mailto:${siteConfig.email}`}>
              <Mail size={18} aria-hidden="true" /> {siteConfig.email}
            </a>
            <a className="focus-ring flex items-center gap-3 rounded-sm text-raga-ink/76 transition hover:text-raga-rust" href={`tel:${siteConfig.phone.replaceAll(' ', '')}`}>
              <Phone size={18} aria-hidden="true" /> {siteConfig.phone}
            </a>
            <a className="focus-ring flex items-center gap-3 rounded-sm text-raga-ink/76 transition hover:text-raga-rust" href={getGeneralTripPlanningWhatsAppUrl()} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> Enquire on WhatsApp
            </a>
          </div>
        </div>

        <form className="rounded-premium border border-raga-ink/10 bg-raga-ivory p-7 shadow-lifted sm:p-9" onSubmit={handleSubmit}>
          {/* TODO: Connect this form to an API endpoint, Formspree, EmailJS, or CRM once backend tooling is selected. */}
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-raga-rust">Travel brief</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">Tell us what you want to plan.</h2>
            <p className="mt-2 text-sm font-semibold text-raga-ink/56">
              Takes less than a minute. We will use this to prepare a cleaner WhatsApp enquiry.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-raga-ink/82">
              Name
              <input
                className="focus-ring min-h-12 rounded-lg border border-raga-ink/12 bg-white/85 px-4 font-medium text-raga-ink outline-none transition placeholder:text-raga-ink/35 focus:border-raga-gold focus:bg-white focus:shadow-card"
                placeholder="Your name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-raga-ink/82">
              Email
              <input
                className="focus-ring min-h-12 rounded-lg border border-raga-ink/12 bg-white/85 px-4 font-medium text-raga-ink outline-none transition placeholder:text-raga-ink/35 focus:border-raga-gold focus:bg-white focus:shadow-card"
                placeholder="you@example.com"
                type="email"
                name="email"
                autoComplete="email"
                spellCheck={false}
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-raga-ink/82">
              Preferred destination
              <input
                className="focus-ring min-h-12 rounded-lg border border-raga-ink/12 bg-white/85 px-4 font-medium text-raga-ink outline-none transition placeholder:text-raga-ink/35 focus:border-raga-gold focus:bg-white focus:shadow-card"
                placeholder="Dubai, Bali, Singapore…"
                name="destination"
                autoComplete="off"
                value={form.destination}
                onChange={(event) => updateField('destination', event.target.value)}
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-raga-ink/82">
              Travel month
              <input
                className="focus-ring min-h-12 rounded-lg border border-raga-ink/12 bg-white/85 px-4 font-medium text-raga-ink outline-none transition placeholder:text-raga-ink/35 focus:border-raga-gold focus:bg-white focus:shadow-card"
                placeholder="June 2026"
                name="travel-month"
                autoComplete="off"
                value={form.travelMonth}
                onChange={(event) => updateField('travelMonth', event.target.value)}
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-raga-ink/82">
              Travellers
              <input
                className="focus-ring min-h-12 rounded-lg border border-raga-ink/12 bg-white/85 px-4 font-medium text-raga-ink outline-none transition placeholder:text-raga-ink/35 focus:border-raga-gold focus:bg-white focus:shadow-card"
                placeholder="2 adults, 1 child"
                name="travelers"
                autoComplete="off"
                value={form.travelers}
                onChange={(event) => updateField('travelers', event.target.value)}
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-raga-ink/82">
              Hotel preference
              <select
                className="focus-ring min-h-12 rounded-lg border border-raga-ink/12 bg-white/85 px-4 font-medium text-raga-ink outline-none transition focus:border-raga-gold focus:bg-white focus:shadow-card"
                name="hotel-preference"
                autoComplete="off"
                value={form.hotelPreference}
                onChange={(event) => updateField('hotelPreference', event.target.value)}
              >
                <option value="">Select comfort level</option>
                <option value="Budget / 3-star">Budget / 3-star</option>
                <option value="Standard / 4-star">Standard / 4-star</option>
                <option value="Premium / 4-star superior">Premium / 4-star superior</option>
                <option value="Luxury / 5-star">Luxury / 5-star</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-raga-ink/82 sm:col-span-2">
              Budget range
              <input
                className="focus-ring min-h-12 rounded-lg border border-raga-ink/12 bg-white/85 px-4 font-medium text-raga-ink outline-none transition placeholder:text-raga-ink/35 focus:border-raga-gold focus:bg-white focus:shadow-card"
                placeholder="Approx. INR 60,000 per person"
                name="budget"
                autoComplete="off"
                value={form.budget}
                onChange={(event) => updateField('budget', event.target.value)}
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-raga-ink/82 sm:col-span-2">
              Notes
              <textarea
                className="focus-ring min-h-36 rounded-lg border border-raga-ink/12 bg-white/85 px-4 py-3 font-medium text-raga-ink outline-none transition placeholder:text-raga-ink/35 focus:border-raga-gold focus:bg-white focus:shadow-card"
                placeholder="Tell us if this is a honeymoon, family trip, group travel, cruise enquiry, or fixed-date holiday."
                name="notes"
                autoComplete="off"
                value={form.notes}
                onChange={(event) => updateField('notes', event.target.value)}
              />
            </label>
          </div>

          {isPrepared ? (
            <div className="mt-6 rounded-premium border border-raga-pine/20 bg-raga-mist/70 p-5" aria-live="polite">
              <p className="flex items-center gap-2 text-sm font-extrabold text-raga-pine">
                <CheckCircle2 size={18} aria-hidden="true" />
                Your WhatsApp enquiry is ready.
              </p>
              <p className="mt-2 text-sm leading-6 text-raga-ink/68">
                Continue to WhatsApp to send this travel brief to RAGA International. No backend submission has been added yet.
              </p>
            </div>
          ) : null}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button type="submit">Prepare My Quote</Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-raga-pine/20 bg-white px-6 py-3 text-sm font-extrabold text-raga-pine shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-raga-gold hover:shadow-card"
            >
              <MessageCircle className="mr-2" size={18} aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </div>
        </form>
      </Container>
    </section>
  );
}

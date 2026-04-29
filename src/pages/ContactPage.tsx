import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { siteConfig } from '@/constants/site';

export function ContactPage() {
  return (
    <section className="py-16">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-raga-rust">Contact</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight">Start planning a private journey.</h1>
          <p className="mt-5 text-base leading-8 text-raga-ink/70">
            Send dates, destination ideas, group size, and the travel style you prefer. We will respond with a
            clear next step.
          </p>
          <div className="mt-8 grid gap-3 text-sm">
            <a className="flex items-center gap-3" href={`mailto:${siteConfig.email}`}>
              <Mail size={18} aria-hidden="true" /> {siteConfig.email}
            </a>
            <a className="flex items-center gap-3" href={`tel:${siteConfig.phone.replaceAll(' ', '')}`}>
              <Phone size={18} aria-hidden="true" /> {siteConfig.phone}
            </a>
            <a className="flex items-center gap-3" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp enquiry
            </a>
          </div>
        </div>

        <form className="rounded-lg border border-raga-ink/10 bg-white p-6 shadow-sm">
          {/* TODO: Connect this form to a CRM, email service, or backend endpoint. */}
          <div className="grid gap-5">
            {['Name', 'Email', 'Preferred destination', 'Travel month'].map((label) => (
              <label key={label} className="grid gap-2 text-sm font-semibold">
                {label}
                <input
                  className="min-h-12 rounded-md border border-raga-ink/15 bg-raga-linen px-4 outline-none focus:border-raga-pine"
                  placeholder={label}
                  type={label === 'Email' ? 'email' : 'text'}
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-semibold">
              Notes
              <textarea
                className="min-h-36 rounded-md border border-raga-ink/15 bg-raga-linen px-4 py-3 outline-none focus:border-raga-pine"
                placeholder="Tell us what kind of trip you want."
              />
            </label>
            <Button type="button">Submit enquiry</Button>
          </div>
        </form>
      </Container>
    </section>
  );
}

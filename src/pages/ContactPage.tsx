import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { siteConfig } from '@/constants/site';

export function ContactPage() {
  return (
    <section className="py-20">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-raga-rust">Contact</p>
          <h1 className="mt-5 font-display text-6xl font-semibold leading-[0.98]">Start planning a private journey.</h1>
          <p className="mt-6 text-base leading-8 text-raga-ink/68">
            Send dates, destination ideas, group size, and the travel style you prefer. We will respond with a
            clear next step.
          </p>
          <div className="mt-9 grid gap-4 text-sm font-semibold">
            <a className="flex items-center gap-3 text-raga-ink/76 transition hover:text-raga-rust" href={`mailto:${siteConfig.email}`}>
              <Mail size={18} aria-hidden="true" /> {siteConfig.email}
            </a>
            <a className="flex items-center gap-3 text-raga-ink/76 transition hover:text-raga-rust" href={`tel:${siteConfig.phone.replaceAll(' ', '')}`}>
              <Phone size={18} aria-hidden="true" /> {siteConfig.phone}
            </a>
            <a className="flex items-center gap-3 text-raga-ink/76 transition hover:text-raga-rust" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp enquiry
            </a>
          </div>
        </div>

        <form className="rounded-brand border border-raga-ink/10 bg-raga-ivory p-7 shadow-lifted sm:p-9">
          {/* TODO: Connect this form to a CRM, email service, or backend endpoint. */}
          <div className="grid gap-5">
            {['Name', 'Email', 'Preferred destination', 'Travel month'].map((label) => (
              <label key={label} className="grid gap-2 text-sm font-bold text-raga-ink/82">
                {label}
                <input
                  className="min-h-12 rounded-lg border border-raga-ink/12 bg-white/85 px-4 font-medium text-raga-ink outline-none transition placeholder:text-raga-ink/35 focus:border-raga-gold focus:bg-white focus:shadow-card"
                  placeholder={label}
                  type={label === 'Email' ? 'email' : 'text'}
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-bold text-raga-ink/82">
              Notes
              <textarea
                className="min-h-36 rounded-lg border border-raga-ink/12 bg-white/85 px-4 py-3 font-medium text-raga-ink outline-none transition placeholder:text-raga-ink/35 focus:border-raga-gold focus:bg-white focus:shadow-card"
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

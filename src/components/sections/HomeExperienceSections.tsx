import {
  CalendarCheck,
  Headphones,
  HeartHandshake,
  Instagram,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { siteConfig } from '@/constants/site';
import { customTripPoints, socialProofPosts, trustBadges, whyChooseItems } from '@/data/homeContent';
import { travelPackages } from '@/data/packages';
import { getGeneralTripPlanningWhatsAppUrl } from '@/utils/whatsapp';

const iconMap = {
  calendar: CalendarCheck,
  headphones: Headphones,
  heart: HeartHandshake,
  message: MessageCircle,
  shield: ShieldCheck,
  sparkles: Sparkles,
  users: Users,
};

export function WhyChooseSection() {
  return (
    <section className="section-shell bg-raga-ivory">
      <Container>
        <SectionHeading
          eyebrow="Why choose RAGA International"
          title="Travel planning that feels premium before the trip begins."
          description="We focus on the decisions that matter: the right route, hotel category, transfers, sightseeing pace, and final cost clarity."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseItems.map(({ title, description, icon }) => {
            const Icon = iconMap[icon];

            return (
            <article key={title} className="premium-card p-7">
              <div className="mb-6 inline-flex size-12 items-center justify-center rounded-full bg-raga-pine text-raga-ivory">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="font-display text-3xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-raga-ink/68">{description}</p>
            </article>
            );
          })}
        </div>
        <div className="mt-8 grid gap-3 rounded-premium border border-raga-ink/8 bg-raga-ivory p-5 shadow-card sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-3 text-sm font-bold text-raga-pine">
              <ShieldCheck size={18} className="text-raga-gold" aria-hidden="true" />
              {badge}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function PopularDestinationsSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Popular destinations"
            title="International favourites, ready to customize."
            description="Start with a proven route, then refine the hotel tier, duration, experiences, and group requirements."
          />
          <Button href="/packages" variant="secondary">
            Compare Packages
          </Button>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {travelPackages.slice(0, 6).map((item) => (
            <Link
              key={item.id}
              to={`/packages/${item.slug}`}
              className="focus-ring group relative min-h-72 overflow-hidden rounded-premium shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-lifted"
            >
              <img
                src={item.heroImage}
                alt={`${item.title} international holiday package by RAGA International`}
                className="image-zoom absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                width="900"
                height="675"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-raga-ink/88 via-raga-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-raga-ivory">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-raga-gold">{item.country}</p>
                <h3 className="mt-2 font-display text-4xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold text-raga-ivory/76">{item.packageType}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CustomTripsCtaSection() {
  return (
    <section className="section-shell bg-raga-pine text-raga-ivory">
      <Container className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-raga-gold">Groups and custom holidays</p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[1.02] sm:text-6xl">
            Travelling as a family, friends group, or honeymoon couple?
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-raga-ivory/76">
            Share your dates, group size, comfort level, and must-do experiences. We will shape a practical route
            with the right rooming, transfers, and price tier.
          </p>
        </div>
        <div className="rounded-premium border border-raga-ivory/12 bg-white/8 p-6 shadow-lifted backdrop-blur-md">
          <div className="grid gap-4 text-sm font-bold text-raga-ivory/82">
            {customTripPoints.map(({ label, icon }) => {
              const Icon = iconMap[icon];

              return (
                <span key={label} className="flex items-center gap-3">
                  <Icon size={18} aria-hidden="true" />
                  {label}
                </span>
              );
            })}
          </div>
          <a
            href={getGeneralTripPlanningWhatsAppUrl({
              notes: 'I am interested in a custom group, family, honeymoon, or private international holiday.',
            })}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-raga-gold px-6 py-3 text-sm font-extrabold text-raga-ink shadow-card transition duration-300 hover:-translate-y-0.5 hover:bg-raga-sand hover:shadow-glow"
          >
            Plan My Custom Trip
          </a>
        </div>
      </Container>
    </section>
  );
}

export function SocialProofSection() {
  return (
    <section className="section-shell bg-raga-ivory">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="Instagram and social proof"
            title="A feed-ready space for real traveller moments."
            description="Placeholder cards are used for now. This section is structured so real Instagram posts, reels, customer tags, or curated travel albums can replace them later."
          />
          <div className="rounded-premium border border-raga-ink/8 bg-raga-linen p-6 shadow-card">
            <div className="flex items-start gap-4">
              <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-raga-pine text-raga-ivory">
                <Instagram size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-raga-pine">{siteConfig.instagramHandle}</p>
                <p className="mt-2 text-sm leading-7 text-raga-ink/66">
                  Follow RAGA International for package updates, destination inspiration, customer stories,
                  hotel previews, and travel assistance announcements.
                </p>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-4 inline-flex rounded-sm text-sm font-extrabold text-raga-rust transition hover:text-raga-ink"
                >
                  View Instagram Proof
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {socialProofPosts.map((post) => (
            <article key={post.label} className="group overflow-hidden rounded-premium border border-raga-ink/8 bg-raga-ivory shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-lifted">
              <div className="relative">
                <img src={post.image} alt={post.alt} className="image-zoom aspect-square w-full object-cover" loading="lazy" width="700" height="700" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-raga-ivory/92 px-3 py-1.5 text-xs font-bold text-raga-pine shadow-card">
                  <Star size={13} className="text-raga-gold" aria-hidden="true" />
                  Placeholder
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-bold text-raga-pine">{post.label}</p>
                <p className="mt-2 text-sm leading-6 text-raga-ink/62">{post.caption}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-raga-ink/42">
                  {siteConfig.instagramHandle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Instagram, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ragaLogo from '@/assets/images/logo/raga-logo-on-dark.png';
import { siteConfig } from '@/constants/site';
import { navigationLinks } from '@/data/navigation';
import { Container } from '@/components/common/Container';

export function Footer() {
  return (
    <footer className="border-t border-raga-gold/20 bg-raga-ink py-16 text-raga-linen">
      <Container className="grid gap-12 md:grid-cols-[1.35fr_1fr_1fr]">
        <div>
          <img src={ragaLogo} alt={siteConfig.name} className="h-14 w-auto sm:h-16" />
          <p className="mt-5 max-w-md text-sm leading-7 text-raga-linen/68">{siteConfig.tagline}</p>
          <p className="mt-4 flex items-start gap-2 max-w-md text-sm leading-6 text-raga-linen/60">
            <MapPin size={16} className="mt-0.5 shrink-0 text-raga-gold" aria-hidden="true" />
            {siteConfig.address}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.16em] text-raga-linen/60">
            <span className="rounded-full border border-raga-linen/12 px-3 py-1.5">International holidays</span>
            <span className="rounded-full border border-raga-linen/12 px-3 py-1.5">Custom groups</span>
          </div>
        </div>
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-raga-gold">Explore</p>
          <div className="grid gap-3 text-sm text-raga-linen/72">
            {navigationLinks.map((link) => (
              <Link key={link.href} to={link.href} className="focus-ring rounded-sm transition hover:translate-x-1 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-raga-gold">Contact</p>
          <div className="grid gap-3 text-sm text-raga-linen/72">
            <a className="focus-ring rounded-sm transition hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a className="focus-ring rounded-sm transition hover:text-white" href={`tel:${siteConfig.phone.replaceAll(' ', '')}`}>{siteConfig.phone}</a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-sm transition hover:text-white"
            >
              <Instagram size={16} aria-hidden="true" />
              {siteConfig.instagramHandle}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

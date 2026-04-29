import { siteConfig } from '@/constants/site';
import { navigationLinks } from '@/data/navigation';
import { Container } from '@/components/common/Container';

export function Footer() {
  return (
    <footer className="border-t border-raga-gold/20 bg-raga-ink py-16 text-raga-linen">
      <Container className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-5xl font-semibold tracking-[0.04em]">{siteConfig.name}</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-raga-linen/68">{siteConfig.tagline}</p>
        </div>
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-raga-gold">Explore</p>
          <div className="grid gap-3 text-sm text-raga-linen/72">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-raga-gold">Contact</p>
          <div className="grid gap-3 text-sm text-raga-linen/72">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={`tel:${siteConfig.phone.replaceAll(' ', '')}`}>{siteConfig.phone}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

import { siteConfig } from '@/constants/site';
import { navigationLinks } from '@/data/navigation';
import { Container } from '@/components/common/Container';

export function Footer() {
  return (
    <footer className="bg-raga-ink py-12 text-raga-linen">
      <Container className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-4xl font-semibold">{siteConfig.name}</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-raga-linen/70">{siteConfig.tagline}</p>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-raga-gold">Explore</p>
          <div className="grid gap-2 text-sm text-raga-linen/75">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-raga-gold">Contact</p>
          <div className="grid gap-2 text-sm text-raga-linen/75">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={`tel:${siteConfig.phone.replaceAll(' ', '')}`}>{siteConfig.phone}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

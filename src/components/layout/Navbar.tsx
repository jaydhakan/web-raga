import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navigationLinks } from '@/data/navigation';
import { siteConfig } from '@/constants/site';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-raga-ink/10 bg-raga-linen/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <NavLink to="/" className="font-display text-3xl font-bold tracking-wide text-raga-ink">
          {siteConfig.name}
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-semibold transition hover:text-raga-pine ${
                  isActive ? 'text-raga-pine' : 'text-raga-ink/70'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="secondary">
            Plan a trip
          </Button>
        </div>

        <button
          className="inline-flex size-11 items-center justify-center rounded-full border border-raga-ink/15 md:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {isOpen ? (
        <nav className="border-t border-raga-ink/10 bg-raga-linen px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className="text-base font-semibold text-raga-ink"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

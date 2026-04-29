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
    <header className="sticky top-0 z-50 border-b border-raga-ink/10 bg-raga-ivory/86 shadow-sm backdrop-blur-2xl">
      <Container className="flex h-20 items-center justify-between">
        <NavLink to="/" className="font-display text-2xl font-bold tracking-[0.08em] text-raga-ink sm:text-3xl">
          {siteConfig.name}
        </NavLink>

        <nav className="hidden items-center gap-2 rounded-full border border-raga-ink/8 bg-white/45 p-1.5 shadow-sm md:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-extrabold transition duration-300 hover:bg-raga-ivory hover:text-raga-rust ${
                  isActive ? 'bg-raga-pine text-raga-ivory shadow-card' : 'text-raga-ink/66'
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
          className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-raga-ink/12 bg-raga-pearl shadow-card transition hover:-translate-y-0.5 md:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {isOpen ? (
        <nav className="animate-section-rise border-t border-raga-ink/10 bg-raga-ivory px-5 py-5 shadow-lifted md:hidden">
          <div className="grid gap-3">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `rounded-brand px-4 py-3 text-base font-extrabold transition ${
                    isActive ? 'bg-raga-pine text-raga-ivory' : 'bg-white/55 text-raga-ink'
                  }`
                }
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

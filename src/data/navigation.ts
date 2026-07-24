import type { NavLink } from '@/types/shared';

// TODO: Replace static navigation with CMS-managed menus if the website grows into destination/category hubs.
export const navigationLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Packages', href: '/packages' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'About', href: '/about' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

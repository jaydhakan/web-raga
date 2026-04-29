import { type CSSProperties, type RefObject, useEffect, useRef, useState } from 'react';

/**
 * Animates an element into view using IntersectionObserver.
 * - Runs once per mount
 * - Respects prefers-reduced-motion
 * - Uses opacity + transform only (compositor-only, no layout cost)
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(): {
  ref: RefObject<T | null>;
  revealStyle: CSSProperties;
} {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    revealStyle: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(16px)',
      transition: 'opacity 600ms ease-out, transform 600ms ease-out',
    },
  };
}

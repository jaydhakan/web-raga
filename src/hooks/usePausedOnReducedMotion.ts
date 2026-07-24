import { type RefObject, useEffect, useRef } from 'react';

// Autoplaying background videos should stop moving when the visitor has asked for reduced motion.
export function usePausedOnReducedMotion<T extends HTMLVideoElement = HTMLVideoElement>(): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
    }
  }, []);

  return ref;
}

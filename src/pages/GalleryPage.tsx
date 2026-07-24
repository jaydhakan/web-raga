import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Seo } from '@/components/common/Seo';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection';
import { galleryPhotos } from '@/data/gallery';
import { pageSeo } from '@/data/seo';

export function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((index) => (index === null ? null : (index - 1 + galleryPhotos.length) % galleryPhotos.length)),
    [],
  );
  const showNext = useCallback(
    () => setActiveIndex((index) => (index === null ? null : (index + 1) % galleryPhotos.length)),
    [],
  );

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex, close, showPrev, showNext]);

  const activePhoto = activeIndex === null ? null : galleryPhotos[activeIndex];

  return (
    <>
      <Seo {...pageSeo.gallery} />
      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Traveller photo gallery"
            title="Real trips, real travellers."
            description="Every photo here is from an actual RAGA International trip, not stock photography. Tap any photo for a closer look."
          />

          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryPhotos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="focus-ring group mb-5 block w-full overflow-hidden rounded-premium border border-raga-ink/8 bg-raga-ivory shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lifted"
              >
                <img src={photo.src} alt={photo.alt} className="image-zoom w-full object-cover" loading="lazy" />
                <span className="block p-4 text-left">
                  <span className="block text-sm font-bold text-raga-pine">{photo.location}</span>
                  <span className="mt-1 block text-sm leading-6 text-raga-ink/62">{photo.caption}</span>
                </span>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {activePhoto ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-raga-ink/92 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="focus-ring absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/22"
          >
            <X size={20} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
            className="focus-ring absolute left-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/22 sm:left-6"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>

          <figure className="max-h-[85vh] max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <img src={activePhoto.src} alt={activePhoto.alt} className="max-h-[75vh] w-full rounded-premium object-contain" />
            <figcaption className="mt-4 text-center text-sm text-raga-ivory/80">
              <span className="font-bold text-raga-gold">{activePhoto.location}</span> — {activePhoto.caption}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            className="focus-ring absolute right-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/22 sm:right-6"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>
      ) : null}

      <ContactCtaSection />
    </>
  );
}

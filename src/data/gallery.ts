import cavenaghBridge from '@/assets/images/gallery/singapore-cavenagh-bridge-group.jpg';
import cruiseDeck from '@/assets/images/gallery/singapore-cruise-deck-group.jpg';
import gardensByTheBay from '@/assets/images/gallery/singapore-gardens-by-the-bay.jpg';
import merlionPark from '@/assets/images/gallery/singapore-merlion-park.jpg';
import universalStudiosFamily from '@/assets/images/gallery/singapore-universal-studios-family.jpg';
import universalStudiosGlobe from '@/assets/images/gallery/singapore-universal-studios-globe.jpg';
import waterfrontWave from '@/assets/images/gallery/singapore-waterfront-wave.jpg';

export type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  location: string;
};

// Real traveller photos from RAGA International trips. Swap the imported file to replace a photo without touching this list.
export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'gallery-01',
    src: cavenaghBridge,
    alt: 'Travel group celebrating on the historic Cavenagh Bridge in Singapore',
    caption: 'A full group celebration on Cavenagh Bridge, right by the Singapore River.',
    location: 'Singapore',
  },
  {
    id: 'gallery-02',
    src: universalStudiosFamily,
    alt: 'Family posing together at the Universal Studios Singapore entrance globe',
    caption: 'Three generations together at the Universal Studios Singapore entrance.',
    location: 'Singapore',
  },
  {
    id: 'gallery-03',
    src: gardensByTheBay,
    alt: 'Group photo inside the Cloud Forest at Gardens by the Bay, Singapore',
    caption: 'Winding through the orchids and ferns inside the Cloud Forest dome.',
    location: 'Singapore',
  },
  {
    id: 'gallery-04',
    src: cruiseDeck,
    alt: 'Large group photo on the deck of a cruise ship departing Singapore',
    caption: 'The whole group on deck as the cruise pulls out to sea.',
    location: 'Singapore cruise',
  },
  {
    id: 'gallery-05',
    src: merlionPark,
    alt: 'Traveller sharing a playful moment with the Merlion statue at Merlion Park',
    caption: 'A playful moment with the Merlion, right on the Marina Bay waterfront.',
    location: 'Singapore',
  },
  {
    id: 'gallery-06',
    src: universalStudiosGlobe,
    alt: 'Travel group cheering under the rotating globe at Universal Studios Singapore',
    caption: 'Big smiles under the globe after a full day at Universal Studios.',
    location: 'Singapore',
  },
  {
    id: 'gallery-07',
    src: waterfrontWave,
    alt: 'Traveller waving at the camera on a Singapore waterfront observation deck',
    caption: 'A warm hello from the waterfront deck, cable cars crossing behind.',
    location: 'Singapore',
  },
];

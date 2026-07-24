import founderPortrait from '@/assets/images/founder/founder-portrait.jpg';

export type FounderStat = {
  value: string;
  label: string;
};

export const founderStats: FounderStat[] = [
  { value: '10,000+', label: 'Guests Travelled' },
  { value: '14+ Years', label: 'of Experience' },
  { value: '24/7', label: 'Travel Support' },
];

export const founderContent = {
  eyebrow: 'The Trust Behind Your Journey',
  portrait: founderPortrait,
  name: 'Rohan Pujara',
  role: 'Founder & Director — Raga International',
  location: 'Rajkot, Gujarat',
  quote:
    "Travel is more than a booking. It is your family's time, your hard earned money, and memories you will carry for a lifetime. That's why we believe trust must come first.",
  bio: 'Raga International has been helping travellers discover the world with thoughtfully planned holidays, transparent packages, and dedicated support.',
  signature: 'Rohan Pujara, Founder, Raga International',
};

import type { Testimonial } from '@/types/shared';

// Real Google reviews for RAGA International. Quotes that Google truncated with "…More" are
// trimmed to the last complete sentence rather than guessed at — ask the reviewer's permission
// before adding back any cut-off text. Keep ratings/timeAgo updated if the Google listing changes.
export const testimonials: Testimonial[] = [
  {
    id: 'review-rajat-bohara',
    name: 'Rajat Bohara',
    reviewerMeta: '3 reviews',
    timeAgo: '6 months ago',
    rating: 5,
    quote:
      'Excellent service! The Raga International is professional, responsive, and took care of every detail. The trip was smooth, well-planned, and completely stress-free.',
    ownerReply: {
      author: 'Rohan Pujara, Raga International',
      text: 'Thank you so much! 🙌 Three trips with RAGA already — that trust means everything. Glad your journey was smooth. Many more amazing trips coming your way!',
    },
  },
  {
    id: 'review-aryan-padalia',
    name: 'Aryan Padalia',
    reviewerMeta: '4 reviews · 5 photos',
    timeAgo: '5 days ago',
    rating: 5,
    quote:
      'We recently visited Bali with our family through Raga International, and it was an amazing experience from start to finish. Everything was very well organized, including hotels, transportation, sightseeing, and airport assistance.',
    destination: 'Bali',
  },
  {
    id: 'review-ronit-vangani',
    name: 'Ronit Vangani',
    reviewerMeta: '2 reviews · 1 photo',
    timeAgo: '5 days ago',
    rating: 5,
    quote:
      "I visited Dubai recently, Mr. Rohan arranged everything very nicely. Everything was arranged perfectly from food to stay and travelling, everything was top notch. I didn't feel that I was in any unknown country.",
    destination: 'Dubai',
  },
  {
    id: 'review-harsh-parikh',
    name: 'Harsh Parikh',
    reviewerMeta: '2 reviews · 6 photos',
    timeAgo: 'a month ago',
    rating: 5,
    quote:
      'We would like to express our heartfelt thanks for planning such a wonderful Thailand trip for us. Our vacation to Phuket and Krabi was absolutely amazing and beautifully organized from start to finish.',
    destination: 'Thailand',
  },
  {
    id: 'review-bakul-vaghela',
    name: 'Bakul Vaghela',
    reviewerMeta: '3 reviews',
    timeAgo: '4 days ago',
    rating: 5,
    quote:
      'A wonderful experience, well organized Raga International team, enjoyed Gardens by Bay, Sentosa Island, Marina Bay, Jewel Changi Airport, Cable car ride, Genting SkyWorlds Theme Park, and much more. Thank you for your support in arranging the trip where everything has gone smoothly, we our friends and family a memorable holiday.',
    destination: 'Singapore & Malaysia',
  },
  {
    id: 'review-rahul-sarda',
    name: 'Rahul Sarda',
    reviewerMeta: 'Local Guide · 6 reviews · 51 photos',
    timeAgo: 'a week ago',
    rating: 5,
    quote:
      'I have never had such an experience before. This is the first time in my life that I was on a cruise for one night, passing by huge cliffs and big islands over the ocean.',
    destination: 'Cruise',
    translatedFrom: 'Hindi',
  },
  {
    id: 'review-rajeshree-bhadresa',
    name: 'Rajeshree Bhadresa',
    reviewerMeta: '2 reviews · 13 photos',
    timeAgo: '3 days ago',
    rating: 5,
    quote:
      "Hotel bookings, airport transfers, and sightseeing arrangements are so perfect that tourists don't have to worry about anything. The facilities of hotels, limousine rides, and private vehicles provided in the tour are very luxurious and comfortable.",
    translatedFrom: 'Gujarati',
  },
];

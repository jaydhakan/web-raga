export type NavLink = {
  label: string;
  href: string;
};

export type Testimonial = {
  id: string;
  name: string;
  reviewerMeta: string;
  timeAgo: string;
  rating: number;
  quote: string;
  destination?: string;
  translatedFrom?: string;
  ownerReply?: {
    author: string;
    text: string;
  };
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

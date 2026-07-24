import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { HomePage } from '@/pages/HomePage';

const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })),
);
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })),
);
const FaqPage = lazy(() =>
  import('@/pages/FaqPage').then((m) => ({ default: m.FaqPage })),
);
const GalleryPage = lazy(() =>
  import('@/pages/GalleryPage').then((m) => ({ default: m.GalleryPage })),
);
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
);
const PackageDetailPage = lazy(() =>
  import('@/pages/PackageDetailPage').then((m) => ({ default: m.PackageDetailPage })),
);
const PackagesPage = lazy(() =>
  import('@/pages/PackagesPage').then((m) => ({ default: m.PackagesPage })),
);
const ReviewsPage = lazy(() =>
  import('@/pages/ReviewsPage').then((m) => ({ default: m.ReviewsPage })),
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'packages', element: <PackagesPage /> },
      { path: 'packages/:slug', element: <PackageDetailPage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'reviews', element: <ReviewsPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '404', element: <NotFoundPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

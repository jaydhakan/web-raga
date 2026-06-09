import { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { FloatingWhatsAppButton } from '@/components/common/FloatingWhatsAppButton';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-raga-linen text-raga-ink">
      <ScrollRestoration />
      <Navbar />
      <main className="overflow-hidden">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

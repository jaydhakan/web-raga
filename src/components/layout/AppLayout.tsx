import { Outlet } from 'react-router-dom';
import { FloatingWhatsAppButton } from '@/components/common/FloatingWhatsAppButton';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-raga-linen text-raga-ink">
      <Navbar />
      <main className="overflow-hidden">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

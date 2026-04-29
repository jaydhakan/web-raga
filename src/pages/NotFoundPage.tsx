import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';

export function NotFoundPage() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-raga-rust">404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold">This route has wandered off.</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-raga-ink/70">
          The page you are looking for does not exist yet.
        </p>
        <div className="mt-8">
          <Button href="/">Return home</Button>
        </div>
      </Container>
    </section>
  );
}

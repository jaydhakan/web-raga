import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';

export function NotFoundPage() {
  return (
    <section className="py-28">
      <Container className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-raga-rust">404</p>
        <h1 className="mt-5 font-display text-6xl font-semibold leading-none">This route has wandered off.</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-raga-ink/68">
          The page you are looking for does not exist yet.
        </p>
        <div className="mt-8">
          <Button href="/">Return home</Button>
        </div>
      </Container>
    </section>
  );
}

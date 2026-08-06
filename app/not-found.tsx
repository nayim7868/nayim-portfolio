import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-[88rem]">
        <div className="panel-surface mx-auto max-w-xl p-8 text-center md:p-10">
          <p className="accent-cyan font-mono-label text-accent">404</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Page not found
          </h1>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            The route does not exist or has moved. Head back to the main work
            index or homepage.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary">
              Home
            </Link>
            <Link href="/work" className="btn-secondary">
              View Work
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

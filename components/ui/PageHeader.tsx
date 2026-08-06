import { Container } from "@/components/layout/Container";

type PageHeaderProps = {
  label: string;
  title: string;
  description: string;
};

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-white/10 py-14 md:py-16">
      <Container className="max-w-[88rem]">
        <p className="accent-cyan font-mono-label text-accent">{label}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}

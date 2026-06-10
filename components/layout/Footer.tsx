import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <p>Software engineering · Systems thinking · Architecture-first development</p>
      </Container>
    </footer>
  );
}
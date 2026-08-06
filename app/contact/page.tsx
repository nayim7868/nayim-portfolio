import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's talk about systems work."
        description="Open to software engineering roles, project collaboration, and technical conversations about workflow systems, applied AI, and cloud foundations."
      />

      <section className="py-12 md:py-14">
        <Container className="max-w-[88rem]">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="accent-cyan panel-surface p-6">
              <p className="font-mono-label text-accent">Email</p>
              <a
                href={siteConfig.links.email}
                className="mt-3 block text-lg font-medium text-white transition hover:text-accent-bright"
              >
                Nayimsalam814@gmail.com
              </a>
              <p className="mt-3 text-sm text-zinc-400">
                Best for role enquiries, project scope, or follow-up after
                reviewing the case studies.
              </p>
            </div>

            <div className="accent-sky panel-surface p-6">
              <p className="font-mono-label text-accent">GitHub</p>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-lg font-medium text-white transition hover:text-accent-bright"
              >
                github.com/nayim7868
              </a>
              <p className="mt-3 text-sm text-zinc-400">
                Code, prototypes, and implementation detail behind the selected
                systems.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/work" className="btn-secondary">
              Browse case studies →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

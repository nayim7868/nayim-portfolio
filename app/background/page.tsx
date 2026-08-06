import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProofModule } from "@/components/ui/ProofModule";
import { proofItems } from "@/config/portfolio";

export const metadata: Metadata = {
  title: "Background",
  description:
    "Education, industry exposure, and commercial context behind Nayim Salam's systems engineering work.",
  alternates: { canonical: "/background" },
};

export default function BackgroundPage() {
  return (
    <>
      <PageHeader
        label="Background"
        title="Education, industry, and commercial context."
        description="The systems work sits on top of formal training, industry exposure, and hands-on commercial operations."
      />

      <section className="py-12 md:py-14">
        <Container className="max-w-[88rem]">
          <div className="grid gap-3 md:grid-cols-3">
            {proofItems.map((item) => (
              <ProofModule
                key={item.title}
                title={item.title}
                line1={item.line1}
                line2={item.line2}
                accent={item.accent}
              />
            ))}
          </div>

          <div className="panel-surface mt-8 p-6 md:p-8">
            <p className="accent-cyan font-mono-label text-accent">Focus areas</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Workflow systems",
                "Applied AI prototypes",
                "Cloud deployment",
                "State & ownership models",
                "Failure-mode thinking",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/work" className="btn-primary">
                View Work
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

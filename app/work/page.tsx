import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { WorkflowDiagram } from "@/components/home/WorkflowDiagram";
import { featuredProjects } from "@/config/portfolio";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected systems work: case studies framed by workflow, state, reliability, and MVP judgement.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Case studies"
        title="Selected systems work."
        description="Each case study covers the problem, system shape, technical decisions, implementation, limitations, and next iteration."
      />

      <section className="py-12 md:py-14">
        <Container className="max-w-[88rem]">
          <div className="grid auto-rows-fr gap-4 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className={cn(
                  "accent-" + project.accent,
                  "group panel-surface flex h-full flex-col p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent",
                )}
              >
                <WorkflowDiagram
                  steps={project.motifSteps}
                  highlightStep={project.highlightStep}
                  accent={project.accent}
                />
                <p className="font-mono-label mt-4 text-accent">{project.label}</p>
                <h2 className="mt-2 text-xl font-semibold text-white group-hover:text-accent-bright">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-zinc-400">{project.hook}</p>
                <p className="signal-bar mt-4 pl-3 text-xs leading-5 text-zinc-300">
                  {project.signal}
                </p>
                <p className="mt-5 text-sm font-medium text-accent">
                  Open case study →
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

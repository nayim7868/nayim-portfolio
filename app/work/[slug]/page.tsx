import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { WorkflowDiagram } from "@/components/home/WorkflowDiagram";
import { CaseStudyView } from "@/components/work/CaseStudyView";
import { getCaseStudyBySlug } from "@/config/case-studies";
import {
  featuredProjects,
  getProjectBySlug,
  getProjectSlugs,
} from "@/config/portfolio";
import { cn } from "@/lib/utils";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Case study not found" };
  }

  const caseStudy = getCaseStudyBySlug(slug);

  return {
    title: project.title,
    description: caseStudy?.intro ?? project.hook,
  };
}

const fallbackSections = [
  {
    title: "Problem",
    body: "The operational pressure, actors involved, and what breaks when state is unclear or ownership is missing.",
  },
  {
    title: "System shape",
    body: "Actors, actions, state transitions, boundaries, and the minimum structure required for the workflow to stay legible.",
  },
  {
    title: "Technical decisions",
    body: "Trade-offs across stack, data model, deployment, and guardrails — including what was intentionally deferred.",
  },
  {
    title: "Implementation",
    body: "How the system was built in practice: modules, interfaces, tests, and the path from prototype to usable product.",
  },
  {
    title: "Limitations",
    body: "Known failure modes, assumptions, and constraints that still shape how the system should be evaluated.",
  },
  {
    title: "Next iteration",
    body: "What would change under more time, scale, or production pressure — and why that order matters.",
  },
];

function GenericCaseStudyView({
  project,
  otherProjects,
}: {
  project: NonNullable<ReturnType<typeof getProjectBySlug>>;
  otherProjects: typeof featuredProjects;
}) {
  return (
    <>
      <section className="border-b border-white/10 py-10 md:py-12">
        <Container className="max-w-[88rem]">
          <Link
            href="/work"
            className="text-sm text-zinc-500 transition hover:text-zinc-300"
          >
            ← All work
          </Link>

          <div className={cn("accent-" + project.accent, "mt-5")}>
            <p className="font-mono-label text-accent">{project.label}</p>
            <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-text-secondary md:text-lg">
              {project.hook}
            </p>

            <div className="mt-6">
              <WorkflowDiagram
                steps={project.motifSteps}
                highlightStep={project.highlightStep}
                accent={project.accent}
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono rounded-full border border-white/12 px-2 py-0.5 text-[10px] text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-12">
        <Container className="max-w-[88rem]">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              {fallbackSections.map((section) => (
                <article
                  key={section.title}
                  className="panel-surface p-5 md:p-6"
                >
                  <p className="font-mono-label text-zinc-500">{section.title}</p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300 md:text-base md:leading-7">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>

            <div
              className={cn(
                "accent-" + project.accent,
                "space-y-4 lg:sticky lg:top-24 lg:self-start",
              )}
            >
              <div className="panel-surface p-5">
                <p className="font-mono-label text-accent">System layers</p>
                <div className="mt-4 grid gap-2">
                  {project.layers.map((layer) => (
                    <div
                      key={layer.name}
                      className={cn(
                        "rounded-xl border p-3",
                        layer.highlighted
                          ? "border-accent bg-accent"
                          : "border-white/10 bg-[var(--surface-panel)]",
                      )}
                    >
                      <p
                        className={cn(
                          "font-mono-label",
                          layer.highlighted
                            ? "text-accent-bright"
                            : "text-zinc-500",
                        )}
                      >
                        {layer.name}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {layer.items.map((item) => (
                          <span
                            key={item}
                            className="font-mono rounded-full border border-white/12 bg-white/[0.03] px-2 py-1 text-[10px] text-zinc-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-accent bg-accent-soft p-5">
                <p className="font-mono-label text-accent-bright">System judgement</p>
                <p className="mt-3 text-xl font-semibold leading-tight text-white">
                  {project.judgement.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-200">
                  {project.judgement.body}
                </p>
                <p className="signal-bar mt-4 pl-3 text-xs leading-5 text-zinc-300">
                  {project.signal}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 py-10 md:py-12">
        <Container className="max-w-[88rem]">
          <p className="accent-cyan font-mono-label text-accent">More case studies</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {otherProjects.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "accent-" + item.accent,
                  "panel-surface p-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent",
                )}
              >
                <p className="font-mono-label text-accent">{item.label}</p>
                <p className="mt-2 text-sm font-medium text-white">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const caseStudy = getCaseStudyBySlug(slug);
  const otherProjects = featuredProjects.filter((item) => item.id !== project.id);

  if (caseStudy) {
    return (
      <CaseStudyView
        project={project}
        content={caseStudy}
        otherProjects={otherProjects}
      />
    );
  }

  return (
    <GenericCaseStudyView project={project} otherProjects={otherProjects} />
  );
}

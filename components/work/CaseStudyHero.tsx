import Link from "next/link";
import { WorkflowDiagram } from "@/components/home/WorkflowDiagram";
import { RideLifecycleArtifact } from "@/components/work/RideLifecycleArtifact";
import type { CaseStudyContent } from "@/config/case-studies";
import type { ProjectArtifact } from "@/config/portfolio";
import { cn } from "@/lib/utils";

type CaseStudyHeroProps = {
  project: ProjectArtifact;
  content: CaseStudyContent;
};

export function CaseStudyHero({ project, content }: CaseStudyHeroProps) {
  return (
    <section className="case-study-hero border-b border-white/10 py-7 md:py-9">
      <div className="mx-auto w-full max-w-[88rem] px-6">
        <Link
          href="/work"
          className="text-sm text-zinc-500 transition hover:text-zinc-300"
        >
          ← All work
        </Link>

        <div
          className={cn(
            "accent-" + project.accent,
            "mt-4 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-8",
          )}
        >
          <div>
            <p className="font-mono-label text-accent">{project.label}</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.5rem] lg:leading-[1.08]">
              {project.title}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-text-secondary md:text-base md:leading-7">
              {content.intro}
            </p>

            <div className="mt-4">
              <WorkflowDiagram
                steps={project.motifSteps}
                highlightStep={project.highlightStep}
                accent={project.accent}
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
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

          <RideLifecycleArtifact artifact={content.rideArtifact} />
        </div>
      </div>
    </section>
  );
}

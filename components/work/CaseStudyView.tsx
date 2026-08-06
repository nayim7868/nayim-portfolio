import Link from "next/link";
import { CaseStudyHero } from "@/components/work/CaseStudyHero";
import { DecisionRecords } from "@/components/work/DecisionRecords";
import { EvidenceFromBuild } from "@/components/work/EvidenceFromBuild";
import { FinalProofPanel } from "@/components/work/FinalProofPanel";
import { ImplementationPanels } from "@/components/work/ImplementationPanels";
import { NextIterationRoadmap } from "@/components/work/NextIterationRoadmap";
import { PilotBoundary } from "@/components/work/PilotBoundary";
import { RideLifecycleTimeline } from "@/components/work/RideLifecycleTimeline";
import { SystemLayerGrid } from "@/components/work/SystemLayerGrid";
import type { CaseStudyContent } from "@/config/case-studies";
import type { ProjectArtifact } from "@/config/portfolio";
import { cn } from "@/lib/utils";

type CaseStudyViewProps = {
  project: ProjectArtifact;
  content: CaseStudyContent;
  otherProjects: ProjectArtifact[];
};

function SectionHeading({ label }: { label: string }) {
  return <p className="font-mono-label text-zinc-500">{label}</p>;
}

export function CaseStudyView({
  project,
  content,
  otherProjects,
}: CaseStudyViewProps) {
  return (
    <div className={cn("accent-" + project.accent, "case-study-view")}>
      <CaseStudyHero project={project} content={content} />

      <RideLifecycleTimeline lifecycle={content.lifecycle} />

      <section className="case-study-section py-7 md:py-8">
        <div className="mx-auto w-full max-w-[88rem] px-6">
          <SectionHeading label="System layers" />
          <p className="mt-1.5 max-w-2xl text-xs leading-5 text-zinc-500">
            Supporting structure behind the lifecycle.
          </p>
          <div className="mt-3">
            <SystemLayerGrid layers={content.systemLayers} />
          </div>
        </div>
      </section>

      <section className="case-study-section py-7 md:py-8">
        <div className="mx-auto w-full max-w-[88rem] px-6">
          <SectionHeading label="Technical decisions" />
          <div className="mt-3">
            <DecisionRecords decisions={content.decisions} />
          </div>
        </div>
      </section>

      <section className="case-study-section py-7 md:py-8">
        <div className="mx-auto w-full max-w-[88rem] px-6">
          <SectionHeading label="Implementation" />
          <div className="mt-3">
            <ImplementationPanels implementation={content.implementation} />
          </div>
        </div>
      </section>

      <section className="case-study-section py-7 md:py-8">
        <div className="mx-auto w-full max-w-[88rem] px-6">
          <SectionHeading label="Evidence from the build" />
          <p className="mt-1.5 text-xs leading-5 text-zinc-500">
            Measured claims from tests, checks, and governance framing.
          </p>
          <div className="mt-3">
            <EvidenceFromBuild rows={content.evidenceMatrix} />
          </div>
        </div>
      </section>

      <section className="case-study-section pilot-boundary-section py-7 md:py-8">
        <div className="mx-auto w-full max-w-[88rem] px-6">
          <SectionHeading label="Pilot boundary" />
          <div className="mt-3">
            <PilotBoundary pilotBoundary={content.pilotBoundary} />
          </div>
        </div>
      </section>

      <section className="case-study-section py-7 md:py-8">
        <div className="mx-auto w-full max-w-[88rem] px-6">
          <SectionHeading label="Next iteration" />
          <div className="mt-3">
            <NextIterationRoadmap items={content.nextIteration} />
          </div>
        </div>
      </section>

      <section className="case-study-section py-7 md:py-10">
        <div className="mx-auto w-full max-w-[88rem] px-6">
          <FinalProofPanel
            proves={content.proves}
            repositoryUrl={content.repositoryUrl}
          />
        </div>
      </section>

      <section className="border-t border-white/10 py-8 md:py-10">
        <div className="mx-auto w-full max-w-[88rem] px-6">
          <p className="font-mono-label text-accent">More case studies</p>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
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
        </div>
      </section>
    </div>
  );
}

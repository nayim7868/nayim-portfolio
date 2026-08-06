import Link from "next/link";
import { Fragment } from "react";
import type { ProjectArtifact } from "@/config/portfolio";
import { FlowStep } from "@/components/home/FlowStep";
import { PipelineFlowSteps } from "@/components/home/PipelineFlowSteps";

type FeaturedSystemPanelProps = {
  artifact: ProjectArtifact;
};

export function FeaturedSystemPanel({ artifact }: FeaturedSystemPanelProps) {
  const flow = artifact.heroFlow;

  return (
    <Link
      href={artifact.href}
      className="accent-cyan group relative block w-full transition duration-200"
    >
      <div className="panel-surface relative overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-cyan-950/15 transition group-hover:border-cyan-300/30">
        <div className="relative p-3.5">
          <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-2.5">
            <div className="min-w-0">
              <p className="font-mono-label text-accent">Proof artifact</p>
              <h2 className="mt-1 text-lg font-semibold leading-tight text-white">
                {artifact.title}
              </h2>
              <p className="mt-1 text-sm leading-5 text-zinc-400">
                {artifact.subtitle}
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-cyan-300/30 bg-cyan-300/[0.08] px-2.5 py-1 font-mono text-[10px] font-medium text-cyan-100">
              {artifact.badge}
            </span>
          </div>

          {flow ? (
            <>
              <p className="mt-2.5 font-mono-label text-zinc-500">
                Pipeline flow
              </p>
              <div className="pipeline-flow-zone mt-2 rounded-lg border border-white/[0.06] bg-white/[0.015] p-2 lg:p-2.5">
                <PipelineFlowSteps steps={flow} />
                <div className="flex flex-col items-stretch gap-1.5 lg:hidden">
                  {flow.map((step, index) => (
                    <Fragment key={step.code}>
                      <FlowStep step={step} />
                      {index < flow.length - 1 ? (
                        <span
                          className="shrink-0 self-center font-mono text-xs text-cyan-300/50"
                          aria-hidden
                        >
                          ↓
                        </span>
                      ) : null}
                    </Fragment>
                  ))}
                </div>
              </div>
            </>
          ) : null}

          <div className="mt-3 rounded-lg border border-cyan-300/25 bg-cyan-300/[0.06] p-3">
            <p className="font-mono-label text-accent-bright">Operational decision</p>
            <p className="mt-2 text-sm font-semibold leading-snug text-white">
              {artifact.judgement.title}
            </p>
            <p className="mt-1.5 text-sm leading-5 text-zinc-300">
              {artifact.judgement.body}
            </p>
            {artifact.heroExample ? (
              <p className="mt-2 font-mono text-xs text-zinc-400">
                {artifact.heroExample.scenario} →{" "}
                <span className="text-cyan-200">{artifact.heroExample.mode}</span>
              </p>
            ) : null}
          </div>

          <p className="mt-2.5 text-sm font-medium text-cyan-200/80 transition group-hover:text-cyan-100">
            Open case study →
          </p>
        </div>
      </div>
    </Link>
  );
}

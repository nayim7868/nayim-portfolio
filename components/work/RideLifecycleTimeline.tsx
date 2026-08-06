import type { CaseStudyContent } from "@/config/case-studies";

type RideLifecycleTimelineProps = {
  lifecycle: CaseStudyContent["lifecycle"];
};

export function RideLifecycleTimeline({ lifecycle }: RideLifecycleTimelineProps) {
  return (
    <section className="ride-lifecycle-section py-7 md:py-9">
      <div className="mx-auto w-full max-w-[88rem] px-6">
        <p className="font-mono-label text-accent">One ride through the system</p>
        <p className="mt-2 max-w-2xl text-sm leading-5 text-zinc-400">
          {lifecycle.intro}
        </p>

        <div className="ride-flow-rail mt-5" aria-hidden>
          {lifecycle.steps.map((step, index) => (
            <div key={step.step} className="ride-flow-rail-segment">
              <span className="ride-flow-rail-node">{step.title}</span>
              {index < lifecycle.steps.length - 1 ? (
                <span className="ride-flow-rail-arrow">→</span>
              ) : null}
            </div>
          ))}
        </div>

        <ol className="ride-lifecycle-timeline mt-5">
          {lifecycle.steps.map((step, index) => (
            <li key={step.step} className="ride-lifecycle-step">
              <div className="ride-lifecycle-marker" aria-hidden>
                <span className="ride-lifecycle-number">{step.step}</span>
                {index < lifecycle.steps.length - 1 ? (
                  <span className="ride-lifecycle-connector" />
                ) : null}
              </div>

              <div className="ride-lifecycle-card">
                <h3 className="ride-lifecycle-title">{step.title}</h3>
                <div className="ride-lifecycle-lines">
                  {step.lines.map((line) => (
                    <p
                      key={line}
                      className={
                        line.startsWith("POST") || line.startsWith("GET")
                          ? "ride-lifecycle-code"
                          : "ride-lifecycle-line"
                      }
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

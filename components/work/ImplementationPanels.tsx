import type { CaseStudyContent } from "@/config/case-studies";

type ImplementationPanelsProps = {
  implementation: CaseStudyContent["implementation"];
};

export function ImplementationPanels({
  implementation,
}: ImplementationPanelsProps) {
  return (
    <div className="implementation-walkthrough">
      <p className="text-sm leading-6 text-zinc-300 md:text-base md:leading-7">
        {implementation.body}
      </p>

      <div className="implementation-panels mt-5">
        <div className="implementation-panel implementation-panel--api">
          <p className="font-mono-label text-zinc-500">API flow</p>
          <ul className="mt-3 space-y-1">
            {implementation.endpoints.map((endpoint) => (
              <li key={endpoint} className="font-mono text-xs text-emerald-300/85">
                {endpoint}
              </li>
            ))}
          </ul>
        </div>

        <div className="implementation-panel">
          <p className="font-mono-label text-zinc-500">State machine</p>
          <p className="mt-2 font-mono text-xs leading-5 text-zinc-300">
            {implementation.stateMachine}
          </p>
        </div>

        <div className="implementation-panel">
          <p className="font-mono-label text-zinc-500">Invariants</p>
          <ul className="mt-2 space-y-1.5">
            {implementation.invariants.map((item) => (
              <li key={item} className="signal-bar pl-3 text-sm leading-5 text-zinc-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

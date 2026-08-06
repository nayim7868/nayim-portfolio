import type { CaseStudyContent } from "@/config/case-studies";

type PilotBoundaryProps = {
  pilotBoundary: CaseStudyContent["pilotBoundary"];
};

export function PilotBoundary({ pilotBoundary }: PilotBoundaryProps) {
  return (
    <div className="pilot-boundary">
      <p className="text-sm leading-6 text-zinc-300 md:text-base md:leading-7">
        {pilotBoundary.intro}
      </p>
      <p className="signal-bar mt-4 pl-3 text-sm leading-6 text-zinc-400">
        {pilotBoundary.strength}
      </p>

      <div className="pilot-boundary-grid mt-5">
        {pilotBoundary.cards.map((card) => (
          <div key={card.title} className="pilot-boundary-card">
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-zinc-400">
              {card.title}
            </p>
            <p className="mt-2 text-sm leading-5 text-zinc-300">{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

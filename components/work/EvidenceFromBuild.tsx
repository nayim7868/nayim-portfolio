import type { CaseStudyContent } from "@/config/case-studies";

type EvidenceFromBuildProps = {
  rows: CaseStudyContent["evidenceMatrix"];
};

export function EvidenceFromBuild({ rows }: EvidenceFromBuildProps) {
  return (
    <div className="evidence-from-build">
      <div className="evidence-from-build-header" aria-hidden>
        <span>Area</span>
        <span>Evidence</span>
        <span>What it proves</span>
      </div>
      {rows.map((row) => (
        <div key={row.area} className="evidence-from-build-row">
          <p className="evidence-from-build-area">{row.area}</p>
          <p className="evidence-from-build-evidence">{row.evidence}</p>
          <p className="evidence-from-build-proves">{row.proves}</p>
        </div>
      ))}
    </div>
  );
}

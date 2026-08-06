import type { CaseStudyContent } from "@/config/case-studies";
import { cn } from "@/lib/utils";

type DecisionRecordsProps = {
  decisions: CaseStudyContent["decisions"];
};

function DecisionRecord({
  item,
  primary,
}: {
  item: CaseStudyContent["decisions"][number];
  primary: boolean;
}) {
  return (
    <article
      className={cn(
        "decision-record",
        primary ? "decision-record--primary" : "decision-record--secondary",
      )}
    >
      <p className="decision-record-title">{item.decision}</p>
      <dl className="decision-record-fields">
        <div>
          <dt>Why</dt>
          <dd>{item.why}</dd>
        </div>
        <div>
          <dt>Trade-off</dt>
          <dd>{item.tradeoff}</dd>
        </div>
      </dl>
    </article>
  );
}

export function DecisionRecords({ decisions }: DecisionRecordsProps) {
  const primary = decisions.filter((d) => d.tier === "primary");
  const secondary = decisions.filter((d) => d.tier === "secondary");

  return (
    <div className="space-y-6">
      <div className="decision-record-grid decision-record-grid--primary">
        {primary.map((item) => (
          <DecisionRecord key={item.decision} item={item} primary />
        ))}
      </div>
      <div className="decision-record-grid decision-record-grid--secondary">
        {secondary.map((item) => (
          <DecisionRecord key={item.decision} item={item} primary={false} />
        ))}
      </div>
    </div>
  );
}

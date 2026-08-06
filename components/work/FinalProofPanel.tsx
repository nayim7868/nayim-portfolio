import Link from "next/link";
import type { CaseStudyContent } from "@/config/case-studies";

type FinalProofPanelProps = {
  proves: CaseStudyContent["proves"];
  repositoryUrl?: string;
};

export function FinalProofPanel({ proves, repositoryUrl }: FinalProofPanelProps) {
  return (
    <div className="final-proof-panel">
      <p className="font-mono-label text-accent-bright">{proves.title}</p>
      <p className="mt-3 text-sm leading-6 text-zinc-200 md:text-base md:leading-7">
        {proves.body}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/work" className="btn-primary">
          Back to all work
        </Link>
        {repositoryUrl ? (
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            View GitHub repository
          </a>
        ) : null}
      </div>
    </div>
  );
}

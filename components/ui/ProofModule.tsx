import type { AccentKey } from "@/config/portfolio";
import { cn } from "@/lib/utils";

type ProofModuleProps = {
  title: string;
  line1: string;
  line2: string;
  accent: AccentKey;
};

export function ProofModule({ title, line1, line2, accent }: ProofModuleProps) {
  return (
    <article
      className={cn(
        "accent-" + accent,
        "relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-4 pl-5 transition duration-300 hover:border-accent hover:bg-white/[0.04]",
      )}
    >
      <div
        className="absolute bottom-3 left-0 top-3 w-0.5 rounded-full bg-accent"
        aria-hidden
      />
      <p className="font-mono-label text-accent">{title}</p>
      <p className="mt-2 text-base font-medium text-white">{line1}</p>
      <p className="mt-1.5 text-sm leading-5 text-zinc-400">{line2}</p>
    </article>
  );
}

import type { AccentKey } from "@/config/portfolio";
import { cn } from "@/lib/utils";

type WorkflowDiagramProps = {
  steps: string[];
  highlightStep?: number;
  accent?: AccentKey;
};

export function WorkflowDiagram({
  steps,
  highlightStep,
  accent = "cyan",
}: WorkflowDiagramProps) {
  return (
    <div className={cn("accent-" + accent, "flex flex-wrap items-center gap-2")}>
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <span
            className={cn(
              "font-mono rounded-md border px-2.5 py-1 text-xs font-medium",
              index === highlightStep
                ? "border-accent-strong bg-accent text-accent-bright"
                : "border-white/18 bg-white/[0.05] text-zinc-300",
            )}
          >
            {step}
          </span>
          {index < steps.length - 1 && (
            <span className="font-mono text-xs text-accent/80">→</span>
          )}
        </div>
      ))}
    </div>
  );
}

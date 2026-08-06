import type { ComponentProps } from "react";
import type { HeroFlowStep } from "@/config/portfolio";
import { cn } from "@/lib/utils";

type FlowStepProps = ComponentProps<"div"> & {
  step: HeroFlowStep;
};

export function FlowStep({ step, className, ...props }: FlowStepProps) {
  return (
    <div
      {...props}
      className={cn(
        "min-w-0 flex-1 rounded-lg border border-white/10 bg-[#080b12]/80 p-2.5",
        className,
      )}
    >
      <div className="flex items-center gap-1.5">
        <span className="font-mono text-[10px] font-semibold text-zinc-500">
          {step.code}
        </span>
        <p className="text-xs font-semibold leading-tight text-white">
          {step.title}
        </p>
      </div>
      <p className="mt-0.5 text-[11px] leading-4 text-zinc-500">
        {step.description}
      </p>
      <div className="mt-1.5 flex flex-wrap gap-1">
        {step.items.slice(0, 3).map((item) => (
          <span
            key={item}
            className="font-mono rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 text-[10px] leading-tight text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

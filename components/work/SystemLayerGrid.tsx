import type { CaseStudyContent } from "@/config/case-studies";
import { cn } from "@/lib/utils";

type SystemLayerGridProps = {
  layers: CaseStudyContent["systemLayers"];
};

export function SystemLayerGrid({ layers }: SystemLayerGridProps) {
  return (
    <div className="system-layer-grid">
      {layers.map((layer) => (
        <div
          key={layer.name}
          className={cn(
            "system-layer-card",
            layer.highlighted && "system-layer-card--highlighted",
          )}
        >
          <p
            className={cn(
              "font-mono-label",
              layer.highlighted ? "text-accent-bright" : "text-zinc-500",
            )}
          >
            {layer.name}
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {layer.items.map((item) => (
              <span key={item} className="system-layer-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

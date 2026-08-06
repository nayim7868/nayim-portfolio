"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { HeroFlowStep } from "@/config/portfolio";
import { FlowStep } from "@/components/home/FlowStep";

type BoxRect = {
  x: number;
  y: number;
  width: number;
  height: number;
  radius: number;
};

type ContainerSize = {
  width: number;
  height: number;
};

type PipelineFlowStepsProps = {
  steps: HeroFlowStep[];
};

function readRadius(step: HTMLElement) {
  const style = getComputedStyle(step);
  const radius = parseFloat(style.borderTopLeftRadius);
  return Number.isFinite(radius) ? radius : 8;
}

export function PipelineFlowSteps({ steps }: PipelineFlowStepsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [boxes, setBoxes] = useState<BoxRect[]>([]);
  const [containerSize, setContainerSize] = useState<ContainerSize | null>(null);
  const animationId = useId().replace(/:/g, "");
  const maskId = `pipeline-mask-${animationId}`;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const stepNodes = Array.from(
        container.querySelectorAll<HTMLElement>("[data-pipeline-step]"),
      );
      const bounds = container.getBoundingClientRect();

      if (stepNodes.length === 0 || bounds.width === 0 || bounds.height === 0) {
        return;
      }

      setContainerSize({ width: bounds.width, height: bounds.height });
      setBoxes(
        stepNodes.map((step) => {
          const rect = step.getBoundingClientRect();
          return {
            x: rect.left - bounds.left,
            y: rect.top - bounds.top,
            width: rect.width,
            height: rect.height,
            radius: readRadius(step),
          };
        }),
      );
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(container);
    container.querySelectorAll("[data-pipeline-step]").forEach((node) => {
      observer.observe(node);
    });

    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [steps.length]);

  const animationStyles = (() => {
    if (boxes.length !== steps.length || !containerSize) return null;

    const start = boxes[0].x;
    const end = boxes[boxes.length - 1].x + boxes[boxes.length - 1].width;
    if (end <= start) return null;

    return {
      start: start.toFixed(2),
      end: end.toFixed(2),
    };
  })();

  const maskReady = boxes.length === steps.length && containerSize !== null;

  return (
    <div
      ref={containerRef}
      className="pipeline-flow-steps relative hidden items-stretch gap-1.5 lg:flex"
    >
      {maskReady ? (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden
          viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
          preserveAspectRatio="none"
        >
          <defs>
            <mask
              id={maskId}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width={containerSize.width}
              height={containerSize.height}
            >
              <rect
                width={containerSize.width}
                height={containerSize.height}
                fill="black"
              />
              {boxes.map((box, index) => (
                <rect
                  key={index}
                  x={box.x}
                  y={box.y}
                  width={box.width}
                  height={box.height}
                  rx={box.radius}
                  ry={box.radius}
                  fill="white"
                />
              ))}
            </mask>
          </defs>
        </svg>
      ) : null}

      {animationStyles ? (
        <style>{`
          @keyframes pipeline-line-${animationId} {
            0% { left: ${animationStyles.start}px; }
            100% { left: ${animationStyles.end}px; }
          }
          @media (prefers-reduced-motion: no-preference) and (min-width: 1024px) {
            .pipeline-flow-line-${animationId}::after {
              opacity: 0.36;
              animation: pipeline-line-${animationId} 12s linear infinite;
            }
          }
        `}</style>
      ) : null}

      <div
        className={`pipeline-flow-line pipeline-flow-line-${animationId} pointer-events-none absolute inset-0 z-[2]`}
        style={
          maskReady
            ? {
                WebkitMaskImage: `url(#${maskId})`,
                maskImage: `url(#${maskId})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
              }
            : undefined
        }
        aria-hidden
      />

      {steps.map((step) => (
        <FlowStep key={step.code} step={step} data-pipeline-step />
      ))}
    </div>
  );
}

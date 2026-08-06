import type { CaseStudyContent } from "@/config/case-studies";

type NextIterationRoadmapProps = {
  items: CaseStudyContent["nextIteration"];
};

export function NextIterationRoadmap({ items }: NextIterationRoadmapProps) {
  return (
    <ol className="iteration-roadmap">
      {items.map((item, index) => (
        <li key={item.title} className="iteration-roadmap-item">
          <span className="iteration-roadmap-index">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="iteration-roadmap-title">{item.title}</p>
            <p className="iteration-roadmap-body">{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { featuredProjects, getHeroArtifact, proofItems } from "@/config/portfolio";
import { FeaturedSystemPanel } from "@/components/home/FeaturedSystemPanel";
import { WorkflowDiagram } from "@/components/home/WorkflowDiagram";
import { ProofModule } from "@/components/ui/ProofModule";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const heroArtifact = getHeroArtifact();

function HomeSectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div>
      <p className="accent-cyan font-mono-label text-accent">{label}</p>
      <h2 className="mt-1.5 text-xl font-semibold tracking-tight text-white md:text-2xl">
        {title}
      </h2>
    </div>
  );
}

function HomeSectionDivider({
  lead,
  rest,
  href,
}: {
  lead: string;
  rest: string;
  href?: string;
}) {
  const className = "accent-cyan group flex items-center gap-3 py-0.5";
  const content = (
    <>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent transition group-hover:via-[var(--accent-border)]" />
      <p className="text-sm text-zinc-400">
        <span className="font-medium text-accent">{lead}</span> {rest}
      </p>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent transition group-hover:via-[var(--accent-border)]" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

export function HomeContent() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <>
      <section>
        <Container className="max-w-[88rem] pb-10 pt-6 md:pb-12 md:pt-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-center lg:gap-10">
            <div className="hero-left min-w-0 lg:pr-6">
              <h1 className="hero-title text-[2.35rem] font-semibold tracking-tight md:text-5xl lg:text-[2.65rem] xl:text-[2.85rem]">
                Systems under
                <br />
                pressure.
              </h1>

              <p className="hero-body mt-5 text-base">
                I turn messy workflows, signals, and deployments into testable
                systems with explicit state, guarded decisions, and operational
                evidence.
              </p>

              <p className="hero-meta mt-5 text-sm">
                BSc Software Engineering · Sail Databank intern · commercial
                systems operator
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <Link href="/work" className="btn-primary">
                  View Work
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact
                </Link>
              </div>
            </div>

            <div className="relative min-w-0">
              <FeaturedSystemPanel artifact={heroArtifact} />
            </div>
          </div>

          <div id="featured-work" className="scroll-mt-20 mt-8 lg:mt-10">
            <HomeSectionDivider
              href="#featured-work-grid"
              lead="Four builds."
              rest="Same systems lens — different pressures."
            />

            <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
              <HomeSectionHeading
                label="Selected systems"
                title="Work that turns uncertainty into structure."
              />
              <p className="text-sm text-zinc-500">Click a case to explore →</p>
            </div>

            <div id="featured-work-grid" className="scroll-mt-24 mt-5">
              <div className="grid gap-4 lg:grid-cols-12">
                {featuredProjects.map((project) => {
                  const isHovered = hoveredId === project.id;

                  return (
                    <div key={project.id} className={cn("h-full", project.span)}>
                      <Link
                        href={project.href}
                        onPointerEnter={() => setHoveredId(project.id)}
                        onPointerLeave={() => setHoveredId(null)}
                        className={cn(
                          "accent-" + project.accent,
                          "group flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-white/[0.05] to-white/[0.02] transition-all duration-200",
                          isHovered
                            ? "border-[var(--accent-border)] shadow-[0_8px_28px_-18px_var(--accent-glow)]"
                            : "border-white/10 hover:border-[var(--accent-border)]",
                        )}
                      >
                        <div
                          className={cn(
                            "border-b border-white/10 px-4 py-3 transition-colors duration-200",
                            isHovered
                              ? "bg-accent-soft"
                              : "bg-[var(--surface-panel)] group-hover:bg-white/[0.03]",
                          )}
                        >
                          <WorkflowDiagram
                            steps={project.motifSteps}
                            highlightStep={project.highlightStep}
                            accent={project.accent}
                          />
                        </div>

                        <div className="flex flex-1 flex-col p-4">
                          <p
                            className={cn(
                              "font-mono-label transition-colors duration-200",
                              isHovered
                                ? "text-accent"
                                : "text-zinc-400 group-hover:text-accent",
                            )}
                          >
                            {project.label}
                          </p>
                          <h3 className="mt-1.5 text-base font-semibold leading-snug text-white md:text-lg">
                            {project.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-5 text-zinc-300">
                            {project.hook}
                          </p>

                          <p
                            className={cn(
                              "signal-bar mt-3 pl-3 text-sm leading-5 text-zinc-300 transition-colors duration-200",
                              isHovered && "text-zinc-200",
                            )}
                          >
                            {project.signal}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-mono rounded-full border border-white/15 bg-white/[0.03] px-2 py-0.5 text-[11px] text-zinc-400 transition-colors duration-200 group-hover:border-white/20 group-hover:text-zinc-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <p
                            className={cn(
                              "mt-auto pt-4 text-sm font-medium transition-colors duration-200",
                              isHovered
                                ? "text-accent"
                                : "text-zinc-400 group-hover:text-accent",
                            )}
                          >
                            View case study →
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="operating-context"
        className="scroll-mt-20 border-b border-white/10 py-12 md:py-14"
      >
        <Container className="max-w-[88rem]">
          <HomeSectionDivider
            lead="Beyond builds."
            rest="Where the work is grounded in practice."
          />
          <div className="mt-5">
            <HomeSectionHeading
              label="Operating context"
              title="Education, industry, and commercial systems behind the work."
            />
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {proofItems.map((item, index) => (
              <ScrollReveal
                key={item.title}
                delay={index * 100}
                className="h-full"
              >
                <ProofModule
                  title={item.title}
                  line1={item.line1}
                  line2={item.line2}
                  accent={item.accent}
                />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="case-studies" className="scroll-mt-20 py-12 md:py-14">
        <Container className="max-w-[88rem]">
          <ScrollReveal>
            <HomeSectionDivider
              href="/work"
              lead="Full depth."
              rest="Open a case study for the full decision trail."
            />
            <div className="mt-5">
              <HomeSectionHeading
                label="Case studies"
                title="Explore each build — problem, system shape, and what held."
              />
            </div>
            <div className="panel-surface mt-5 p-6 md:p-8">
              <p className="max-w-3xl text-base leading-7 text-text-secondary">
                Every case study covers the problem, actors and state, technical
                decisions, implementation, limitations, and next iteration.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/work" className="btn-primary">
                  View Work
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const systemLens = [
  "Actors",
  "Actions",
  "State",
  "Data Flow",
  "Failure Points",
  "Boundaries",
  "MVP",
];

export default function HomePage() {
  return (
    <>
      <Section className="min-h-[80vh] border-b border-white/10">
        <Container>
          <div className="max-w-4xl pt-16">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
              Nayim Salam
            </p>

            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Software engineer with an architecture-first approach.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              I turn unclear workflows into clear software systems by modelling
              the structure underneath the problem before building the interface.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#080b12] transition hover:bg-zinc-200"
              >
                Explore Work
                <ArrowRight size={16} />
              </Link>

              <a
                href="#approach"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                How I Model Systems
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="approach" className="border-b border-white/10">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
                How I Model Systems
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                I do not start with screens. I start with the system.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-zinc-300">
              <p>
                Before choosing technologies or building features, I look for the
                structure underneath the idea: who uses the system, what actions
                they take, what changes state, where information moves, what can
                fail, and what the smallest useful version should prove.
              </p>

              <p>
                This is the thinking model I want my work to demonstrate: not
                just finished interfaces, but the architecture, trade-offs, and
                reasoning behind the software.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-7">
            {systemLens.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-xs text-zinc-500">0{index + 1}</p>
                <p className="mt-3 font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-b border-white/10">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
              Systems in Practice
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Selected work will show this thinking applied.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Each project will be presented as a system: problem, actors,
              state, data flow, architecture, trade-offs, and execution.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Volunteer Ambulance Coordination Platform",
              "Enquiry Widget + Lead Triage Demo",
              "Azure Platform Starter",
            ].map((title) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm text-cyan-300">System preview</p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  Case study coming soon.
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/work"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan-300"
          >
            View all work
            <ArrowRight size={16} />
          </Link>
        </Container>
      </Section>
    </>
  );
}

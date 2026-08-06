export type AccentKey = "cyan" | "amber" | "violet" | "sky";

export type ArtifactLayer = {
  name: string;
  items: string[];
  highlighted?: boolean;
  code?: string;
  caption?: string;
};

export type HeroFlowStep = {
  code: string;
  title: string;
  description: string;
  items: string[];
  highlighted?: boolean;
};

export type ProjectArtifact = {
  id: string;
  href: string;
  label: string;
  title: string;
  subtitle: string;
  badge: string;
  hook: string;
  signal: string;
  motifSteps: string[];
  highlightStep?: number;
  tags: string[];
  span: string;
  accent: AccentKey;
  featured?: boolean;
  layers: ArtifactLayer[];
  heroLayers?: ArtifactLayer[];
  heroFlow?: HeroFlowStep[];
  heroMetrics?: string[];
  heroExample?: {
    scenario: string;
    mode: string;
  };
  judgement: {
    title: string;
    body: string;
  };
};

export const featuredProjects: ProjectArtifact[] = [
  {
    id: "volunteer-ambulance-platform",
    href: "/work/volunteer-ambulance-platform",
    label: "Dissertation system",
    title: "Volunteer Ambulance Coordination Platform",
    subtitle:
      "First to Help — low-acuity transport coordination under real-world constraints.",
    badge: "Dissertation · First to Help",
    hook: "Low-acuity transport requests need clear ownership, controlled state, and an audit trail.",
    motifSteps: ["Request", "Assignment", "Status", "Closure", "Audit"],
    highlightStep: 1,
    signal:
      "Stateful coordination: atomic ride acceptance, finite state transitions, notifications, and audit records.",
    tags: [
      "React Native",
      "Express API",
      "SQLite",
      "State Machine",
      "WCAG",
      "API Tests",
      "Audit Trail",
    ],
    span: "lg:col-span-7",
    accent: "amber",
    featured: true,
    layers: [
      {
        name: "Request layer",
        items: [
          "patient ride request",
          "pickup and destination",
          "mobility note",
          "pending queue",
        ],
      },
      {
        name: "Assignment layer",
        items: [
          "volunteer visibility",
          "atomic accept",
          "single owner",
          "conflict prevention",
        ],
        highlighted: true,
      },
      {
        name: "State layer",
        items: [
          "Requested",
          "Accepted",
          "EnRoute",
          "PickedUp",
          "Completed",
          "Cancelled",
        ],
      },
      {
        name: "Communication layer",
        items: [
          "Expo push token",
          "request/accept/complete notifications",
          "notification history",
          "minimal payloads",
        ],
      },
      {
        name: "Navigation layer",
        items: [
          "in-app route preview",
          "Open in Maps handoff",
          "no in-app turn-by-turn navigation",
        ],
      },
      {
        name: "Governance layer",
        items: [
          "audit records",
          "role-aware reads",
          "privacy minimisation",
          "accessibility checks",
          "test evidence",
        ],
      },
    ],
    judgement: {
      title: "Coordination fails when ownership is ambiguous.",
      body: "The system keeps each ride request legible by separating request creation, volunteer assignment, state transitions, notifications, and audit records.",
    },
  },
  {
    id: "edge-ai-seat-state-monitor",
    href: "/work/edge-ai-seat-state-monitor",
    label: "Applied AI prototype",
    title: "Edge-AI Seat State Monitor",
    subtitle: "Noisy seat signals → classified state → guarded runtime mode.",
    badge: "Applied AI prototype",
    heroFlow: [
      {
        code: "01",
        title: "Signals",
        description: "Seat & cabin telemetry",
        items: ["pressure / load", "seat accel", "cabin ref", "validity"],
      },
      {
        code: "02",
        title: "Classifier",
        description: "ML state hypothesis",
        items: ["EMPTY", "OCCUPIED", "VIBRATION", "SENSOR FAULT"],
      },
      {
        code: "03",
        title: "Guard logic",
        description: "Deterministic bounds on model output",
        items: ["τ < 0.65 → hold", "fault → fallback"],
      },
      {
        code: "04",
        title: "Bounded mode",
        description: "Operational output — not direct HW control",
        items: ["monitoring", "diagnostic", "no-action"],
      },
    ],
    heroExample: {
      scenario: "Low-confidence inference",
      mode: "NO_ACTION_UNCERTAIN_LOW_CONFIDENCE",
    },
    hook: "Uncertainty handled before it becomes a decision.",
    motifSteps: ["Signals", "Classifier", "Guard", "Mode"],
    highlightStep: 2,
    signal:
      "Seat movement is ambiguous without cabin context — the model classifies, logic decides the mode.",
    tags: ["Python", "RandomForest", "Synthetic Data", "Guard Logic"],
    span: "lg:col-span-5",
    accent: "cyan",
    layers: [
      {
        name: "Feature inputs",
        items: [
          "pressure / load",
          "seat acceleration",
          "aircraft / cabin ref",
          "sensor validity",
        ],
      },
      {
        name: "ML classifier",
        items: [
          "EMPTY",
          "OCCUPIED_STABLE",
          "OCCUPIED_MOVING",
          "VIBRATION_EVENT",
          "SENSOR_FAULT",
        ],
      },
      {
        name: "Guard logic",
        items: [
          "confidence threshold (0.65)",
          "pressure occupancy check",
          "sensor-fault routing",
        ],
        highlighted: true,
      },
      {
        name: "System modes",
        items: [
          "power saving",
          "comfort monitoring",
          "diagnostic monitoring",
          "fallback / no-action",
        ],
      },
    ],
    judgement: {
      title: "Low confidence does not trigger action.",
      body: "It routes to fallback or no-action mode. The classifier informs — guard logic decides what the runtime may emit.",
    },
  },
  {
    id: "enquiry-widget",
    href: "/work/enquiry-widget",
    label: "Operational workflow",
    title: "Enquiry Widget + Lead Triage Demo",
    subtitle: "Owned queue items with SLA pressure and audit evidence.",
    badge: "Operational workflow",
    hook: "Every enquiry becomes an owned queue item with controlled status changes.",
    motifSteps: ["Submit", "Queue", "SLA", "Status", "Audit"],
    highlightStep: 2,
    signal:
      "Triage is a state machine — ownership, SLA clocks, and audit trail over raw capture.",
    tags: ["Next.js", "PostgreSQL", "RBAC", "SLA", "E2E Tests"],
    span: "lg:col-span-5",
    accent: "violet",
    layers: [
      {
        name: "Capture layer",
        items: ["form submit", "source tag", "validation", "dedupe"],
      },
      {
        name: "Queue layer",
        items: ["owner assign", "priority", "SLA clock", "escalation"],
        highlighted: true,
      },
      {
        name: "Status layer",
        items: ["new", "in progress", "waiting", "closed"],
      },
      {
        name: "Audit layer",
        items: ["change log", "actor", "timestamp", "reason"],
      },
    ],
    judgement: {
      title: "A lead without an owner is just noise.",
      body: "Triage is a state machine — not a spreadsheet export.",
    },
  },
  {
    id: "azure-platform-starter",
    href: "/work/azure-platform-starter",
    label: "Platform foundation",
    title: "Azure Platform Starter",
    subtitle: "Deployment repeatability and production observability.",
    badge: "Infrastructure proof",
    hook: "Local success is not production readiness — telemetry and IaC are part of the product.",
    motifSteps: ["API", "IaC", "CI/CD", "Telemetry"],
    highlightStep: 3,
    signal:
      "Repeatable deploy paths, environment boundaries, and failure visibility under operational pressure.",
    tags: ["Azure", "FastAPI", "Bicep", "CI/CD", "Telemetry"],
    span: "lg:col-span-7",
    accent: "sky",
    layers: [
      {
        name: "API layer",
        items: ["FastAPI", "health check", "config", "secrets"],
      },
      {
        name: "IaC layer",
        items: ["Bicep modules", "env params", "networking", "RBAC"],
      },
      {
        name: "CI/CD layer",
        items: ["build", "test gate", "deploy", "rollback"],
      },
      {
        name: "Telemetry layer",
        items: ["logs", "metrics", "alerts", "trace IDs"],
        highlighted: true,
      },
    ],
    judgement: {
      title: "If you can't observe it in prod, you didn't ship it.",
      body: "Deployment repeatability and failure visibility are product features.",
    },
  },
];

export const defaultArtifactId = "edge-ai-seat-state-monitor";

export function getHeroArtifact() {
  return (
    featuredProjects.find((project) => project.id === defaultArtifactId) ??
    featuredProjects[0]
  );
}

export function getProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.id === slug);
}

export function getProjectSlugs() {
  return featuredProjects.map((project) => project.id);
}

export const proofItems = [
  {
    title: "Education",
    line1: "BSc Software Engineering",
    line2: "Swansea University · 2022–2026",
    accent: "cyan" as AccentKey,
  },
  {
    title: "Industry exposure",
    line1: "Software Developer Intern",
    line2: "Sail Databank · Python, testing, documentation",
    accent: "sky" as AccentKey,
  },
  {
    title: "Commercial systems",
    line1: "£50k+ e-commerce venture",
    line2: "Supplier, inventory, logistics, quality, advertising",
    accent: "amber" as AccentKey,
  },
];

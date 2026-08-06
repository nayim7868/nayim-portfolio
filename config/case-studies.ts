import type { ArtifactLayer } from "@/config/portfolio";

export type EvidenceCard = {
  title: string;
  metric: string;
  detail: string;
};

export type TechnicalDecision = {
  decision: string;
  why: string;
  tradeoff: string;
  tier: "primary" | "secondary";
};

export type EvidenceRow = {
  area: string;
  evidence: string;
  proves: string;
};

export type LifecycleStep = {
  step: string;
  title: string;
  lines: string[];
};

export type BeforeAfterPanel = {
  title: string;
  before: string[];
  after: string[];
};

export type RideLifecycleArtifact = {
  requestId: string;
  statusFlow: string;
  ownerFlow: string;
  events: string[];
  runtimeRule: string;
};

export type PilotBoundaryCard = {
  title: string;
  body: string;
};

export type NextIterationItem = {
  title: string;
  body: string;
};

export type CaseStudyContent = {
  intro: string;
  heroJudgement: {
    title: string;
    body: string;
  };
  rideArtifact: RideLifecycleArtifact;
  beforeAfter: BeforeAfterPanel;
  evidenceStrip: EvidenceCard[];
  lifecycle: {
    intro: string;
    steps: LifecycleStep[];
  };
  systemLayers: ArtifactLayer[];
  decisions: TechnicalDecision[];
  implementation: {
    body: string;
    endpoints: string[];
    stateMachine: string;
    invariants: string[];
  };
  evidenceMatrix: EvidenceRow[];
  pilotBoundary: {
    intro: string;
    strength: string;
    cards: PilotBoundaryCard[];
  };
  nextIteration: NextIterationItem[];
  proves: {
    title: string;
    body: string;
  };
  repositoryUrl?: string;
};

const vasCaseStudy: CaseStudyContent = {
  intro:
    "Low-acuity transport requests need clear ownership, controlled state, and an audit trail.",
  heroJudgement: {
    title: "Coordination fails when ownership is ambiguous.",
    body: "Each ride request stays legible through request creation, single-owner assignment, bounded state transitions, notifications, and audit records.",
  },
  rideArtifact: {
    requestId: "RIDE REQUEST #014",
    statusFlow: "Pending → Accepted → EnRoute → PickedUp → Completed",
    ownerFlow: "none → volunteer_07",
    events: [
      "created_at",
      "accepted_at",
      "completed_at",
      "notification_sent",
      "audit_recorded",
    ],
    runtimeRule: "Second accept attempt → rejected",
  },
  evidenceStrip: [
    {
      title: "State machine",
      metric: "27 unit tests",
      detail: "Invalid transitions blocked.",
    },
    {
      title: "API lifecycle",
      metric: "22 Supertest cases",
      detail: "Ride lifecycle and double-accept guarded.",
    },
    {
      title: "Performance",
      metric: "p95 ≤ 6s target met",
      detail: "Cold-start measured on emulator.",
    },
    {
      title: "Accessibility",
      metric: "WCAG-focused checks",
      detail: "Contrast, targets, focus visibility.",
    },
  ],
  beforeAfter: {
    title: "From ambiguous coordination to controlled workflow",
    before: [
      "Who owns this request?",
      "Can two volunteers accept it?",
      "What state is the ride in?",
      "Was anyone notified?",
      "Can the change be reviewed?",
    ],
    after: [
      "Single owner",
      "Guarded accept",
      "Finite ride states",
      "Stored notifications",
      "Audit records",
    ],
  },
  lifecycle: {
    intro:
      "One request enters. One volunteer owns it. Every state change is bounded. Every important event leaves evidence.",
    steps: [
      {
        step: "01",
        title: "Request",
        lines: ["POST /api/ride", "Pickup, destination, reason, mobility note."],
      },
      {
        step: "02",
        title: "Assignment",
        lines: ["Guarded accept.", "One volunteer becomes the owner."],
      },
      {
        step: "03",
        title: "State",
        lines: [
          "Finite transitions.",
          "Terminal states block outgoing moves.",
        ],
      },
      {
        step: "04",
        title: "Communication",
        lines: [
          "Notifications are sent and stored.",
          "Payloads stay minimal.",
        ],
      },
      {
        step: "05",
        title: "Evidence",
        lines: [
          "History, timestamps, role-aware reads, and tests make the workflow reviewable.",
        ],
      },
    ],
  },
  systemLayers: [
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
  decisions: [
    {
      decision: "Finite ride state machine",
      why: "Avoid fragile ad-hoc status flags and make invalid transitions explicit.",
      tradeoff:
        "Adds upfront modelling, but makes testing and future policy rules easier.",
      tier: "primary",
    },
    {
      decision: "Atomic accept endpoint",
      why: "Only one volunteer should own a ride request.",
      tradeoff:
        "Keeps the MVP simple with a guarded update instead of complex dispatch logic.",
      tier: "primary",
    },
    {
      decision: "Open in Maps handoff",
      why: "Users already trust native map apps for navigation.",
      tradeoff:
        "Avoids maintaining fragile turn-by-turn navigation, but does not provide full in-app routing.",
      tier: "primary",
    },
    {
      decision: "Expo notifications instead of chat",
      why: "Request, accept, and complete events need lightweight alerts.",
      tradeoff:
        "Observable and simple, but delivery guarantees remain outside the MVP.",
      tier: "secondary",
    },
    {
      decision: "SQLite for MVP",
      why: "Fast development, easy reset, and in-memory test runs.",
      tradeoff:
        "Suitable for dissertation testing, but a pilot would need managed relational storage, migrations, and audit-grade logging.",
      tier: "secondary",
    },
    {
      decision: "Constrained leaderboard",
      why: "Recognise volunteer contribution without turning healthcare-adjacent work into a growth loop.",
      tradeoff:
        "Avoids heavier gamification until governance and safeguarding review.",
      tier: "secondary",
    },
  ],
  implementation: {
    body: "A patient creates a ride request with pickup, destination, reason, and optional mobility note. The server stores it as pending. Volunteers fetch pending rides and one volunteer can accept. Acceptance is guarded so a second accept attempt fails deterministically. The ride then moves through a finite state machine, while notifications and audit records make key changes visible.",
    endpoints: [
      "POST /api/ride",
      "GET /api/rides/pending",
      "POST /api/ride/:id/accept",
      "POST /api/ride/:id/complete",
      "GET /api/notifications/history/:userId",
    ],
    stateMachine:
      "Requested → Accepted → EnRoute → PickedUp → Completed. Cancelled can be reached from active states. Completed and Cancelled are terminal.",
    invariants: [
      "A ride has at most one acceptedBy.",
      "Terminal states have no outgoing transitions.",
      "Invalid transitions are blocked.",
      "Notification and state-change history is append-only.",
      "Role-aware reads limit what patients and volunteers can see.",
    ],
  },
  evidenceMatrix: [
    {
      area: "State machine",
      evidence: "27 Jest tests, 100% coverage.",
      proves:
        "Transitions, invalid moves, self-transitions, and unknown states are handled.",
    },
    {
      area: "API",
      evidence: "22 Supertest cases.",
      proves:
        "Register/login, ride lifecycle, double accept, repeat completion, role-scoped reads, notifications, and leaderboard.",
    },
    {
      area: "Accessibility",
      evidence:
        "Contrast CLI, target-size checks, focus visibility, accessibility screen.",
      proves: "The MVP considered WCAG 2.2 requirements from the start.",
    },
    {
      area: "Performance",
      evidence: "Cold-start p50/p95 measurement.",
      proves:
        "The app was measured against a defined p95 target rather than guessed.",
    },
    {
      area: "Security / governance",
      evidence:
        "Privacy minimisation, role-aware endpoints, STRIDE-style threat model, DPIA framing.",
      proves:
        "The system boundary and pilot risks were considered explicitly.",
    },
  ],
  pilotBoundary: {
    intro:
      "VAS is not a production transport service. It does not include identity proofing, DBS checks, insurance verification, geofencing, continuous GPS tracking, complex eligibility gating, or live operator tooling. Roles are controlled for the MVP, and usability evaluation was limited to lab-style testing and role-play because real patient evaluation would require ethics and governance approval.",
    strength:
      "This is a strength, not a weakness: the MVP keeps the system narrow enough that the claims can be tested and defended.",
    cards: [
      {
        title: "Identity & safeguarding",
        body: "No DBS, insurance, licence, or volunteer verification in the MVP.",
      },
      {
        title: "Location & eligibility",
        body: "No geofencing, continuous GPS, or complex eligibility gating.",
      },
      {
        title: "Governance",
        body: "No real patient evaluation without ethics, DPIA, privacy notice, and partner approval.",
      },
      {
        title: "Infrastructure",
        body: "SQLite is suitable for dissertation testing; a pilot would need managed storage, migrations, retention policy, and audit-grade logs.",
      },
    ],
  },
  nextIteration: [
    {
      title: "Volunteer onboarding and verification",
      body: "Identity checks, DBS where applicable, insurance/licence checks, safeguarding training.",
    },
    {
      title: "Operator oversight view",
      body: "Admin queue, manual intervention, no-show handling, anomaly review.",
    },
    {
      title: "Managed data layer",
      body: "Move from SQLite to managed relational storage with migrations, retention policy, and audit-grade logs.",
    },
    {
      title: "Security hardening",
      body: "Rate limits, structured errors, stronger auth, role administration, abuse monitoring.",
    },
    {
      title: "Accessibility audit",
      body: "External WCAG review, automated checks for labels/focus, wider device testing.",
    },
    {
      title: "Pilot governance",
      body: "DPIA completion, privacy notice, university/partner ethics, retention schedule, monitored pilot metrics.",
    },
  ],
  proves: {
    title: "What this project proves",
    body: "I can take an operationally sensitive workflow and reduce it into actors, state, ownership, boundaries, tests, and evidence. This was not about building a mobile UI first. It was about making a coordination process legible enough to test, audit, and improve.",
  },
};

const caseStudies: Record<string, CaseStudyContent> = {
  "volunteer-ambulance-platform": vasCaseStudy,
};

export function getCaseStudyBySlug(slug: string) {
  return caseStudies[slug];
}

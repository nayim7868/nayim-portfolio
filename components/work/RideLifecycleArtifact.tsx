import type { RideLifecycleArtifact as RideArtifact } from "@/config/case-studies";

type RideLifecycleArtifactProps = {
  artifact: RideArtifact;
};

function ArtifactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="ride-artifact-row">
      <span className="ride-artifact-label">{label}</span>
      <span className="ride-artifact-value">{value}</span>
    </div>
  );
}

export function RideLifecycleArtifact({ artifact }: RideLifecycleArtifactProps) {
  return (
    <div className="ride-artifact">
      <div className="ride-artifact-header">
        <span className="ride-artifact-dot" aria-hidden />
        <p className="font-mono text-xs font-semibold tracking-wide text-amber-200/90">
          {artifact.requestId}
        </p>
      </div>

      <div className="ride-artifact-body">
        <ArtifactRow label="status" value={artifact.statusFlow} />
        <ArtifactRow label="owner" value={artifact.ownerFlow} />

        <div className="ride-artifact-row ride-artifact-row--stacked">
          <span className="ride-artifact-label">events</span>
          <ul className="ride-artifact-events">
            {artifact.events.map((event) => (
              <li key={event}>{event}</li>
            ))}
          </ul>
        </div>

        <div className="ride-artifact-rule">
          <span className="ride-artifact-label">runtime rule</span>
          <p className="ride-artifact-value ride-artifact-value--rule">
            {artifact.runtimeRule}
          </p>
        </div>
      </div>
    </div>
  );
}

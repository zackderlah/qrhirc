import { collaborativeMembers } from '../lib/constants';

function PartnerContent({ id }: { id: (typeof collaborativeMembers)[number]['id'] }) {
  switch (id) {
    case 'unisq':
      return (
        <>
          University of
          <br />
          <b>Southern Queensland</b>
        </>
      );
    case 'dd':
      return (
        <>
          Darling Downs
          <br />
          <b>Health</b>
        </>
      );
    case 'uq':
      return (
        <>
          <b>UQ</b>
          <span>
            Rural Clinical
            <br />
            School
          </span>
        </>
      );
    case 'sqrh':
      return (
        <>
          <b>SQRH</b>
          <span>
            Southern Queensland
            <br />
            Rural Health
          </span>
        </>
      );
    case 'rme':
      return <>Rural<b>MedEd</b></>;
  }
}

/**
 * Each group animates by exactly its own width, so every group lands where the
 * one before it started — that is what makes the loop seamless. Enough groups
 * are rendered to keep the strip filled on wide screens for the whole cycle.
 */
const GROUPS = 5;

export function PartnerCarousel() {
  return (
    <div className="partners-carousel">
      <div className="partners-track">
        {Array.from({ length: GROUPS }, (_, group) => (
          <div
            className="partners-group"
            key={group}
            aria-hidden={group > 0 ? true : undefined}
          >
            {collaborativeMembers.map((partner) =>
              group === 0 ? (
                <a
                  key={partner.id}
                  href={partner.href}
                  className={`partner-slide ${partner.className}`}
                >
                  <PartnerContent id={partner.id} />
                </a>
              ) : (
                <span
                  key={partner.id}
                  className={`partner-slide ${partner.className}`}
                >
                  <PartnerContent id={partner.id} />
                </span>
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

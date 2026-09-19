import BentoGrid01 from '@/components/ui/bento-grid-01';

export function WhatWeDo() {
  return (
    <section className="what-section" aria-labelledby="what-title">
      <div className="section-wrap what-inner">
        <header className="what-head">
          <h2 id="what-title">What we do</h2>
          <p>
            Six ways we work with the Darling Downs and South West Queensland
            to improve rural health.
          </p>
        </header>
        <BentoGrid01 />
      </div>
    </section>
  );
}

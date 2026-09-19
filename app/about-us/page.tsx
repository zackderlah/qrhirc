'use client';
/* oxlint-disable next/no-img-element */

import { ArrowUpRight } from 'lucide-react';
import { LinkArrow } from '../components/link-arrow';
import { PartnerCarousel } from '../components/partner-carousel';
import { SiteShell } from '../components/site-shell';
import { collaborativeMembers } from '../lib/constants';

const approach = [
  {
    title: 'Listen to the region',
    text:
      'Priorities begin with the people delivering and receiving care across the Darling Downs and South West Queensland.',
  },
  {
    title: 'Shape the question together',
    text:
      'Clinicians, researchers and community partners refine a local challenge into a question worth answering.',
  },
  {
    title: 'Support the work',
    text:
      'We help with design, ethics, delivery and mentorship so research fits alongside clinical practice.',
  },
  {
    title: 'Return the findings',
    text:
      'Results go back to the services and communities that raised the question, and inform practice and policy.',
  },
];

export default function AboutPage() {
  return (
    <SiteShell activeNav="about">
      <main id="main">
        <section className="page-hero hero-editorial" aria-labelledby="page-title">
          <figure className="page-hero-media">
            <img
              src="/assets/landscape.jpg"
              alt="The countryside and distant ranges at Picnic Point, Toowoomba"
            />
          </figure>
          <div className="hero-editorial-inner section-wrap">
            <div className="hero-editorial-main">
              <p className="page-eyebrow">Our collaborative</p>
              <h1 id="page-title">
                Local knowledge.
                <br />
                <span>Collective possibility.</span>
              </h1>
            </div>
            <dl className="hero-editorial-facts">
              <div>
                <dt>Region</dt>
                <dd>Darling Downs & South West Queensland</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Rural health research, education & translation</dd>
              </div>
              <div>
                <dt>Members</dt>
                <dd>Five partner organisations</dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          id="partners"
          className="partners"
          aria-label="Collaborative members"
        >
          <PartnerCarousel />
        </section>

        <section className="statement">
          <div className="section-wrap statement-inner">
            <p>
              The best way to improve rural health is together. We connect
              hospitals, health services, universities, primary care and
              business to turn local questions into meaningful research.
            </p>
            <LinkArrow href="/research-priorities">
              See what we are working on
            </LinkArrow>
          </div>
        </section>

        <section className="approach section-wrap">
          <div className="approach-head">
            <h2>How we work</h2>
            <p>
              Four steps that keep research grounded in the realities of rural
              and regional practice.
            </p>
          </div>
          <ol className="approach-list">
            {approach.map((step, index) => (
              <li key={step.title}>
                <span className="approach-num">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="roster section-wrap">
          <div className="roster-head">
            <h2>Who is in the collaborative</h2>
            <p>
              Partner organisations working across health services, universities
              and rural medical education.
            </p>
          </div>
          <ul className="roster-list">
            {collaborativeMembers.map((member) => (
              <li key={member.id}>
                <a href={member.href}>
                  <span>{member.label}</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="connect">
          <div className="section-wrap connect-inner">
            <div>
              <h2>Join the collaborative</h2>
              <p>
                Whether you bring a research idea, a community perspective or a
                new partnership—we would love to hear from you.
              </p>
            </div>
            <a className="button button-light" href="/contact-us">
              Let&apos;s connect <ArrowUpRight size={22} />
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

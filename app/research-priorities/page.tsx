'use client';
/* oxlint-disable next/no-img-element */

import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { LinkArrow } from '../components/link-arrow';
import { SiteShell } from '../components/site-shell';
import { priorities, report, researchProjects } from '../lib/constants';

export default function ResearchPage() {
  const [activePriority, setActivePriority] = useState(0);

  return (
    <SiteShell activeNav="research">
      <main id="main">
        <section className="page-hero hero-index" aria-labelledby="page-title">
          <figure className="page-hero-media">
            <img
              src="/assets/landscape-detail.jpg"
              alt="A windmill in the Darling Downs"
            />
          </figure>
          <div className="hero-index-inner section-wrap">
            <p className="page-eyebrow">Research & impact</p>
            <h1 id="page-title">
              Research with
              <br />
              <span>our region at heart.</span>
            </h1>
            <p className="hero-index-description">
              Real questions. Local perspectives. New possibilities for rural
              health across the Darling Downs and South West Queensland.
            </p>
            <ul className="hero-index-figures">
              <li>
                <strong>04</strong>
                <span>Research priorities</span>
              </li>
              <li>
                <strong>03</strong>
                <span>Active project themes</span>
              </li>
              <li>
                <strong>2025</strong>
                <span>Impact report</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="RESEARCH-PROJECTS" className="index-section section-wrap">
          <div className="index-head">
            <h2>Current projects</h2>
            <LinkArrow href="/contact-us">Propose a project</LinkArrow>
          </div>
          <ol className="project-index">
            {researchProjects.map((project, position) => (
              <li key={project.id}>
                <a href="/contact-us">
                  <span className="index-num">
                    {String(position + 1).padStart(2, '0')}
                  </span>
                  <div className="index-copy">
                    <p className="index-topic">{project.topic}</p>
                    <h3>{project.title}</h3>
                    <p className="index-text">{project.text}</p>
                    <p className="metadata">{project.meta}</p>
                  </div>
                  <figure className="index-thumb">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                    />
                  </figure>
                  <ArrowUpRight className="index-arrow" size={22} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section id="priorities" className="priority-section">
          <div className="section-wrap priority-inner">
            <div className="priority-intro">
              <h2>
                Different challenges.
                <br />
                One shared ambition.
              </h2>
              <p>
                Research that responds to the needs of rural and regional
                Queensland.
              </p>
            </div>
            <div className="priority-list">
              {priorities.map((item, index) => (
                <div
                  key={item.id}
                  className={`priority-item ${activePriority === index ? 'active' : ''}`}
                >
                  <button
                    aria-expanded={activePriority === index}
                    aria-controls={`priority-${index}`}
                    onClick={() =>
                      setActivePriority(activePriority === index ? -1 : index)
                    }
                  >
                    <span>{item.title}</span>
                    <ChevronDown size={23} />
                  </button>
                  <div id={`priority-${index}`} hidden={activePriority !== index}>
                    <p>{item.text}</p>
                    <LinkArrow href="/contact-us">
                      Explore this priority
                    </LinkArrow>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="RESEARCHEDUCATIONANDTRAINING"
          className="training section-wrap"
        >
          <div className="training-intro">
            <h2>
              Your next question
              <br />
              could change
              <br />
              <span>someone&apos;s future.</span>
            </h2>
            <p>
              You don&apos;t need to be an experienced researcher to make a
              difference. We help rural health professionals take the next step.
            </p>
            <LinkArrow href="/events">View upcoming events</LinkArrow>
          </div>
          <div className="training-program">
            <h3>From an idea to a research project.</h3>
            <p className="program-name">Intensive Research Training Program</p>
            <p>
              A practical, mentor-supported program that helps you turn a local
              health challenge into a research question.
            </p>
            <dl>
              <div>
                <dt>Duration</dt>
                <dd>5 months</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>4 full-day workshops · In person</dd>
              </div>
              <div>
                <dt>Experience</dt>
                <dd>Beginners welcome</dd>
              </div>
              <div>
                <dt>Cost</dt>
                <dd>Free of charge</dd>
              </div>
            </dl>
            <a className="button button-primary" href="/contact-us">
              Enquire about the next intake <ArrowUpRight size={20} />
            </a>
          </div>
        </section>

        <section id="RESEARCH-AGREEMENTS" className="resource-rows section-wrap">
          <h2>Resources</h2>
          <ul>
            <li>
              <div>
                <h3>Research agreements & templates</h3>
                <p>
                  Agreements, templates and guidance that support collaborative
                  research across partner organisations.
                </p>
              </div>
              <LinkArrow href="/contact-us">Request resources</LinkArrow>
            </li>
            <li>
              <div>
                <h3>2025 Impact Report</h3>
                <p>
                  Our work, partnerships and progress across the Darling Downs
                  and South West Queensland.
                </p>
              </div>
              <LinkArrow href={report}>
                Read the report <span className="file-label">PDF</span>
              </LinkArrow>
            </li>
          </ul>
        </section>
      </main>
    </SiteShell>
  );
}

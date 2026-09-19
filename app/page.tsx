'use client';
/* Native images intentionally serve the existing, credited client photography. */
/* oxlint-disable next/no-img-element */
import { ArrowRight, ArrowUpRight, BookOpen, MapPin } from 'lucide-react';
import { LinkArrow } from './components/link-arrow';
import { PartnerCarousel } from './components/partner-carousel';
import { SiteShell } from './components/site-shell';
import { WhatWeDo } from './components/what-we-do';
import { report } from './lib/constants';

export default function Home() {
  return (
    <SiteShell>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              Better health.
              <br />
              <span>Closer to home.</span>
            </h1>
            <p className="hero-description">
              Bringing research, people and possibility together for healthier
              rural Queensland communities.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/research-priorities">
                Explore our research{' '}
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-location">
              <MapPin size={16} aria-hidden="true" />
              <span>Darling Downs & South West Queensland</span>
            </div>
          </div>
          <figure className="hero-image">
            <img
              src="/assets/landscape.jpg"
              alt="The countryside and distant ranges at Picnic Point, Toowoomba"
              fetchPriority="high"
            />
            <figcaption>
              <span>Our region. Our people. Our shared future.</span>
            </figcaption>
          </figure>
          <div className="hero-services public-only">
            <a href="/research-priorities">
              Discover our research
              <ArrowRight />
            </a>
            <a href="/research-priorities#RESEARCHEDUCATIONANDTRAINING">
              Find training
              <ArrowRight />
            </a>
            <a href="/contact-us">
              Collaborate with us
              <ArrowRight />
            </a>
          </div>
        </section>
        <section className="partners" aria-label="Collaborative members">
          <PartnerCarousel />
        </section>
        <section id="about" className="intro section-wrap">
          <div>
            <h2>
              Local knowledge.
              <br />
              Collective possibility.
            </h2>
            <LinkArrow href="/about-us">Meet our collaborative</LinkArrow>
          </div>
          <div className="intro-copy">
            <p className="lead">
              The best way to improve rural health is together.
            </p>
            <p>
              We connect hospitals, health services, universities, primary care
              and business to turn local questions into meaningful research.
            </p>
            <p>
              Through collaboration, education and shared expertise, we support
              the people working to improve health across the Darling Downs and
              South West Queensland.
            </p>
          </div>
        </section>
        <WhatWeDo />
        <section id="research" className="research section-wrap">
          <div className="section-heading">
            <h2>
              Research with
              <br />
              <span>our region at heart.</span>
            </h2>
            <div>
              <p>
                Real questions. Local perspectives.
                <br />
                New possibilities for rural health.
              </p>
              <LinkArrow href="/research-priorities#RESEARCH-PROJECTS">
                Explore all research
              </LinkArrow>
            </div>
          </div>
          <div className="research-layout">
            <article className="featured-project">
              <div className="project-visual">
                <img
                  src="/assets/landscape-detail.jpg"
                  alt="A windmill in the Darling Downs"
                  loading="lazy"
                />
                <span className="project-topic">Access to care</span>
              </div>
              <div className="featured-project-copy">
                <h3>
                  Bringing recovery
                  <br />
                  closer to home.
                </h3>
                <p className="metadata">Research project · Funded 2025</p>
                <p>
                  Exploring a hybrid prehabilitation program to help rural
                  patients prepare for knee replacement surgery—with less travel
                  and more support.
                </p>
                <LinkArrow href="/research-priorities#RESEARCH-PROJECTS">
                  Discover the project
                </LinkArrow>
              </div>
            </article>
            <div className="research-side">
              <article className="project-row">
                <h3>
                  First Nations voices.
                  <br />
                  Stronger health research.
                </h3>
                <p>
                  Developing a rural, regional and remote advocacy panel to help
                  shape research around community priorities.
                </p>
                <LinkArrow href="/research-priorities#RESEARCH-PROJECTS">
                  Read about the project
                </LinkArrow>
              </article>
              <article className="impact-row">
                <BookOpen size={29} strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <h3>See the bigger picture.</h3>
                  <p>
                    Discover our work, partnerships and progress in the 2025
                    Impact Report.
                  </p>
                  <LinkArrow href={report}>
                    Read our impact report{' '}
                    <span className="file-label">PDF</span>
                  </LinkArrow>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="training" className="training section-wrap">
          <div className="training-intro">
            <h2>
              Your next question
              <br />
              could change
              <br />
              <span>someone’s future.</span>
            </h2>
            <p>
              You don’t need to be an experienced researcher to make a
              difference. We help rural health professionals take the next step.
            </p>
            <LinkArrow href="/research-priorities#RESEARCHEDUCATIONANDTRAINING">
              Explore education & training
            </LinkArrow>
          </div>
          <div className="training-program">
            <h3>
              From an idea
              <br />
              to a research project.
            </h3>
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
            <a className="workshop-link" href="/events">
              Looking for a shorter workshop? <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
        <section className="connect">
          <div className="section-wrap connect-inner">
            <div>
              <h2>
                Progress starts
                <br />
                with a conversation.
              </h2>
              <p>
                A research idea. A community perspective. A new partnership.
                <br />
                We’d love to hear what’s possible, together.
              </p>
            </div>
            <a className="button button-light" href="/contact-us">
              Let’s connect <ArrowUpRight size={22} />
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

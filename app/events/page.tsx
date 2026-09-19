'use client';

import { useState } from 'react';
import { ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { SiteShell } from '../components/site-shell';
import { events } from '../lib/constants';

const filters = ['All', 'Training', 'Workshop', 'Forum'] as const;
type Filter = (typeof filters)[number];

export default function EventsPage() {
  const [filter, setFilter] = useState<Filter>('All');
  const visible =
    filter === 'All' ? events : events.filter((event) => event.type === filter);

  return (
    <SiteShell activeNav="events">
      <main id="main">
        <section className="agenda-head" aria-labelledby="page-title">
          <div className="section-wrap agenda-head-inner">
            <div>
              <p className="page-eyebrow">Events</p>
              <h1 id="page-title">Learn, connect and collaborate.</h1>
            </div>
            <p className="agenda-note">
              Workshops, training programs and forums for rural health
              professionals, researchers and community partners.
            </p>
          </div>
          <div className="section-wrap agenda-tabs" role="group" aria-label="Filter events">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                className={[
                  filter === item ? 'is-active' : '',
                  item === 'All' ? '' : `type-${item.toLowerCase()}`,
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
                <span>
                  {item === 'All'
                    ? events.length
                    : events.filter((event) => event.type === item).length}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="events-list" className="agenda section-wrap">
          {visible.map((event) => (
            <article
              key={event.id}
              className={`agenda-row type-${event.type.toLowerCase()}`}
            >
              <div className="agenda-rail">
                <span className="agenda-type">{event.type}</span>
                <span className="agenda-cost">{event.cost}</span>
              </div>
              <div className="agenda-body">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <ul className="agenda-facts">
                  <li>
                    <Clock size={14} aria-hidden="true" />
                    {event.duration}
                  </li>
                  <li>{event.format}</li>
                  <li>
                    <MapPin size={14} aria-hidden="true" />
                    {event.location}
                  </li>
                </ul>
              </div>
              <div className="agenda-action">
                <a href="/contact-us">
                  Register interest <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
          {visible.length === 0 && (
            <p className="agenda-empty">
              No events in this category right now. Get in touch and we will let
              you know what is coming up.
            </p>
          )}
        </section>

        <section className="agenda-cta">
          <div className="section-wrap agenda-cta-inner">
            <h2>Not sure which one fits?</h2>
            <p>
              Tell us where you are up to and we will suggest a starting point.
            </p>
            <a className="button button-primary" href="/contact-us">
              Ask about training <ArrowUpRight size={20} />
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

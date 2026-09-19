'use client';

import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { SiteShell } from '../components/site-shell';
import { inquiryTopics } from '../lib/constants';

export default function ContactPage() {
  const [topic, setTopic] = useState<string>(inquiryTopics[0]);

  return (
    <SiteShell>
      <main id="main">
        <section className="contact-console" aria-labelledby="page-title">
          <aside className="console-rail">
            <div className="console-rail-inner">
              <p className="page-eyebrow">Contact</p>
              <h1 id="page-title">
                Progress starts
                <br />
                <span>with a conversation.</span>
              </h1>
              <p className="console-lead">
                A research idea. A community perspective. A new partnership.
                Tell us what you are working on and we will point you to the
                right next step.
              </p>
              <div className="console-details">
                <a href="mailto:qrhirc@health.qld.gov.au">
                  <Mail size={17} aria-hidden="true" />
                  qrhirc@health.qld.gov.au
                </a>
                <a href="tel:0436934545">
                  <Phone size={17} aria-hidden="true" />
                  04 3693 4545
                </a>
                <p>
                  <MapPin size={17} aria-hidden="true" />
                  <span>
                    Rush House, Baillie Henderson Hospital
                    <br />
                    Cnr Tor and Hogg St, Toowoomba
                  </span>
                </p>
              </div>
            </div>
          </aside>

          <div className="console-main">
            <fieldset className="console-topics">
              <legend>What is this about?</legend>
              <div className="topic-choices">
                {inquiryTopics.map((item) => (
                  <label
                    key={item}
                    className={topic === item ? 'is-active' : undefined}
                  >
                    <input
                      type="radio"
                      name="enquiry-topic"
                      value={item}
                      checked={topic === item}
                      onChange={() => setTopic(item)}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </fieldset>

            <form
              id="contact-form"
              className="console-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="console-form-row">
                <label>
                  Full name
                  <input type="text" name="name" autoComplete="name" required />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>
              <label>
                Organisation
                <input
                  type="text"
                  name="organisation"
                  autoComplete="organization"
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={7}
                  placeholder="Tell us about your research idea, training interest or partnership enquiry."
                  required
                />
              </label>
              <div className="console-form-foot">
                <p>
                  Enquiry type: <strong>{topic}</strong>
                </p>
                <button type="submit" className="button button-primary">
                  Send message <ArrowUpRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { Brand } from './brand';
import { InstagramIcon, LinkedinIcon } from './social-icons';
import { defaultDirection, directions, type Direction } from '../lib/constants';
import {
  persistPreviewState,
  readPreviewState,
  syncPreviewUrl,
  withPreviewHref,
} from '../lib/preview';

type NavKey = 'about' | 'research' | 'training' | 'events';

export function SiteShell({
  children,
  activeNav,
}: {
  children: React.ReactNode;
  activeNav?: NavKey;
}) {
  const [direction, setDirection] = useState<Direction>(defaultDirection);
  const [menuOpen, setMenuOpen] = useState(false);
  const [preview, setPreview] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(true);

  useEffect(() => {
    const state = readPreviewState();
    setDirection(state.direction);
    setPreview(state.preview);
    if (state.preview) syncPreviewUrl(true, state.direction);
  }, []);

  function chooseDirection(id: Direction) {
    setDirection(id);
    persistPreviewState(preview, id);
    syncPreviewUrl(preview, id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function href(path: string) {
    return withPreviewHref(path, preview, direction);
  }

  const navClass = (key: NavKey) =>
    activeNav === key ? 'is-active' : undefined;

  return (
    <div id="top" className={`site direction-${direction}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="acknowledgement">
        We acknowledge the Traditional Owners of the lands on which we live and
        work, and pay respect to Elders past, present and emerging.
      </div>
      <header className="header">
        <div className="header-inner">
          <Brand home={href('/')} />
          <nav
            className={`main-nav ${menuOpen ? 'is-open' : ''}`}
            aria-label="Main navigation"
          >
            <a
              href={href('/about-us')}
              className={navClass('about')}
              onClick={() => setMenuOpen(false)}
            >
              Our collaborative
            </a>
            <a
              href={href('/research-priorities')}
              className={navClass('research')}
              onClick={() => setMenuOpen(false)}
            >
              Research & impact
            </a>
            <a
              href={href('/research-priorities#RESEARCHEDUCATIONANDTRAINING')}
              className={navClass('training')}
              onClick={() => setMenuOpen(false)}
            >
              Training
            </a>
            <a
              href={href('/events')}
              className={navClass('events')}
              onClick={() => setMenuOpen(false)}
            >
              Events
            </a>
          </nav>
          <a className="header-cta" href={href('/contact-us')}>
            Connect with us <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            className="mobile-menu"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {children}
      <footer className="footer section-wrap">
        <div className="footer-top">
          <Brand home={href('/')} />
          <div className="footer-contact">
            <a href="mailto:qrhirc@health.qld.gov.au">
              qrhirc@health.qld.gov.au <ArrowUpRight size={15} />
            </a>
            <a href="tel:0436934545">04 3693 4545</a>
            <p>
              Rush House, Baillie Henderson Hospital
              <br />
              Cnr Tor and Hogg St, Toowoomba
            </p>
          </div>
          <div className="footer-links">
            <a href={href('/about-us')}>About QRHIRC</a>
            <a href={href('/research-priorities#RESEARCH-AGREEMENTS')}>
              Research resources
            </a>
            <a
              className="footer-social"
              href="https://www.linkedin.com/company/qrhirc"
            >
              <LinkedinIcon />
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
            <a
              className="footer-social"
              href="https://www.instagram.com/qrhirc/"
            >
              <InstagramIcon />
              Instagram
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Queensland Rural Health Innovation &
            Research Collaborative
          </p>
          <p>
            Landscape photography:{' '}
            <a href="https://www.facebook.com/Mjk-Photography-104748107559460/">
              MJK Photography
            </a>
          </p>
        </div>
      </footer>
      {preview && (
        <aside
          className={`design-preview ${previewOpen ? '' : 'collapsed'}`}
          aria-label="Design preview controls"
        >
          <div className="preview-title">
            <span>QRHIRC · Design directions</span>
            <button
              onClick={() => setPreviewOpen(!previewOpen)}
              aria-label={
                previewOpen
                  ? 'Minimise design controls'
                  : 'Expand design controls'
              }
            >
              {previewOpen ? <X size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
          {previewOpen && (
            <>
              <div className="preview-options">
                {directions.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => chooseDirection(item.id)}
                    aria-pressed={direction === item.id}
                  >
                    <span>{String.fromCharCode(65 + index)}</span>
                    {item.name}
                  </button>
                ))}
              </div>
              <p>{directions.find((d) => d.id === direction)?.description}</p>
            </>
          )}
        </aside>
      )}
    </div>
  );
}

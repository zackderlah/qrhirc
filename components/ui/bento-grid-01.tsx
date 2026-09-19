'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  GraduationCap,
  Handshake,
  Presentation,
  Search,
  Share2,
  TrendingUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ease = [0.16, 1, 0.3, 1] as const;

function ResearchPulse() {
  const reduce = useReducedMotion();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (reduce) return;
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.18 : 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [reduce]);

  return (
    <div className="flex h-full items-center justify-center">
      <motion.div
        className="flex size-24 items-center justify-center rounded-full border border-[var(--line)] text-[var(--accent)]"
        animate={{ scale: reduce ? 1 : scale }}
        transition={{ duration: 0.8, ease }}
      >
        <Search className="size-10" strokeWidth={1.4} />
      </motion.div>
    </div>
  );
}

function ShowcaseLayouts() {
  const reduce = useReducedMotion();
  const [layout, setLayout] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, [reduce]);

  const layouts = ['grid-cols-2', 'grid-cols-3', 'grid-cols-1'];

  return (
    <div className="flex h-16 items-center justify-center">
      <motion.div
        className={cn('grid w-full max-w-[160px] gap-1.5', layouts[layout])}
        layout
        transition={{ duration: 0.5, ease }}
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="h-5 w-full rounded-md bg-[var(--accent)]/25"
            layout
            transition={{ duration: 0.5, ease }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function GrowthMeter() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(Boolean(reduce));

  useEffect(() => {
    if (reduce) return;
    const timeout = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(timeout);
  }, [reduce]);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className="relative flex h-10 w-full items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {ready ? (
            <motion.span
              key="ready"
              initial={{ y: 16, opacity: 0, filter: 'blur(5px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              className="font-[family-name:var(--display)] text-2xl font-medium text-[var(--ink)]"
            >
              Growing
            </motion.span>
          ) : (
            <motion.div
              key="loader"
              className="h-8 w-24 rounded bg-[var(--line)]"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </AnimatePresence>
      </div>
      <TrendingUp className="size-5 text-[var(--accent)]" strokeWidth={1.6} />
      <div className="h-1.5 w-full max-w-[120px] overflow-hidden rounded-full bg-[var(--line)]">
        <motion.div
          className="h-full rounded-full bg-[var(--accent)]"
          initial={{ width: 0 }}
          animate={{ width: ready ? '100%' : 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        />
      </div>
    </div>
  );
}

function EducatingBadges() {
  const reduce = useReducedMotion();
  const [steps, setSteps] = useState([false, false, false]);

  useEffect(() => {
    if (reduce) {
      setSteps([true, true, true]);
      return;
    }
    const interval = setInterval(() => {
      setSteps((prev) => {
        const next = prev.findIndex((step) => !step);
        if (next === -1) return [false, false, false];
        return prev.map((step, i) => (i === next ? true : step));
      });
    }, 800);
    return () => clearInterval(interval);
  }, [reduce]);

  return (
    <div className="flex h-full items-center justify-center gap-3">
      {steps.map((active, i) => (
        <motion.div
          key={i}
          className={cn(
            'flex size-12 items-center justify-center rounded-lg border',
            active
              ? 'border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--accent)]'
              : 'border-[var(--line)] text-[var(--muted)]',
          )}
          animate={{ scale: active ? 1.08 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <GraduationCap className="size-5" strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}

function NetworkPulse() {
  const pulses = [0, 1, 2, 3];
  const reduce = useReducedMotion();

  return (
    <div className="relative flex h-full items-center justify-center">
      <Handshake className="relative z-10 size-16 text-[var(--accent)]" strokeWidth={1.3} />
      {!reduce &&
        pulses.map((pulse) => (
          <motion.div
            key={pulse}
            className="absolute size-16 rounded-full border-2 border-[var(--accent)]/30"
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 2.6, opacity: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: pulse * 0.8,
              ease: 'easeOut',
            }}
          />
        ))}
    </div>
  );
}

function SharingSignal() {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex h-full items-center justify-center">
      <Share2 className="relative z-10 size-16 text-[var(--accent)]" strokeWidth={1.3} />
      {!reduce && (
        <motion.div
          className="absolute size-16 rounded-full border border-[var(--accent)]/40"
          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
        />
      )}
    </div>
  );
}

const cardClass =
  'what-bento-card flex cursor-default flex-col overflow-hidden border border-[var(--line)] bg-[var(--paper)] p-6 transition-colors hover:border-[var(--accent)] md:p-8 rounded-xl';

export default function BentoGrid01() {
  return (
    <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:auto-rows-[240px] md:grid-cols-6">
      <motion.article
        className={cn(cardClass, 'md:col-span-2 md:row-span-2')}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="min-h-0 flex-1">
          <ResearchPulse />
        </div>
        <div className="mt-4 shrink-0">
          <h3 className="font-[family-name:var(--display)] text-xl font-medium text-[var(--ink)]">
            Researching
          </h3>
          <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
            We turn local health questions into studies shaped with the people
            delivering and receiving care.
          </p>
        </div>
      </motion.article>

      <motion.article
        className={cn(cardClass, 'md:col-span-2')}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 0.98 }}
      >
        <div className="min-h-0 flex-1">
          <ShowcaseLayouts />
        </div>
        <div className="mt-4 shrink-0">
          <h3 className="flex items-center gap-2 font-[family-name:var(--display)] text-xl font-medium text-[var(--ink)]">
            <Presentation className="size-5 text-[var(--accent)]" />
            Showcasing
          </h3>
          <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
            Projects, progress and the Impact Report, so the region can see what
            is possible.
          </p>
        </div>
      </motion.article>

      <motion.article
        className={cn(cardClass, 'md:col-span-2 md:row-span-2')}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex min-h-0 flex-1 items-center justify-center">
          <NetworkPulse />
        </div>
        <div className="mt-auto shrink-0">
          <h3 className="flex items-center gap-2 font-[family-name:var(--display)] text-xl font-medium text-[var(--ink)]">
            <Handshake className="size-5 text-[var(--accent)]" />
            Networking
          </h3>
          <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
            Hospitals, universities, primary care and rural educators working as
            one collaborative.
          </p>
        </div>
      </motion.article>

      <motion.article
        className={cn(cardClass, 'md:col-span-2')}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 0.98 }}
      >
        <div className="min-h-0 flex-1">
          <GrowthMeter />
        </div>
        <div className="mt-4 shrink-0">
          <h3 className="font-[family-name:var(--display)] text-xl font-medium text-[var(--ink)]">
            Growth
          </h3>
          <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
            We build research capability across the rural workforce.
          </p>
        </div>
      </motion.article>

      <motion.article
        className={cn(cardClass, 'md:col-span-3')}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 0.98 }}
      >
        <div className="min-h-0 flex-1">
          <EducatingBadges />
        </div>
        <div className="mt-4 shrink-0">
          <h3 className="flex items-center gap-2 font-[family-name:var(--display)] text-xl font-medium text-[var(--ink)]">
            <GraduationCap className="size-5 text-[var(--accent)]" />
            Educating
          </h3>
          <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
            Practical training and workshops that help clinicians take the next
            step, without leaving the region.
          </p>
        </div>
      </motion.article>

      <motion.article
        className={cn(cardClass, 'md:col-span-3')}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 0.98 }}
      >
        <div className="flex min-h-0 flex-1 items-center justify-center">
          <SharingSignal />
        </div>
        <div className="mt-4 shrink-0">
          <h3 className="font-[family-name:var(--display)] text-xl font-medium text-[var(--ink)]">
            Sharing
          </h3>
          <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
            Findings return to the services and communities that raised the
            question, and inform care closer to home.
          </p>
        </div>
      </motion.article>
    </div>
  );
}

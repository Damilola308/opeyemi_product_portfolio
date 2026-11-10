'use client';
import { motion, useReducedMotion } from 'motion/react';

const words: { t: string; c?: string }[] = [
  { t: 'I' }, { t: 'turn' }, { t: 'curiosity', c: 'w-curiosity' }, { t: 'into' },
  { t: 'intelligent', c: 'w-intelligent' }, { t: 'experiences.', c: 'w-exp' },
];

export default function HeroHeadline() {
  const reduce = useReducedMotion();
  return (
    <h1 className="hero-title" aria-label="I turn curiosity into intelligent experiences.">
      {words.map((w, i) => (
        <span className="word-mask" key={w.t} aria-hidden="true">
          <motion.span
            className={`word ${w.c ?? ''}`}
            initial={reduce ? false : { y: '115%', rotate: 4 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.95, delay: 0.25 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {w.t}
          </motion.span>{' '}
        </span>
      ))}
    </h1>
  );
}

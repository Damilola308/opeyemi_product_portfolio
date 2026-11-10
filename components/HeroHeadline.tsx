'use client';
import { Fragment } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const words: { t: string; c?: string; br?: boolean }[] = [
  { t: 'Hi,' }, { t: 'I' }, { t: 'am' }, { t: 'Opeyemi,', c: 'name' },
  { t: 'a' }, { t: 'vibe' }, { t: 'builder', br: true },
  { t: 'with' }, { t: 'a' }, { t: 'curious', c: 'curious' }, { t: 'mind.' },
];

export default function HeroHeadline() {
  const reduce = useReducedMotion();
  return (
    <h1 className="hero-title" aria-label="Hi, I am Opeyemi, a vibe builder with a curious mind.">
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="word-mask" aria-hidden="true">
            <motion.span
              className={`word ${w.c ?? ''}`}
              initial={reduce ? false : { y: '115%', rotate: 3 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 0.95, delay: 0.2 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              {w.t}
            </motion.span>
          </span>{' '}
          {w.br && <br className="hero-br" />}
        </Fragment>
      ))}
    </h1>
  );
}

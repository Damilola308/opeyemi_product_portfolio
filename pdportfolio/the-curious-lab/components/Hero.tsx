'use client';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import HeroHeadline from './HeroHeadline';
import HeroArt from './HeroArt';
import { profile } from '@/data/profile';

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  function onMove(e: React.PointerEvent) {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`);
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`);
  }
  const fade = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  });
  return (
    <section className="hero" ref={ref} onPointerMove={onMove}>
      <div className="hero-mesh" aria-hidden="true" />
      <div className="hero-spot" aria-hidden="true" />
      <div className="hero-copy">
        <motion.div className="eyebrow" {...fade(0.1)}><span>01</span> A CREATIVE TECHNOLOGY PRACTICE</motion.div>
        <HeroHeadline />
        <motion.p className="hero-description" {...fade(1)}>{profile.supporting}</motion.p>
        <motion.div className="positioning" {...fade(1.1)}>
          {profile.positioning.map(p => <span key={p}>{p}</span>)}
        </motion.div>
        <motion.div className="hero-actions" {...fade(1.2)}>
          <Link className="button-dark" href="/work">EXPLORE MY WORK <ArrowUpRight size={16} /></Link>
          <Link className="text-link" href="#work">SCROLL TO PROJECTS <ArrowDown size={15} /></Link>
        </motion.div>
      </div>
      <motion.div className="hero-visual" initial={reduce ? false : { opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        <HeroArt />
      </motion.div>
    </section>
  );
}

'use client';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import HeroHeadline from './HeroHeadline';
import KeycapSphere from './KeycapSphere';
import FloatKeys from './FloatKeys';
import Magnetic from './Magnetic';
import { profile } from '@/data/profile';

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  function onMove(e: React.PointerEvent) {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`);
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`);
    ref.current.style.setProperty('--px', String((e.clientX - r.left) / r.width - 0.5));
    ref.current.style.setProperty('--py', String((e.clientY - r.top) / r.height - 0.5));
  }
  const fade = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  });
  return (
    <section className="hero" ref={ref} onPointerMove={onMove}>
      <div className="hero-mesh" aria-hidden="true" />
      <div className="hero-spot" aria-hidden="true" />
      <motion.div className="ghost" aria-hidden="true" initial={reduce ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>CURIOUS</motion.div>
      <FloatKeys />
      <motion.div className="hero-label" {...fade(0.1)}>( THE CURIOUS LAB · {new Date().getFullYear()} )</motion.div>
      <HeroHeadline />
      <KeycapSphere />
      <motion.p className="hero-caption" {...fade(1.1)}>
        {profile.headline}
        <span>{profile.positioning.join(' · ')}</span>
      </motion.p>
      <motion.div className="hero-cta" {...fade(1.2)}>
        <Magnetic><Link className="see-work" href="/work">See my work <ArrowUpRight size={16} /></Link></Magnetic>
      </motion.div>
    </section>
  );
}

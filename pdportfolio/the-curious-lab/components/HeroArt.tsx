'use client';
import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';

function Layer({ depth, x, y, className, children }: { depth: number; x: any; y: any; className: string; children?: React.ReactNode }) {
  const tx = useTransform(x, (v: number) => v * depth);
  const ty = useTransform(y, (v: number) => v * depth);
  return <motion.div className={className} style={{ x: tx, y: ty }}>{children}</motion.div>;
}

export default function HeroArt() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 70, damping: 18 });
  const y = useSpring(my, { stiffness: 70, damping: 18 });

  function onMove(e: React.PointerEvent) {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() { mx.set(0); my.set(0); }

  return (
    <div className="hero-art" ref={ref} onPointerMove={onMove} onPointerLeave={onLeave}>
      <Layer depth={18} x={x} y={y} className="art-layer l-ring"><div className="float f1"><span className="shape-ring" /></div></Layer>
      <Layer depth={-26} x={x} y={y} className="art-layer l-sun"><div className="float f2"><span className="shape-sun" /></div></Layer>
      <Layer depth={-44} x={x} y={y} className="art-layer l-main">
        <div className="shape-main"><span className="q">?</span><span className="orbit"><i /></span></div>
      </Layer>
      <Layer depth={52} x={x} y={y} className="art-layer l-star">
        <div className="float f3">
          <svg viewBox="0 0 100 100" className="shape-star" aria-hidden="true"><path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" /></svg>
        </div>
      </Layer>
      <Layer depth={34} x={x} y={y} className="art-layer l-card1">
        <div className="float f2"><div className="art-card ivory"><small>NOW EXPLORING</small><b>AI × Product</b><span>Ideas in motion ↗</span></div></div>
      </Layer>
      <Layer depth={-30} x={x} y={y} className="art-layer l-card2">
        <div className="float f1"><div className="art-card plum"><small>TOOLS I USE</small><b>Figma · Claude · Next.js</b><span>+ a healthy dose of curiosity</span></div></div>
      </Layer>
      <Layer depth={24} x={x} y={y} className="art-layer l-badge">
        <svg viewBox="0 0 120 120" className="badge" aria-hidden="true">
          <defs><path id="ring" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
          <text><textPath href="#ring">CURIOUS BY NATURE • BUILT WITH AI • </textPath></text>
          <circle cx="60" cy="60" r="9" className="badge-dot" />
        </svg>
      </Layer>
      <svg className="squiggle" viewBox="0 0 220 40" aria-hidden="true"><path d="M2 20 Q 20 0 38 20 T 74 20 T 110 20 T 146 20 T 182 20 T 218 20" /></svg>
      <div className="art-caption">( a little curiosity goes a long way )</div>
    </div>
  );
}

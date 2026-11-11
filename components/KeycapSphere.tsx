'use client';
import { useMemo, useRef, useState, useEffect } from 'react';
import type { CSSProperties } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { buildTiles } from './sphereTiles';

export default function KeycapSphere() {
  const reduce = useReducedMotion();
  const tiles = useMemo(buildTiles, []);
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; moved: boolean } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const [burst, setBurst] = useState(false);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotY = useSpring(px, { stiffness: 60, damping: 16 });
  const rotX = useSpring(py, { stiffness: 60, damping: 16 });

  useEffect(() => () => clearTimeout(timer.current), []);

  function wave() {
    clearTimeout(timer.current);
    setBurst(false);
    requestAnimationFrame(() => {
      setBurst(true);
      timer.current = setTimeout(() => setBurst(false), 2400);
    });
  }
  function onDown(e: React.PointerEvent) {
    drag.current = { x: e.clientX, moved: false };
    ref.current?.setPointerCapture(e.pointerId);
  }
  function onMove(e: React.PointerEvent) {
    const d = drag.current;
    if (d) {
      const dx = e.clientX - d.x;
      if (Math.abs(dx) > 6) d.moved = true;
      if (d.moved) px.set(dx * 0.45); // drag to spin, springs back on release
      return;
    }
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width - 0.5) * 36);
    py.set(-((e.clientY - r.top) / r.height - 0.5) * 24);
  }
  function onUp() {
    const d = drag.current;
    drag.current = null;
    px.set(0);
    if (d && !d.moved) wave(); // a click or tap sends a wave through the keys
  }
  function onLeave() { if (!drag.current) { px.set(0); py.set(0); } }

  return (
    <>
      <motion.div
        className={`sphere-holder${burst ? ' burst' : ''}`}
        ref={ref}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onPointerLeave={onLeave}
        initial={reduce ? false : { opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        <div className="sphere-stage">
          <div className="sphere-core" />
          <motion.div className="sphere-tilt" style={{ rotateX: rotX, rotateY: rotY }}>
            <div className="sphere-sway">
              {tiles.map(t => (
                <span key={t.i} className="tile" style={{ transform: t.transform }}>
                  <span className="lift">
                    <span
                      className={`cap${t.k !== null ? ' letter' : ''}`}
                      data-l={t.label}
                      style={{ '--bg': t.bg, '--fg': t.fg, '--i': t.i, '--w': t.w, '--k': t.k ?? 0 } as CSSProperties}
                    />
                  </span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
      <p className="sphere-hint" aria-hidden="true">
        <span className="h-mouse">( hover the keys · drag to spin · click for a wave )</span>
        <span className="h-touch">( drag to spin · tap for a wave )</span>
      </p>
    </>
  );
}

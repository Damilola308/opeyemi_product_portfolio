'use client';
import { useMemo, useRef } from 'react';
import type { CSSProperties } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { buildTiles } from './sphereTiles';

export default function KeycapSphere() {
  const reduce = useReducedMotion();
  const tiles = useMemo(buildTiles, []);
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotY = useSpring(px, { stiffness: 60, damping: 16 });
  const rotX = useSpring(py, { stiffness: 60, damping: 16 });

  function onMove(e: React.PointerEvent) {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width - 0.5) * 36);
    py.set(-((e.clientY - r.top) / r.height - 0.5) * 24);
  }
  function onLeave() { px.set(0); py.set(0); }

  return (
    <motion.div
      className="sphere-holder"
      ref={ref}
      onPointerMove={onMove}
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
              <span
                key={t.i}
                className="keycap"
                style={{ transform: t.transform, '--bg': t.bg, '--fg': t.fg, '--i': t.i } as CSSProperties}
              >
                {t.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

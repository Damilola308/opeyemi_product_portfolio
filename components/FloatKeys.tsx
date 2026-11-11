import type { CSSProperties } from 'react';

const keys = [
  { l: 'AI', c: 'k1' }, { l: 'UX', c: 'k2' }, { l: '✦', c: 'k3' }, { l: '?', c: 'k4' }, { l: '↗', c: 'k5' },
];

/** Loose keycaps that drift around the hero and shift with the pointer (see --px / --py set in Hero). */
export default function FloatKeys() {
  return (
    <div className="float-keys" aria-hidden="true">
      {keys.map((k, i) => (
        <span key={k.c} className={`fkey ${k.c}`}>
          <i style={{ '--n': i } as CSSProperties} data-l={k.l} />
        </span>
      ))}
    </div>
  );
}

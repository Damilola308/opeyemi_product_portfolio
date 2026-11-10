export type Tile = { transform: string; bg: string; fg: string; label: string; i: number };

const PALETTE: [string, string][] = [
  ['#6a2cff', '#ffffff'], ['#ff6a1a', '#1d0b33'], ['#1d6bff', '#ffffff'], ['#ff4f93', '#ffffff'],
  ['#dccfff', '#1d0b33'], ['#ffd8bd', '#1d0b33'], ['#cfe0ff', '#1d0b33'], ['#cdeedb', '#1d0b33'],
  ['#f6ecd8', '#1d0b33'], ['#2b0f4a', '#f6ecd8'],
];
const ICONS = ['✳', '✦', '?', '→', '✓', '◎', '+', '♥', '★', '✿', '↗', '◐'];
// words centred on the front of the sphere, keyed by latitude (degrees)
const WORDS: Record<number, string> = { 15: 'THE', 0: 'CURIOUS', [-15]: 'LAB' };

export const SPHERE_RADIUS = 210;
const STEP = 15;
const EQUATOR_COUNT = 24;

// small deterministic generator, so server and client render the same sphere
function rng(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function buildTiles(): Tile[] {
  const rand = rng(7);
  const tiles: Tile[] = [];
  let i = 0;
  for (let lat = -75; lat <= 75; lat += STEP) {
    const n = Math.max(4, Math.round(EQUATOR_COUNT * Math.cos((lat * Math.PI) / 180)));
    const step = 360 / n;
    const word = WORDS[lat];
    for (let k = 0; k < n; k++) {
      const theta = k * step;
      // signed index from the front (theta 0), so a word sits centred on it
      const signed = k <= n / 2 ? k : k - n;
      let label = ICONS[Math.floor(rand() * ICONS.length)];
      let [bg, fg] = PALETTE[Math.floor(rand() * PALETTE.length)];
      if (word) {
        const idx = signed + (word.length - 1) / 2;
        if (Number.isInteger(idx) && idx >= 0 && idx < word.length) {
          label = word[idx];
          [bg, fg] = PALETTE[(idx + (lat === 0 ? 0 : 3)) % 4];
        }
      }
      tiles.push({
        transform: `rotateY(${theta.toFixed(2)}deg) rotateX(${lat}deg) translateZ(${SPHERE_RADIUS}px)`,
        bg, fg, label, i: i++,
      });
    }
  }
  return tiles;
}

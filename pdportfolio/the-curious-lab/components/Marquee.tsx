const items = ['AI PRODUCT DESIGN', 'PRODUCT THINKING', 'FIGMA', 'VIBE BUILDING', 'EXPERIMENTS', 'CURIOSITY', 'SHIPPING'];
export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map(k => <div className="marquee-row" key={k}>{row.map((t, i) => <span key={i}>{t}<i>✳</i></span>)}</div>)}
      </div>
    </div>
  );
}

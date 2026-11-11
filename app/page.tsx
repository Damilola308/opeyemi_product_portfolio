import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import LinkedInButton from '@/components/LinkedInButton';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

const NUM = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

export default function Home() {
  return <>
    <header className="topbar"><div className="top-kicker">AI PRODUCT DESIGNER <b>•</b> PRODUCT BUILDER <b>•</b> TECHNOLOGY EXPLORER</div><Link className="studio-button" href="/contact">LET'S TALK <span>↗</span></Link></header>
    <Hero />
    <Marquee />
    <section className="work-section" id="work">
      <Reveal><div className="section-heading"><div><span className="section-index">02 / SELECTED WORK</span><h2>{NUM[projects.length] ?? projects.length} products.<br /><em>{NUM[projects.length] ?? projects.length} real problems.</em></h2></div><Link href="/work" className="view-all">VIEW ALL PROJECTS <ArrowUpRight size={15} /></Link></div></Reveal>
      <div className="project-grid">
        {projects.map((project, i) => <ProjectCard key={project.slug} project={project} index={i} featured={i === 0} />)}
      </div>
    </section>
    <section className="about-strip"><Reveal className="about-label">03 / A LITTLE ABOUT ME</Reveal><Reveal delay={0.1}><h2>Designer by <em>curiosity.</em><br />Builder by <i>choice.</i></h2><p>I design products, then build them. Figma for the thinking, AI tools for the shipping.</p><Link href="/about" className="under-link">READ MY STORY <ArrowUpRight size={15} /></Link></Reveal><Reveal delay={0.2}><div className="about-stamp">CURIOUS<br />BY NATURE<br /><span>✳</span></div></Reveal></section>
    <section className="do-section">
      {[
        ['01', 'Design', 'Problems framed. Flows mapped. Interfaces crafted in Figma.', 'purple'],
        ['02', 'Build', 'Working prototypes built with AI, not just pretty mockups.', 'orange'],
        ['03', 'Explore', 'New models and tools, tested in the open.', 'blue'],
      ].map(([n, t, d, c], i) => <Reveal key={n} delay={i * 0.1} className={`do-card ${c}`}><span>{n}</span><h3>{t}</h3><p>{d}</p></Reveal>)}
    </section>
    <section className="lab-section"><Reveal><span className="section-index">04 / THE EXPERIMENTAL SIDE</span><h2>Ideas go in.<br /><em>Experiments come out.</em></h2><p>AI workflows, rough prototypes and odd ideas, tested in public. Notes from the lab are on the way.</p><Link href="/contact" className="button-outline">SHARE AN IDEA <ArrowUpRight size={15} /></Link></Reveal><Reveal delay={0.15}><div className="lab-graphic"><div className="flask flask-a">✳</div><div className="flask flask-b">◎</div><div className="flask flask-c">✦</div><span>TEST / LEARN / ITERATE</span></div></Reveal></section>
    <section className="contact-banner"><Reveal><span className="section-index">05 / HAVE SOMETHING IN MIND?</span><h2>Got a messy problem? <em>Let's talk.</em></h2><p>Product design, an AI prototype, or a rough idea that needs shaping. Send it over.</p></Reveal><Reveal delay={0.12} className="contact-actions"><a className="button-cream" href={`mailto:${profile.email}`}>SAY HELLO <ArrowUpRight size={16} /></a><LinkedInButton /><span className="contact-mail">{profile.email}</span></Reveal></section>
    <footer className="footer"><span>THE CURIOUS LAB © {new Date().getFullYear()} OPEYEMI OGUNBONA</span><span>BUILT WITH CURIOSITY <b>✳</b></span><Link href="#top">BACK TO TOP ↑</Link></footer>
  </>;
}

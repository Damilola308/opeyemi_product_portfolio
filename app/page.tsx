import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import LinkedInButton from '@/components/LinkedInButton';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

export default function Home() {
  return <>
    <header className="topbar"><div className="top-kicker">AI PRODUCT DESIGNER <b>•</b> PRODUCT BUILDER <b>•</b> TECHNOLOGY EXPLORER</div><nav><Link href="/about">ABOUT</Link><Link href="/work">WORK</Link><Link href="/experiments">EXPERIMENTS</Link><Link href="/contact">CONTACT</Link></nav><Link className="studio-button" href="/contact">LET'S TALK <span>↗</span></Link></header>
    <Hero />
    <Marquee />
    <section className="work-section" id="work">
      <Reveal><div className="section-heading"><div><span className="section-index">02 / SELECTED WORK</span><h2>A few things I <em>design,</em><br />build & explore.</h2></div><Link href="/work" className="view-all">VIEW ALL PROJECTS <ArrowUpRight size={15} /></Link></div></Reveal>
      <div className="project-grid">
        {projects.map((project, i) => <ProjectCard key={project.slug} project={project} index={i} featured={i === 0} />)}
        <Reveal className="more-wrap"><div className="more-card"><span>MORE IN THE LAB</span><Sparkles size={27} /><p>More projects and explorations are being added to the collection.</p><Link href="/work">EXPLORE THE WORK <ArrowUpRight size={15} /></Link></div></Reveal>
      </div>
    </section>
    <section className="about-strip"><Reveal className="about-label">03 / A LITTLE ABOUT ME</Reveal><Reveal delay={0.1}><h2>Designer by <em>curiosity.</em><br />Builder by <i>choice.</i></h2><p>I enjoy the full journey: understanding a problem, shaping an experience, designing the system and bringing useful products to life.</p><Link href="/about" className="under-link">GET TO KNOW ME <ArrowUpRight size={15} /></Link></Reveal><Reveal delay={0.2}><div className="about-stamp">CURIOUS<br />BY NATURE<br /><span>✳</span></div></Reveal></section>
    <section className="do-section">
      {[
        ['01', 'Design', 'AI-era product design: framing the problem, mapping flows and crafting interfaces in Figma that feel clear and considered.', 'purple'],
        ['02', 'Build', 'Vibe-building real, working prototypes and applications with AI tools, so ideas can be tested instead of just imagined.', 'orange'],
        ['03', 'Explore', 'Testing new models, tools and workflows in the open, and keeping notes on what actually works.', 'blue'],
      ].map(([n, t, d, c], i) => <Reveal key={n} delay={i * 0.1} className={`do-card ${c}`}><span>{n}</span><h3>{t}</h3><p>{d}</p></Reveal>)}
    </section>
    <section className="lab-section"><Reveal><span className="section-index">04 / THE EXPERIMENTAL SIDE</span><h2>Exploring ideas.<br /><em>Building tomorrow.</em></h2><p>A space for AI experiments, prototypes, new tools and unconventional ideas.</p><Link href="/experiments" className="button-outline">ENTER THE LAB <ArrowUpRight size={15} /></Link></Reveal><Reveal delay={0.15}><div className="lab-graphic"><div className="flask flask-a">✳</div><div className="flask flask-b">◎</div><div className="flask flask-c">✦</div><span>TEST / LEARN / ITERATE</span></div></Reveal></section>
    <section className="contact-banner"><Reveal><span className="section-index">05 / HAVE SOMETHING IN MIND?</span><h2>Let's build something <em>meaningful.</em></h2><p>I'm interested in thoughtful products, ambitious ideas and interesting problems.</p></Reveal><Reveal delay={0.12} className="contact-actions"><a className="button-cream" href={`mailto:${profile.email}`}>SAY HELLO <ArrowUpRight size={16} /></a><LinkedInButton /><span className="contact-mail">{profile.email}</span></Reveal></section>
    <footer className="footer"><span>THE CURIOUS LAB © {new Date().getFullYear()} OPEYEMI OGUNBONA</span><span>BUILT WITH CURIOSITY <b>✳</b></span><Link href="#top">BACK TO TOP ↑</Link></footer>
  </>;
}

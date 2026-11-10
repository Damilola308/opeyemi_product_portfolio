'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile } from '@/data/profile';
import { Home, UserRound, Layers3, FlaskConical, NotebookText, Mail, ArrowUpRight } from 'lucide-react';

const links = [
  { href: '/', label: 'HOME', icon: Home },
  { href: '/about', label: 'ABOUT', icon: UserRound },
  { href: '/work', label: 'WORK', icon: Layers3 },
  { href: '/experiments', label: 'EXPERIMENTS', icon: FlaskConical },
  { href: '/notes', label: 'NOTES', icon: NotebookText },
  { href: '/contact', label: 'CONTACT', icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <Link href="/" className="brand">THE<br />CURIOUS<br />LAB<span className="brand-dot">.</span></Link>
      <nav className="side-nav" aria-label="Main navigation">
        {links.map(({ href, label, icon: Icon }, i) => {
          const active = pathname === href || (href !== '/' && pathname.startsWith(href));
          return <Link className={`side-link ${active ? 'active' : ''}`} href={href} key={href}>
            <Icon size={17} strokeWidth={1.7} />
            <span><small>0{i + 1}</small>{label}</span>
            {active && <i />}
          </Link>;
        })}
      </nav>
      <div className="side-bottom">
        <div className="status-card"><span className="status-light" /> <small>STATUS</small><strong>Building cool things with AI.</strong><small>LOCATION</small><strong>Lagos, Nigeria</strong></div>
        <div className="side-note">Building in public.<br />Sharing what I learn.</div>
        {profile.socials.linkedin
          ? <a className="side-social" href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">CONNECT ON LINKEDIN <ArrowUpRight size={14}/></a>
          : <Link className="side-social" href="/contact">LET'S CONNECT <ArrowUpRight size={14}/></Link>}
      </div>
    </aside>
  );
}

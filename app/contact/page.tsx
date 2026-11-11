import { Mail, ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';
import LinkedInButton from '@/components/LinkedInButton';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Contact', description: 'Get in touch with Opeyemi Ogunbona about product design, AI prototypes or a rough idea that needs shaping.' };

export default function Contact() {
  const { email, socials } = profile;
  const links = [
    socials.github && { label: 'GITHUB', href: socials.github },
  ].filter(Boolean) as { label: string; href: string }[];
  return <div className="inner-page contact-page">
    <span className="section-index">05 / CONTACT</span>
    <h1 className="page-title">Got a messy<br /><em>problem?</em></h1>
    <p className="lead narrow">Product design, an AI prototype, or a rough idea that needs shaping. Send it over and I'll reply.</p>
    {email && <a className="contact-email" href={`mailto:${email}`}><Mail /> {email} <ArrowUpRight /></a>}
    <div className="contact-links"><LinkedInButton /></div>
    {links.length > 0 && <div className="contact-links">{links.map(l => <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="button-outline">{l.label} <ArrowUpRight size={15} /></a>)}</div>}
    <p className="small-note">Based in {profile.location}. Working with teams and founders worldwide.</p>
  </div>;
}

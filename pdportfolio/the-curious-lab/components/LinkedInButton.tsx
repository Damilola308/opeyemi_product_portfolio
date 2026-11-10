import { ArrowUpRight, Linkedin } from 'lucide-react';
import { profile } from '@/data/profile';

/** Renders only once a LinkedIn URL is set in data/profile.ts. */
export default function LinkedInButton({ className = 'button-linkedin' }: { className?: string }) {
  const href = profile.socials.linkedin;
  if (!href) return null;
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      <Linkedin size={16} /> CONNECT WITH ME ON LINKEDIN <ArrowUpRight size={15} />
    </a>
  );
}

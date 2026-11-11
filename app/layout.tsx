import type { Metadata } from 'next';
import './globals.css';
import './theme.css';
import { Plus_Jakarta_Sans, Instrument_Serif } from 'next/font/google';
import Sidebar from '@/components/Sidebar';

const sans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--f-sans', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--f-serif', display: 'swap' });

const siteUrl = 'https://opeyemiproductportfolio.vercel.app';
const siteTitle = 'Opeyemi Ogunbona — AI Product Designer in Lagos';
const siteDescription = 'AI Product Designer and vibe builder in Lagos. I design product concepts in Figma and build working prototypes with AI. See the work.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: '%s | Opeyemi Ogunbona' },
  description: siteDescription,
  openGraph: {
    title: siteTitle, description: siteDescription, url: siteUrl, siteName: 'The Curious Lab', type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Opeyemi Ogunbona, AI Product Designer and vibe builder' }],
  },
  twitter: { card: 'summary_large_image', title: siteTitle, description: siteDescription, images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${sans.variable} ${serif.variable}`}><body><Sidebar/><main id="top" className="main-shell">{children}</main></body></html>;
}

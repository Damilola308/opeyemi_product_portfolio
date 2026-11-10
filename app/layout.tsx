import type { Metadata } from 'next';
import './globals.css';
import './theme.css';
import { Plus_Jakarta_Sans, Instrument_Serif } from 'next/font/google';
import Sidebar from '@/components/Sidebar';

const sans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--f-sans', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--f-serif', display: 'swap' });

export const metadata: Metadata = {
  title: 'THE CURIOUS LAB — Opeyemi Ogunbona',
  description: 'I turn curiosity into intelligent experiences. Portfolio of Opeyemi Ogunbona: AI Product Designer, Product Builder and Technology Explorer.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${sans.variable} ${serif.variable}`}><body><Sidebar/><main id="top" className="main-shell">{children}</main></body></html>;
}

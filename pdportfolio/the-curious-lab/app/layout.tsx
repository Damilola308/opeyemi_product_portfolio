import type { Metadata } from 'next';
import './globals.css';
import './theme.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'THE CURIOUS LAB — Opeyemi Ogunbona',
  description: 'I turn curiosity into intelligent experiences. Portfolio of Opeyemi Ogunbona: AI Product Designer, Product Builder and Technology Explorer.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Sidebar/><main id="top" className="main-shell">{children}</main></body></html>;
}

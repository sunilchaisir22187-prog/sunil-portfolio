import type { Metadata } from 'next';
import { Space_Grotesk, Instrument_Serif, IBM_Plex_Mono } from 'next/font/google';
import './globals.scss';

const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' });
const serif = Instrument_Serif({ weight: '400', style: ['normal','italic'], subsets: ['latin'], variable: '--font-serif', display: 'swap', preload: false });
const mono = IBM_Plex_Mono({ weight: ['400','500'], subsets: ['latin'], variable: '--font-mono', display: 'swap', preload: false });
const siteUrl = 'https://sunil-human-variable.rarefern512.chatgpt.site';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Sunil Singh Chaisir — The Human Variable', template: '%s | Sunil Singh Chaisir' },
  description: 'Many worlds. One evolving story. Explore Sunil Singh Chaisir’s work in content strategy, brand partnerships, consumer research, and visual storytelling.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'en_IN', siteName: 'The Human Variable', title: 'Sunil Singh Chaisir — The Human Variable', description: 'Marketing, creativity, and the people behind the numbers.', images: [{url:'/opengraph-image.png',width:1200,height:630}] },
  twitter: { card:'summary_large_image', title:'Sunil Singh Chaisir — The Human Variable', description:'Many worlds. One evolving story.', images:['/opengraph-image.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en" className={`${space.variable} ${serif.variable} ${mono.variable}`}><body>{children}</body></html>;
}

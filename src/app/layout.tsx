import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KMBC Co. — Kuwait Modern Buildings Construction',
  description:
    'Integrated Technical Excellence. Precision engineering for industrial, residential, and civil infrastructure projects in Kuwait.',
  keywords: [
    'KMBC',
    'Kuwait construction',
    'modern buildings',
    'engineering',
    'infrastructure',
    'Kuwait City',
  ],
  openGraph: {
    title: 'KMBC Co. — Kuwait Modern Buildings Construction',
    description: 'Integrated Technical Excellence.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} grain-overlay antialiased`}>
        {children}
      </body>
    </html>
  );
}

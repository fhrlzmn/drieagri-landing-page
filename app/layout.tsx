import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import Header from '@/components/header';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DrieAgri',
  description:
    'Tumbuh bersama lebih dari 1.000 Petani dari 200 kota di Indonesia melalui teknologi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

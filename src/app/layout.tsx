import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Finance Tracker',
  description: 'Your finance tracking app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={GeistSans.className}>
        {children}
      </body>
    </html>
  );
}
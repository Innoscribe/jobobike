import React from 'react';
import { Metadata } from 'next';
import LandingPage from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'JOBOBIKE Norge | Premium El-sykler - Gratis Frakt & 2 Års Garanti',
  description: 'Kjøp premium el-sykler fra JOBOBIKE Norge. Fatbike, lastesykkel, pendlersykkel. Gratis frakt over 3000 kr. 2 års garanti. 300+ partnere i Europa. Bestill i dag!',
  keywords: 'el-sykkel norge, elektrisk sykkel, jobobike, fatbike, lastesykkel, pendlersykkel, el-sykkel pris, kjøp el-sykkel, gratis frakt, ebike norge',
  openGraph: {
    title: 'JOBOBIKE Norge - Premium El-sykler med Gratis Frakt',
    description: 'Norges største utvalg av premium el-sykler. Fatbike, lastesykkel og pendlersykler. Gratis frakt, 2 års garanti.',
    url: 'https://jobobike.no',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <LandingPage/>
    </main>
  );
}

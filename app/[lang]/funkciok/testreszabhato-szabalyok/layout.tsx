// app/[lang]/funkciok/testreszabhato-szabalyok/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testreszabható Szabályok | FoglaljOnline',
  description: 'Rugalmas nyitvatartás, speciális napok, zárási időszakok és egyedi foglalási feltételek. Tökéletes alkalmazkodás az éttermed működéséhez.',
  keywords: 'nyitvatartás kezelés, speciális napok, zárási időszakok, foglalási szabályok, éttermi időbeosztás, rugalmas beállítások',
};

export default function SzabalyokLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
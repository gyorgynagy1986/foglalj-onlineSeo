// app/[lang]/funkciok/qr-kod-bejelentkezes/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QR-kódos Bejelentkezés | FoglaljOnline',
  description: 'Egyedi QR-kódok minden foglaláshoz. Villámgyors check-in, PDF letöltés, biztonságos azonosítás. Modern vendégélmény egyetlen beolvasással.',
  keywords: 'QR kód, check-in rendszer, vendég azonosítás, éttermi bejelentkezés, digitális foglalás, QR kódos check-in',
};

export default function QrKodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
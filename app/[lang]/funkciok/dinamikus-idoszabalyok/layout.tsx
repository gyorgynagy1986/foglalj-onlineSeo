// app/[lang]/funkciok/dinamikus-idoszabalyok/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dinamikus Időszabályok | FoglaljOnline',
  description: 'Automatikus foglalási időtartam beállítása vendégszám, nap és időpont alapján. Optimalizáld a bevételt intelligens időkezeléssel.',
  keywords: 'foglalási idő, időtartam szabályozás, vendégszám alapú, dinamikus szabályok, asztaltérkép optimalizálás, éttermi időkezelés',
};

export default function DinamikusIdoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
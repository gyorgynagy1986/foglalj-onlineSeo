// app/[lang]/funkciok/ertesitesek/page.tsx
import { Metadata } from "next";
import NotificationsPageClient from "./NotificationsPageClient";

import { dictionariesFun } from "@/app/[lang]/dictionaries";

interface BongeszoErtesitesekPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: BongeszoErtesitesekPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await dictionariesFun[lang as keyof typeof dictionariesFun]();

  return {
    title: dict.ertesitesek.metadata.title,
    description: dict.ertesitesek.metadata.description,
  };
}

interface NotificationsPageProps {
  params: Promise<{ lang: string }>;
}

export default async function NotificationsPage({
  params,
}: NotificationsPageProps) {
  const { lang } = await params;
  const dict = await dictionariesFun[lang as keyof typeof dictionariesFun]();

  return <NotificationsPageClient dict={dict} lang={lang} />;
}

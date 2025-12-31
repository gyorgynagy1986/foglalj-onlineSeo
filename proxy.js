import { NextResponse } from "next/server";

const locales = ["en", "hu"];
const defaultLocale = "hu";


export function proxy(request) {
  const url = new URL(request.url);
  const { pathname } = url;

  // 1) Fájlok/assetek átengedése (gyors kilépés)
  if (pathname.includes(".")) return NextResponse.next();

  // 2) Már lokalizált útvonal? engedjük tovább
  const first = pathname.split("/")[1];
  if (locales.includes(first)) return NextResponse.next();

  // 3) Root: egyszeri redirect a legjobb nyelvre
  if (pathname === "/") {
    url.pathname = `/${defaultLocale}`; // mindig hu
    return NextResponse.redirect(url);
  }

  // 4) Egyéb nem lokalizált útvonalak: rewrite a default alá (nincs extra kör)
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}
export const config = {
  matcher: [
    // fussunk mindenre az _next és api kivételével
    "/((?!api|_next).*)",
  ],
};

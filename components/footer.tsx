import Link from "next/link";

interface FooterProps {
  dict: {
    brand: {
      name: string;
      description: string;
    };
    sections: {
      features: {
        // Átnevezve Product-ról Features-re a kérésednek megfelelően
        title: string;
        links: Array<{
          text: string;
          href: string;
        }>;
      };
      resources: {
        // ÚJ: Ide jön a Blog, Tudástár, E-book
        title: string;
        links: Array<{
          text: string;
          href: string;
        }>;
      };
      support: {
        title: string;
        description?: string; // Opcionális, ha kellene alá kis szöveg
        links: Array<{
          text: string;
          href: string;
        }>;
      };
      legal: {
        title: string;
        links: Array<{
          text: string;
          href: string;
        }>;
      };
    };
    bottom: {
      copyright: string;
      madeWith: string;
      location: string;
    };
  };
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-white py-16 pb-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a4a3a 0%, #0d5e4b 50%, #0f6b55 100%)",
      }}
      role="contentinfo"
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8">
        {/* GRID MÓDOSÍTÁS: lg:grid-cols-5, hogy elférjen az új oszlop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* 1. Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-[#0d5e4b] font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-white">
                {dict.brand.name}
              </span>
            </div>
            <p className="text-[0.95rem] text-white/60 leading-relaxed max-w-[280px]">
              {dict.brand.description}
            </p>


          </div>

          {/* 2. Features (Funkciók) */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              {dict.sections.features.title}
            </h4>
            <ul className="space-y-3">
              {dict.sections.features.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 no-underline text-[0.95rem] transition-colors duration-200 hover:text-emerald-300"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Resources (Blog & Források) - ÚJ SZEKCIÓ */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              {dict.sections.resources.title}
            </h4>
            <ul className="space-y-3">
              {dict.sections.resources.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 no-underline text-[0.95rem] transition-colors duration-200 hover:text-emerald-300"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Support */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              {dict.sections.support.title}
            </h4>
            <ul className="space-y-3">
              {dict.sections.support.links.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("mailto:") ||
                  link.href.startsWith("tel:") ? (
                    <a
                      href={link.href}
                      className="text-white/60 no-underline text-[0.95rem] transition-colors duration-200 hover:text-emerald-300"
                    >
                      {link.text}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/60 no-underline text-[0.95rem] transition-colors duration-200 hover:text-emerald-300"
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Legal */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              {dict.sections.legal.title}
            </h4>
            <ul className="space-y-3">
              {dict.sections.legal.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 no-underline text-[0.95rem] transition-colors duration-200 hover:text-emerald-300"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>
            © {currentYear} {dict.brand.name} by{" "}
            <Link
              href="https://www.foglaljonline.hu"
              target="_blank"
              rel="noopener"
              className="text-white/70 no-underline hover:text-emerald-300 transition-colors"
            >
              FoglaljOnline
            </Link>
            . {dict.bottom.copyright}
          </p>
          <p className="flex items-center gap-1.5">
            {dict.bottom.madeWith}
            <span className="text-red-400">❤️</span>
            {dict.bottom.location}
          </p>
        </div>
      </div>
    </footer>
  );
}

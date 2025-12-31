import Link from "next/link";

interface FooterProps {
  dict: {
    brand: {
      name: string;
      description: string;
    };
    sections: {
      product: {
        title: string;
        links: Array<{
          text: string;
          href: string;
        }>;
      };
      support: {
        title: string;
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

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
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

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              {dict.sections.product.title}
            </h4>
            <ul className="space-y-3">
              {dict.sections.product.links.map((link, index) => (
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

          {/* Support */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              {dict.sections.support.title}
            </h4>
            <ul className="space-y-3">
              {dict.sections.support.links.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("mailto:") ? (
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

          {/* Legal */}
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
              href="https://www.bukio.hu"
              target="_blank"
              rel="noopener"
              className="text-white/70 no-underline hover:text-emerald-300 transition-colors"
            >
              Bukio
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
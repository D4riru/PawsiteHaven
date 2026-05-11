import type { ReactNode } from 'react';
import Link from 'next/link';

function SocialIcon({ children, label, href }: { children: ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition hover:bg-white hover:text-black focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
    >
      {children}
    </a>
  );
}

interface HomeFooterProps {
  /** Base path for in-app links (e.g. `/` guest, `/home` when logged in). */
  basePath?: string;
}

export function HomeFooter({ basePath = '/' }: HomeFooterProps) {
  const aboutHref = basePath === '/' ? '/#about' : `${basePath}#about`;

  return (
    <footer
      id="contact"
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 scroll-mt-4 overflow-x-clip bg-transparent"
    >
      <div className="w-full border-t border-gray-100 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 xl:px-12">
          <form
            className="mx-auto flex w-full max-w-3xl items-stretch gap-0 overflow-hidden rounded-full border border-gray-300 bg-[#f2f2f2] pl-4 shadow-sm ring-1 ring-black/5 sm:max-w-4xl sm:pl-5 lg:max-w-5xl"
            action="https://www.google.com/search"
            method="get"
            target="_blank"
            rel="noopener noreferrer"
            role="search"
          >
            <span className="flex shrink-0 items-center text-gray-500" aria-hidden>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <input
              type="search"
              name="q"
              placeholder="Frequently Asked Questions"
              className="min-w-0 flex-1 border-0 bg-transparent py-3 pl-2 pr-2 text-sm text-gray-800 outline-none placeholder:text-gray-500 sm:py-3.5 sm:text-base"
              autoComplete="off"
              aria-label="Search frequently asked questions"
            />
            <button
              type="submit"
              className="m-1 shrink-0 rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:px-6 sm:text-base"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="relative w-full bg-[#FF8A00] px-4 pb-24 pt-10 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:text-left">
              <div className="relative shrink-0 rounded-full">
                <img
                  src="/logo.png"
                  alt=""
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain sm:h-30 sm:w-30"
                  role="presentation"
                />
              </div>
              <div>
                <Link
                  href={basePath}
                  className="inline-block text-2xl font-bold leading-tight text-black hover:underline sm:text-3xl"
                >
                  PawSite Haven
                </Link>
                <p className="mt-1 max-w-xl text-md text-white/95 sm:text-base">
                  ~Connecting hearts with adoptable pets, one paw at a time.~
                </p>
              </div>
            </div>

            <nav
              className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-white/95 sm:text-base"
              aria-label="Footer"
            >
              <Link href={basePath} className="underline-offset-4 hover:underline">
                Home
              </Link>
              <Link href={aboutHref} className="underline-offset-4 hover:underline">
                About Us
              </Link>
              <a href="#contact" className="underline-offset-4 hover:underline">
                Contact Us
              </a>
            </nav>

            <div className="mt-8 w-full">
              <p className="mb-4 text-center text-lg font-bold text-black">Contact Us:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <SocialIcon label="Facebook" href="https://www.facebook.com/">
                  <span className="text-xs font-bold">f</span>
                </SocialIcon>
                <SocialIcon label="TikTok" href="https://www.tiktok.com/">
                  <span className="text-xs font-bold">♪</span>
                </SocialIcon>
                <SocialIcon label="YouTube" href="https://www.youtube.com/">
                  <span className="text-xs font-bold">▶</span>
                </SocialIcon>
                <SocialIcon label="Instagram" href="https://www.instagram.com/">
                  <span className="text-xs font-bold">◎</span>
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>

        <a
          href="mailto:hello@pawsitehaven.com?subject=Live%20chat%20inquiry"
          className="absolute bottom-5 right-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg ring-1 ring-black/10 transition hover:bg-gray-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-black/20 sm:bottom-6 sm:right-6 md:right-10 lg:right-12"
        >
          <span className="text-lg" aria-hidden>
            💬
          </span>
          Live Chat
        </a>
      </div>

      <div className="w-full bg-black px-4 py-4 text-center text-xs text-white sm:text-sm">
        <p>© {new Date().getFullYear()} PawSite Haven. All rights reserved.</p>
      </div>
    </footer>
  );
}

import type { ReactNode } from 'react';
import Link from 'next/link';

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 512" fill="white" className={className} aria-hidden="true">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  );
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" fill="white" className={className} aria-hidden="true">
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 576 512" fill="white" className={className} aria-hidden="true">
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" fill="white" className={className} aria-hidden="true">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}

function SocialIcon({ children, label, href }: { children: ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-[#FFA800] transition-colors duration-300 hover:bg-[#FFA800] hover:text-black focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
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
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <SocialIcon label="Facebook" href="https://www.facebook.com/">
                  <FacebookIcon className="h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5" />
                </SocialIcon>
                <SocialIcon label="TikTok" href="https://www.tiktok.com/">
                  <TiktokIcon className="h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5" />
                </SocialIcon>
                <SocialIcon label="YouTube" href="https://www.youtube.com/">
                  <YoutubeIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </SocialIcon>
                <SocialIcon label="Instagram" href="https://www.instagram.com/">
                  <InstagramIcon className="h-5 w-5 sm:h-6 sm:w-6" />
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

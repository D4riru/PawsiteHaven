'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  showNav?: boolean;
  showLogin?: boolean;
  loginHref?: string;
  loggedIn?: boolean;
  userEmail?: string | null;
  homeHref?: string;
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PersonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 21v-1a7 7 0 0 1 14 0v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const Header: React.FC<HeaderProps> = ({
  showNav = true,
  showLogin = true,
  loginHref = '/auth/login',
  loggedIn = false,
  userEmail = null,
  homeHref,
}) => {
  const router = useRouter();
  const brandHref = homeHref ?? '/';

  const handleLogout = () => {
    if (typeof window === 'undefined') return;
    sessionStorage.removeItem('pawsiteLoggedIn');
    sessionStorage.removeItem('userEmail');
    router.push('/');
    router.refresh();
  };

  return (
    <header className="w-full bg-black text-white shadow-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:gap-6 lg:px-10 xl:px-20 lg:py-3.5">
        <Link href={brandHref} className="flex shrink-0 items-center gap-2.5 lg:min-w-[200px]">
          <img
            src="/logo1.png"
            alt="Pawsite Haven"
            width={44}
            height={44}
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
          />
          <span className="text-lg font-bold tracking-tight text-white sm:text-xl md:text-2xl">Pawsite Haven</span>
        </Link>

        <form
          action="https://www.google.com/search"
          method="get"
          target="_blank"
          rel="noopener noreferrer"
          role="search"
          className="relative flex w-full flex-1 items-center lg:max-w-2xl lg:mx-auto"
        >
          <input
            type="search"
            name="q"
            placeholder="What are you looking for ..."
            className="w-full rounded-full border-0 bg-[#f2f2f2] py-2.5 pl-4 pr-12 text-[0.9375rem] text-black placeholder:text-gray-500 outline-none ring-1 ring-black/5 focus:ring-2 focus:ring-[#FFA800] sm:py-3 sm:pl-5 sm:pr-14 sm:text-base"
            autoComplete="off"
            aria-label="Search"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-black hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA800] sm:right-2 sm:h-9 sm:w-9"
            aria-label="Submit search"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
        </form>

        {(showNav || showLogin || loggedIn) && (
          <nav className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-white sm:gap-7 sm:text-base lg:ml-auto lg:justify-end lg:shrink-0">
            {showNav && (
              <>
                <a href={`${brandHref}#about`} className="transition hover:text-[#FFA800] focus:outline-none focus-visible:text-[#FFA800]">
                  About Us
                </a>
                <a
                  href={`${brandHref}#contact`}
                  className="transition hover:text-[#FFA800] focus:outline-none focus-visible:text-[#FFA800]"
                >
                  Contact Us
                </a>
              </>
            )}
            {loggedIn ? (
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <span className="max-w-[10rem] truncate text-xs text-white/90 sm:max-w-[14rem] sm:text-sm" title={userEmail ?? ''}>
                  {userEmail ?? 'Signed in'}
                </span>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-full border border-white/40 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA800] sm:text-sm"
                >
                  Log out
                </button>
              </div>
            ) : (
              showLogin && (
                <Link
                  href={loginHref}
                  className="flex items-center gap-1.5 transition hover:text-[#FFA800] focus:outline-none focus-visible:text-[#FFA800]"
                >
                  <span>My Account</span>
                  <PersonIcon className="h-[1.1em] w-[1.1em] shrink-0" />
                </Link>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

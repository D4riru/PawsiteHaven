'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/app/components';
import { AboutSection } from './AboutSection';
import { HeroSection } from './HeroSection';
import { HomeFooter } from './HomeFooter';
import { MapGallerySection } from './MapGallerySection';
import { ShelterBannersSection } from './ShelterBannersSection';
import { TestimonialsSection } from './TestimonialsSection';

export type HomePageMode = 'guest' | 'protected';

export function HomePageContent({ mode }: { mode: HomePageMode }) {
  const router = useRouter();
  const [ready, setReady] = useState(mode === 'guest');
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    if (mode === 'guest') {
      setReady(true);
      return;
    }
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('pawsiteLoggedIn') !== '1') {
      router.replace('/auth/login');
      return;
    }
    setUserEmail(sessionStorage.getItem('userEmail'));
    setReady(true);
  }, [mode, router]);

  if (!ready) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-white text-gray-500" aria-busy="true">
        Loading…
      </div>
    );
  }

  const loggedIn = mode === 'protected';

  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col overflow-x-hidden bg-white">
      <Header
        showNav={true}
        showLogin={!loggedIn}
        loginHref="/auth/login"
        loggedIn={loggedIn}
        userEmail={userEmail}
        homeHref={loggedIn ? '/home' : '/'}
      />

      <main className="w-full min-w-0 flex-1">
        <HeroSection loggedIn={loggedIn} />
        <ShelterBannersSection />
        <MapGallerySection />
        <TestimonialsSection />
        <AboutSection />
      </main>

      <HomeFooter basePath={loggedIn ? '/home' : '/'} />
    </div>
  );
}

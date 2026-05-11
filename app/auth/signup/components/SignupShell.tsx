'use client';

import Image from 'next/image';

function SignupFooter() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 px-6 py-6 text-sm text-gray-600 md:flex-row md:px-20">
      <div>© {new Date().getFullYear()} PawSite Haven. All rights reserved.</div>
      <div className="flex flex-wrap justify-center gap-6">
        <a href="#privacy" className="hover:text-orange-600">
          Privacy Policy
        </a>
        <a href="#terms" className="hover:text-orange-600">
          Terms of Service
        </a>
        <a href="#help" className="hover:text-orange-600">
          Help Center
        </a>
      </div>
    </footer>
  );
}

export function SignupShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-12">
        <div className="flex flex-col justify-center px-6 py-10 md:col-span-6 md:px-10 md:py-12 lg:pl-16 xl:pl-20">
          <div className="mx-auto w-full max-w-lg">{children}</div>
        </div>

        <div className="relative hidden min-h-[240px] md:col-span-6 md:block md:min-h-full">
          <Image
            src="/kiten.png"
            alt="Tabby kitten with paw raised"
            fill
            priority
            className="object-cover object-[82%_30%] lg:object-[76%_24%]"
            sizes="(max-width: 768px) 0vw, 50vw"
          />
        </div>
      </main>

      <SignupFooter />
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from '@/app/components';
import { Input } from '@/app/components';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    setLoading(true);

    setTimeout(() => {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('pawsiteLoggedIn', '1');
        sessionStorage.setItem('userEmail', email.trim());
      }
      setLoading(false);
      router.push('/home');
    }, 600);
  };

  return (
    <main className="min-h-screen relative flex items-center justify-center bg-amber-500 px-6">
      <div className="hidden md:block pointer-events-none absolute left-0 bottom-0 z-10 w-80 md:w-[40rem] opacity-100">
        <Image
          src="/arf.png"
          alt="Decorative dog"
          width={640}
          height={390}
          className="w-full h-auto object-cover rounded-tr-[2rem] rounded-br-[2rem]"
        />
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12 pt-8">
        <section className="z-20 text-white self-start flex flex-col items-center md:items-start space-y-6 md:w-1/2">
          <div className="flex items-center space-x-6">
            <Image src="/logo.png" alt="Logo" width={130} height={110} className="object-contain" />

            <div className="flex flex-col">
              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">PawSite</h1>
              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">Haven</h1>
            </div>
          </div>
        </section>

        <section className="relative bg-white rounded-2xl w-full max-w-lg p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Log in or sign up</h2>
          </div>

          <form onSubmit={handleContinue} className="space-y-4">
            <Input
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button fullWidth loading={loading} type="submit">
              Continue
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>

            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-400 font-medium">OR</span>
            </div>
          </div>

          <div className="space-y-4">
            <Link href="/auth/signup/step1">
              <Button fullWidth variant="primary">
                Create an Account
              </Button>
            </Link>

            <div className="space-y-4"></div>
            <Button fullWidth variant="outlined" type="button">
              More Login Options
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}

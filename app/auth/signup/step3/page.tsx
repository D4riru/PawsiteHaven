'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Input, StepProgress } from '@/app/components';
import { SignupShell } from '../components/SignupShell';
import { SIGNUP_PROGRESS_STEPS } from '../constants';

export default function SignupStep3() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storedEmail = sessionStorage.getItem('signupEmail');
    if (!storedEmail) {
      router.replace('/auth/signup/step1');
      return;
    }
    setEmail(storedEmail);
  }, [router]);

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const signupData = {
        email,
        phone: sessionStorage.getItem('signupPhone'),
        birthday: sessionStorage.getItem('signupBirthday'),
        password,
        createdAt: new Date().toISOString(),
      };

      sessionStorage.setItem('signupData', JSON.stringify(signupData));

      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('pawsiteLoggedIn', '1');
        sessionStorage.setItem('userEmail', email);
        sessionStorage.removeItem('signupEmail');
        sessionStorage.removeItem('signupPhone');
        sessionStorage.removeItem('signupBirthday');
        router.push('/home');
      }, 1000);
    } catch (_) {
      setErrors({ form: 'Something went wrong. Please try again.' });
      setLoading(false);
    }
  };

  return (
    <SignupShell>
      <div className="mb-8 md:mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">Create an account</h1>
        <p className="mt-2 text-gray-600">
          Already have an account?{' '}
          <Link href="/auth/login" className="font-semibold text-black underline underline-offset-2 decoration-1 hover:opacity-80">
            Log in
          </Link>
        </p>
      </div>

      <StepProgress steps={SIGNUP_PROGRESS_STEPS} currentStep={3} />

      <form onSubmit={handleNext} className="space-y-6">
        {errors.form && <p className="text-sm text-red-500">{errors.form}</p>}

        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            label="What's your password?"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) {
                const next = { ...errors };
                delete next.password;
                setErrors(next);
              }
            }}
            error={errors.password}
            className="pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[2.35rem] text-sm text-gray-500 hover:text-gray-800 md:top-[2.4rem]"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <Button type="submit" variant="secondary" fullWidth size="lg" loading={loading}>
          {loading ? 'Creating account...' : 'Next'}
        </Button>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 font-bold text-gray-400">OR</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Button type="button" variant="outlined" className="justify-center">
            <svg className="h-5 w-5" fill="#1877F2" viewBox="0 0 24 24" aria-hidden>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Sign up with Facebook</span>
          </Button>
          <Button type="button" variant="outlined" className="justify-center">
            <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span>Sign up with Google</span>
          </Button>
        </div>
      </form>
    </SignupShell>
  );
}

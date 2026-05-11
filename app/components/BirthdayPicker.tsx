'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Select } from '@/app/components';

const MONTHS = [
  { value: '01', label: 'January' },
  { value: '02', label: 'February' },
  { value: '03', label: 'March' },
  { value: '04', label: 'April' },
  { value: '05', label: 'May' },
  { value: '06', label: 'June' },
  { value: '07', label: 'July' },
  { value: '08', label: 'August' },
  { value: '09', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' },
] as const;

function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

function parseIso(value: string): { y: string; m: string; d: string } {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  if (!m) return { y: '', m: '', d: '' };
  return { y: m[1], m: m[2], d: m[3] };
}

export interface BirthdayPickerProps {
  value: string;
  onChange: (isoDate: string) => void;
  error?: string;
  disabled?: boolean;
}

export function BirthdayPicker({ value, onChange, error, disabled }: BirthdayPickerProps) {
  const parsed = parseIso(value);
  const [year, setYear] = useState(parsed.y);
  const [month, setMonth] = useState(parsed.m);
  const [day, setDay] = useState(parsed.d);

  useEffect(() => {
    const p = parseIso(value);
    setYear(p.y);
    setMonth(p.m);
    setDay(p.d);
  }, [value]);

  const emit = useCallback(
    (y: string, m: string, d: string) => {
      if (!y || !m || !d) {
        onChange('');
        return;
      }
      const yi = Number(y);
      const mi = Number(m);
      const di = Number(d);
      const max = daysInMonth(yi, mi);
      const clamped = Math.min(di, max);
      const dStr = pad2(clamped);
      if (dStr !== d) setDay(dStr);
      onChange(`${y}-${m}-${dStr}`);
    },
    [onChange],
  );

  const yearOptions = useMemo(() => {
    const max = new Date().getFullYear() - 13;
    const min = max - 90;
    const opts: { value: string; label: string }[] = [];
    for (let y = max; y >= min; y--) {
      opts.push({ value: String(y), label: String(y) });
    }
    return opts;
  }, []);

  const dayOptions = useMemo(() => {
    if (!month || !year) {
      return Array.from({ length: 31 }, (_, i) => ({
        value: pad2(i + 1),
        label: String(i + 1),
      }));
    }
    const max = daysInMonth(Number(year), Number(month));
    return Array.from({ length: max }, (_, i) => ({
      value: pad2(i + 1),
      label: String(i + 1),
    }));
  }, [month, year]);

  const handleMonth = (v: string) => {
    setMonth(v);
    emit(year, v, day);
  };

  const handleYear = (v: string) => {
    setYear(v);
    emit(v, month, day);
  };

  const handleDay = (v: string) => {
    setDay(v);
    emit(year, month, v);
  };

  return (
    <div className="space-y-2">
      <p className="text-xs font-medium uppercase tracking-wide text-gray-500">What&apos;s your birthday?</p>
      <div
        className={`grid grid-cols-1 gap-3 rounded-xl border bg-gray-50/90 p-4 sm:grid-cols-3 ${error ? 'border-red-400' : 'border-gray-200'}`}
        role="group"
        aria-label="Birthday"
      >
        <Select
          label="Month"
          options={MONTHS.map((x) => ({ value: x.value, label: x.label }))}
          value={month}
          onChange={(e) => handleMonth(e.target.value)}
          disabled={disabled}
        />
        <Select
          label="Day"
          options={dayOptions}
          value={day}
          onChange={(e) => handleDay(e.target.value)}
          disabled={disabled}
        />
        <Select
          label="Year"
          options={yearOptions}
          value={year}
          onChange={(e) => handleYear(e.target.value)}
          disabled={disabled}
        />
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

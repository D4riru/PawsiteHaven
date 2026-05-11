import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  ...props
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`
          w-full px-4 py-3 rounded-lg border transition-all outline-none
          ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-orange-200 focus:border-orange-400'}
          focus:ring-2
          ${className}
        `}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
      {helperText && !error && <p className="text-xs text-gray-400">{helperText}</p>}
    </div>
  );
};

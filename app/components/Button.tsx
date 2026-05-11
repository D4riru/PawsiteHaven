import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2';

  const variantStyles = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600 active:scale-95 shadow-md',
    secondary: 'bg-gray-300 text-white hover:bg-gray-400',
    outlined: 'border-2 border-gray-800 text-gray-800 hover:bg-gray-50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? 'opacity-60 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {loading && <span className="animate-spin">⏳</span>}
      {children}
    </button>
  );
};

import React from 'react';
import { cn } from '@/lib/utils';

export const Button = ({
  children,
  className,
  isPrimary = false,
  isDisabled = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-lg transition-all focus:outline-none focus:ring',
        isPrimary
          ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
        isDisabled && 'opacity-50 cursor-not-allowed',
        className // Allow custom classes to be passed in
      )}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

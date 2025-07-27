import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles - clean and modern
          'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-smooth focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          
          // Size variants
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          
          // Style variants - modern & clean
          {
            // Primary - Sophisticated blue
            'bg-primary-500 text-white hover:bg-primary-600 shadow-soft hover:shadow-soft-md':
              variant === 'primary',
              
            // Secondary - Light background
            'bg-primary-50 text-primary-700 hover:bg-primary-100':
              variant === 'secondary',
              
            // Outline - Clean border
            'border border-neutral-300 text-text-primary hover:border-neutral-400 hover:bg-neutral-50':
              variant === 'outline',
              
            // Ghost - Minimal
            'text-text-secondary hover:text-text-primary hover:bg-neutral-50':
              variant === 'ghost',
          },
          
          // Full width
          {
            'w-full': fullWidth,
          },
          
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
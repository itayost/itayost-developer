import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'brutal' | 'glow' | 'neon' | 'split' | 'glass' | 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  pulse?: boolean;
  shadow?: 'none' | 'brutal' | 'glow' | 'soft';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'brutal', 
    size = 'md', 
    fullWidth,
    loading,
    icon,
    iconPosition = 'left',
    pulse,
    shadow = 'brutal',
    children,
    disabled,
    ...props 
  }, ref) => {
    
    // Size classes
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-10 py-5 text-xl',
    };
    
    // Variant classes
    const variantClasses = {
      // Neo-brutalist - The signature style
      brutal: cn(
        'bg-neon-yellow text-black font-bold border-4 border-black',
        'transition-all duration-300',
        !disabled && 'hover:shadow-brutal-lg hover:-translate-x-1 hover:-translate-y-1',
        !disabled && 'active:shadow-brutal-sm active:translate-x-1 active:translate-y-1',
        shadow === 'brutal' && 'shadow-brutal'
      ),
      
      // Gradient glow - For primary CTAs
      glow: cn(
        'bg-gradient-to-r from-neon-purple to-neon-blue text-white font-bold',
        'rounded-full transition-all duration-300',
        !disabled && 'hover:scale-105 hover:shadow-neon-purple',
        !disabled && 'active:scale-95',
        shadow === 'glow' && 'shadow-neon-purple',
        pulse && 'animate-pulse-glow'
      ),
      
      // Neon outline - Cyberpunk style
      neon: cn(
        'bg-transparent text-neon-purple font-bold border-2 border-neon-purple',
        'relative overflow-hidden transition-all duration-300',
        !disabled && 'hover:text-white hover:shadow-neon-purple hover:border-neon-purple',
        'before:content-[""] before:absolute before:top-0 before:left-[-100%]',
        'before:w-full before:h-full before:bg-gradient-to-r',
        'before:from-transparent before:via-neon-purple/20 before:to-transparent',
        !disabled && 'before:transition-all before:duration-500 hover:before:left-[100%]'
      ),
      
      // Split gradient - Dynamic two-tone
      split: cn(
        'text-white font-bold relative overflow-hidden',
        'bg-gradient-to-br from-neon-blue via-neon-blue to-neon-purple',
        'bg-[length:200%_200%] bg-[position:0%_0%]',
        'transition-all duration-500',
        !disabled && 'hover:bg-[position:100%_100%]',
        'border-2 border-black'
      ),
      
      // Glassmorphism - Premium feel
      glass: cn(
        'bg-white/10 backdrop-blur-md text-white font-medium',
        'border border-white/20 rounded-smooth',
        'transition-all duration-300',
        !disabled && 'hover:bg-white/20 hover:shadow-glass',
        shadow === 'soft' && 'shadow-soft-md'
      ),
      
      // Classic primary - When you need subtle
      primary: cn(
        'bg-primary-500 text-white font-medium rounded-smooth',
        'transition-all duration-200',
        !disabled && 'hover:bg-primary-600 hover:shadow-soft-md',
        shadow === 'soft' && 'shadow-soft'
      ),
      
      // Outline - Clean and simple
      outline: cn(
        'bg-transparent text-text-primary font-medium',
        'border-2 border-neutral-300 rounded-smooth',
        'transition-all duration-200',
        !disabled && 'hover:border-neutral-400 hover:bg-neutral-50'
      ),
      
      // Ghost - Minimal
      ghost: cn(
        'bg-transparent text-text-secondary font-medium',
        'transition-all duration-200',
        !disabled && 'hover:text-text-primary hover:bg-neutral-50',
        'rounded-smooth'
      ),
    };
    
    // Loading spinner component
    const LoadingSpinner = () => (
      <svg 
        className="animate-spin h-5 w-5" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );
    
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center gap-2',
          'font-bold transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:ring-offset-2',
          
          // Disabled states
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'disabled:transform-none disabled:shadow-none',
          
          // Size
          sizeClasses[size],
          
          // Variant
          variantClasses[variant],
          
          // Full width
          fullWidth && 'w-full',
          
          // Custom className
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {/* Loading state */}
        {loading ? (
          <>
            <LoadingSpinner />
            <span>טוען...</span>
          </>
        ) : (
          <>
            {/* Icon on the left */}
            {icon && iconPosition === 'left' && (
              <span className="inline-flex">{icon}</span>
            )}
            
            {/* Button text */}
            {children}
            
            {/* Icon on the right */}
            {icon && iconPosition === 'right' && (
              <span className="inline-flex">{icon}</span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
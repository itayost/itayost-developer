import { cn } from '@/lib/utils';
import { forwardRef, InputHTMLAttributes, useState } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  helper?: string;
  required?: boolean;
  variant?: 'brutal' | 'neon' | 'glass' | 'underline' | 'minimal';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  showCharCount?: boolean;
  maxCharCount?: number;
  animated?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    label, 
    error, 
    success,
    helper,
    required, 
    id,
    variant = 'brutal',
    icon,
    iconPosition = 'left',
    showCharCount,
    maxCharCount,
    animated,
    value,
    onChange,
    ...props 
  }, ref) => {
    
    const [charCount, setCharCount] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    
    // Handle character counting
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (showCharCount) {
        setCharCount(e.target.value.length);
      }
      if (onChange) {
        onChange(e);
      }
    };
    
    // Variant styles
    const variantClasses = {
      // Neo-brutalist - Bold and distinctive
      brutal: cn(
        'w-full px-4 py-3 text-text-primary bg-white',
        'border-4 border-black shadow-brutal-sm',
        'transition-all duration-200',
        'focus:shadow-brutal focus:outline-none',
        error && 'border-danger bg-danger/5',
        success && 'border-success bg-success/5',
        'placeholder:text-text-tertiary'
      ),
      
      // Neon - Cyberpunk glow
      neon: cn(
        'w-full px-4 py-3 text-text-primary',
        'bg-white/5 backdrop-blur-sm',
        'border-2 border-neon-purple/30',
        'transition-all duration-300',
        'focus:border-neon-purple focus:shadow-neon-purple focus:outline-none',
        'focus:bg-neon-purple/5',
        error && 'border-danger shadow-danger/50',
        success && 'border-success shadow-success/50',
        'placeholder:text-neon-purple/50'
      ),
      
      // Glass - Premium feel
      glass: cn(
        'w-full px-4 py-3 text-text-primary',
        'bg-white/10 backdrop-blur-md',
        'border border-white/20 rounded-smooth',
        'transition-all duration-300',
        'focus:bg-white/20 focus:border-white/40 focus:outline-none',
        'focus:shadow-glass-sm',
        error && 'border-danger/50 bg-danger/10',
        success && 'border-success/50 bg-success/10',
        'placeholder:text-text-tertiary'
      ),
      
      // Underline - Minimalist
      underline: cn(
        'w-full px-0 py-3 text-text-primary',
        'bg-transparent border-0 border-b-4',
        isFocused ? 'border-neon-purple' : 'border-neutral-300',
        'transition-all duration-300',
        'focus:outline-none',
        error && 'border-danger',
        success && 'border-success',
        'placeholder:text-text-tertiary'
      ),
      
      // Minimal - Clean and simple
      minimal: cn(
        'w-full px-4 py-3 text-text-primary bg-white',
        'border-2 border-neutral-200 rounded-smooth',
        'transition-all duration-200',
        'focus:border-primary-500 focus:outline-none',
        'focus:ring-2 focus:ring-primary-500/10',
        'hover:border-neutral-300',
        error && 'border-danger focus:border-danger focus:ring-danger/10',
        success && 'border-success focus:border-success focus:ring-success/10',
        'placeholder:text-text-tertiary'
      ),
    };
    
    // Label animation classes
    const labelClasses = cn(
      'block text-sm font-bold mb-2',
      'transition-all duration-200',
      isFocused && variant === 'brutal' && 'text-neon-purple',
      isFocused && variant === 'neon' && 'text-neon-purple animate-pulse-soft',
      error && 'text-danger',
      success && 'text-success'
    );
    
    return (
      <div className={cn('w-full', animated && 'animate-fade-up')}>
        {/* Label */}
        {label && (
          <label 
            htmlFor={id} 
            className={labelClasses}
          >
            {label}
            {required && <span className="text-danger ml-1">*</span>}
          </label>
        )}
        
        {/* Input wrapper for icon support */}
        <div className="relative">
          {/* Left icon */}
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">
              {icon}
            </div>
          )}
          
          {/* Input field */}
          <input
            ref={ref}
            id={id}
            value={value}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              variantClasses[variant],
              icon && iconPosition === 'left' && 'pl-10',
              icon && iconPosition === 'right' && 'pr-10',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              className
            )}
            maxLength={maxCharCount}
            {...props}
          />
          
          {/* Right icon */}
          {icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary">
              {icon}
            </div>
          )}
          
          {/* Character counter */}
          {showCharCount && maxCharCount && (
            <div 
              className={cn(
                'absolute right-3 bottom-[-20px] text-xs',
                charCount >= maxCharCount * 0.9 ? 'text-warning' : 'text-text-tertiary',
                charCount >= maxCharCount && 'text-danger font-bold'
              )}
            >
              {charCount}/{maxCharCount}
            </div>
          )}
          
          {/* Animated underline for brutal variant */}
          {variant === 'brutal' && isFocused && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple to-neon-blue animate-shimmer" />
          )}
        </div>
        
        {/* Helper/Error/Success messages */}
        {(helper || error || success) && (
          <div className="mt-2 flex items-start gap-1">
            {error && (
              <>
                <svg className="w-4 h-4 text-danger flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-danger font-medium">{error}</p>
              </>
            )}
            {success && (
              <>
                <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-success font-medium">{success}</p>
              </>
            )}
            {helper && !error && !success && (
              <p className="text-sm text-text-tertiary">{helper}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
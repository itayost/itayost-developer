import { cn } from '@/lib/utils';
import { forwardRef, TextareaHTMLAttributes, useState } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  success?: string;
  helper?: string;
  required?: boolean;
  variant?: 'brutal' | 'neon' | 'glass' | 'minimal';
  showCharCount?: boolean;
  maxCharCount?: number;
  animated?: boolean;
  autoResize?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    label, 
    error, 
    success,
    helper,
    required, 
    id,
    variant = 'brutal',
    showCharCount,
    maxCharCount,
    animated,
    autoResize,
    value,
    onChange,
    rows = 4,
    ...props 
  }, ref) => {
    
    const [charCount, setCharCount] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    
    // Handle character counting and auto-resize
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (showCharCount) {
        setCharCount(e.target.value.length);
      }
      
      // Auto-resize functionality
      if (autoResize) {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
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
        'resize-none',
        error && 'border-danger bg-danger/5',
        success && 'border-success bg-success/5',
        'placeholder:text-text-tertiary',
        'min-h-[120px]'
      ),
      
      // Neon - Cyberpunk glow
      neon: cn(
        'w-full px-4 py-3 text-text-primary',
        'bg-white/5 backdrop-blur-sm',
        'border-2 border-neon-purple/30',
        'transition-all duration-300',
        'focus:border-neon-purple focus:shadow-neon-purple focus:outline-none',
        'focus:bg-neon-purple/5',
        'resize-none',
        error && 'border-danger shadow-danger/50',
        success && 'border-success shadow-success/50',
        'placeholder:text-neon-purple/50',
        'min-h-[120px]'
      ),
      
      // Glass - Premium feel
      glass: cn(
        'w-full px-4 py-3 text-text-primary',
        'bg-white/10 backdrop-blur-md',
        'border border-white/20 rounded-smooth',
        'transition-all duration-300',
        'focus:bg-white/20 focus:border-white/40 focus:outline-none',
        'focus:shadow-glass-sm',
        'resize-none',
        error && 'border-danger/50 bg-danger/10',
        success && 'border-success/50 bg-success/10',
        'placeholder:text-text-tertiary',
        'min-h-[120px]'
      ),
      
      // Minimal - Clean and simple
      minimal: cn(
        'w-full px-4 py-3 text-text-primary bg-white',
        'border-2 border-neutral-200 rounded-smooth',
        'transition-all duration-200',
        'focus:border-primary-500 focus:outline-none',
        'focus:ring-2 focus:ring-primary-500/10',
        'hover:border-neutral-300',
        'resize-none',
        error && 'border-danger focus:border-danger focus:ring-danger/10',
        success && 'border-success focus:border-success focus:ring-success/10',
        'placeholder:text-text-tertiary',
        'min-h-[120px]'
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
    
    // Progress bar for character count
    const progressPercentage = maxCharCount ? (charCount / maxCharCount) * 100 : 0;
    const progressColor = progressPercentage >= 90 ? 'bg-danger' : 
                         progressPercentage >= 75 ? 'bg-warning' : 'bg-neon-purple';
    
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
        
        {/* Textarea wrapper */}
        <div className="relative">
          {/* Textarea field */}
          <textarea
            ref={ref}
            id={id}
            value={value}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rows={autoResize ? 1 : rows}
            className={cn(
              variantClasses[variant],
              'disabled:opacity-50 disabled:cursor-not-allowed',
              autoResize && 'overflow-hidden',
              className
            )}
            maxLength={maxCharCount}
            {...props}
          />
          
          {/* Character counter with progress bar */}
          {showCharCount && maxCharCount && (
            <div className="mt-2">
              {/* Progress bar */}
              <div className="w-full h-1 bg-neutral-200 rounded-full overflow-hidden">
                <div 
                  className={cn(
                    'h-full transition-all duration-300',
                    progressColor
                  )}
                  style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                />
              </div>
              
              {/* Character count text */}
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-text-tertiary">
                  {charCount >= maxCharCount * 0.9 && '⚠️ '} 
                  {maxCharCount - charCount} תווים נותרו
                </span>
                <span 
                  className={cn(
                    'text-xs',
                    charCount >= maxCharCount * 0.9 ? 'text-warning font-bold' : 'text-text-tertiary',
                    charCount >= maxCharCount && 'text-danger font-bold'
                  )}
                >
                  {charCount}/{maxCharCount}
                </span>
              </div>
            </div>
          )}
          
          {/* Animated corner decoration for brutal variant */}
          {variant === 'brutal' && isFocused && (
            <>
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-neon-purple animate-pulse-soft" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-neon-purple animate-pulse-soft" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-neon-purple animate-pulse-soft" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-neon-purple animate-pulse-soft" />
            </>
          )}
          
          {/* Neon glow effect */}
          {variant === 'neon' && isFocused && (
            <div className="absolute inset-0 bg-neon-purple/10 blur-xl pointer-events-none animate-pulse-soft" />
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
                <p className="text-sm text-danger font-medium animate-pulse">{error}</p>
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

Textarea.displayName = 'Textarea';

export default Textarea;
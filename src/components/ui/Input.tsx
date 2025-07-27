import { cn } from '@/lib/utils';
import { forwardRef, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, required, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={id} 
            className="block text-sm font-medium text-text-primary mb-2"
          >
            {label}
            {required && <span className="text-accent-500 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            // Base styles
            'w-full px-4 py-3 text-text-primary bg-white',
            'border border-neutral-200 rounded-smooth',
            'placeholder:text-text-tertiary',
            'transition-all duration-200',
            
            // Focus styles
            'focus:border-primary-500 focus:outline-none',
            'focus:ring-2 focus:ring-primary-500/10',
            
            // Hover
            'hover:border-neutral-300',
            
            // Disabled
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'disabled:bg-neutral-50',
            
            // Error state
            error && 'border-danger focus:border-danger focus:ring-danger/10',
            
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-danger flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
  duration?: number;
  variant?: 'brutal' | 'neon' | 'glass' | 'gradient';
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  showProgress?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export default function Toast({ 
  message, 
  type, 
  onClose, 
  duration = 5000,
  variant = 'brutal',
  position = 'top-right',
  showProgress = true,
  action
}: ToastProps) {
  
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  
  useEffect(() => {
    // Trigger enter animation
    setTimeout(() => setIsVisible(true), 10);
    
    // Auto-dismiss
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);
  
  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  
  // Position classes
  const positionClasses = {
    'top-right': 'top-8 right-8',
    'top-left': 'top-8 left-8',
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'top-center': 'top-8 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-8 left-1/2 -translate-x-1/2',
  };
  
  // Animation classes based on position
  const animationClasses = {
    'top-right': isLeaving ? 'translate-x-full opacity-0' : isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
    'top-left': isLeaving ? '-translate-x-full opacity-0' : isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0',
    'bottom-right': isLeaving ? 'translate-x-full opacity-0' : isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
    'bottom-left': isLeaving ? '-translate-x-full opacity-0' : isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0',
    'top-center': isLeaving ? '-translate-y-full opacity-0' : isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
    'bottom-center': isLeaving ? 'translate-y-full opacity-0' : isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
  };
  
  // Icons for different types
  const icons = {
    success: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    ),
    error: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    warning: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    info: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };
  
  // Type-based colors
  const typeColors = {
    success: {
      brutal: 'bg-success text-black border-4 border-black',
      neon: 'bg-dark-surface text-success border-2 border-success shadow-neon-green',
      glass: 'bg-success/10 text-success backdrop-blur-lg border border-success/20',
      gradient: 'bg-gradient-to-r from-green-400 to-emerald-500 text-white',
    },
    error: {
      brutal: 'bg-danger text-white border-4 border-black',
      neon: 'bg-dark-surface text-danger border-2 border-danger shadow-danger',
      glass: 'bg-danger/10 text-danger backdrop-blur-lg border border-danger/20',
      gradient: 'bg-gradient-to-r from-red-500 to-pink-500 text-white',
    },
    warning: {
      brutal: 'bg-warning text-black border-4 border-black',
      neon: 'bg-dark-surface text-warning border-2 border-warning shadow-neon-yellow',
      glass: 'bg-warning/10 text-warning backdrop-blur-lg border border-warning/20',
      gradient: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white',
    },
    info: {
      brutal: 'bg-info text-white border-4 border-black',
      neon: 'bg-dark-surface text-info border-2 border-info shadow-neon-blue',
      glass: 'bg-info/10 text-info backdrop-blur-lg border border-info/20',
      gradient: 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white',
    },
  };
  
  // Variant-specific styles
  const variantClasses = {
    brutal: 'shadow-brutal',
    neon: 'animate-pulse-soft',
    glass: 'shadow-glass',
    gradient: 'shadow-xl',
  };
  
  return (
    <div 
      className={cn(
        'fixed z-50',
        positionClasses[position],
        'transition-all duration-300 ease-out',
        position.includes('center') && 'left-1/2',
        animationClasses[position]
      )}
    >
      <div
        className={cn(
          'flex items-start gap-3 px-6 py-4',
          'min-w-[320px] max-w-[500px]',
          typeColors[type][variant],
          variantClasses[variant],
          variant === 'brutal' && 'font-bold',
          variant === 'glass' && 'backdrop-blur-md',
          'relative overflow-hidden'
        )}
      >
        {/* Icon with animation */}
        <div className={cn(
          'flex-shrink-0',
          variant === 'brutal' && 'animate-bounce',
          variant === 'neon' && 'animate-pulse'
        )}>
          {icons[type]}
        </div>
        
        {/* Message content */}
        <div className="flex-1">
          <p className={cn(
            'text-sm',
            variant === 'brutal' && 'font-bold'
          )}>
            {message}
          </p>
          
          {/* Action button */}
          {action && (
            <button
              onClick={action.onClick}
              className={cn(
                'mt-2 text-sm font-bold underline',
                'hover:no-underline transition-all'
              )}
            >
              {action.label}
            </button>
          )}
        </div>
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className={cn(
            'flex-shrink-0 hover:opacity-70 transition-opacity',
            variant === 'brutal' && 'hover:scale-110'
          )}
          aria-label="סגור"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Progress bar */}
        {showProgress && (
          <div className={cn(
            'absolute bottom-0 left-0 right-0 h-1 overflow-hidden',
            variant === 'brutal' && 'bg-black/20',
            variant === 'neon' && 'bg-white/10',
            variant === 'glass' && 'bg-white/20',
            variant === 'gradient' && 'bg-black/20'
          )}>
            <div 
              className={cn(
                'h-full',
                variant === 'brutal' && 'bg-black',
                variant === 'neon' && 'bg-current',
                variant === 'glass' && 'bg-current opacity-50',
                variant === 'gradient' && 'bg-white/50',
                'animate-[progress_linear_forwards]'
              )}
              style={{ 
                animationDuration: `${duration}ms`,
                animationTimingFunction: 'linear',
                animationFillMode: 'forwards'
              }}
            />
          </div>
        )}
        
        {/* Special effects */}
        {variant === 'neon' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none" />
        )}
        
        {variant === 'brutal' && type === 'success' && (
          <div className="absolute -top-2 -right-2">
            <span className="text-2xl animate-bounce">🎉</span>
          </div>
        )}
      </div>
      
      {/* Add CSS for progress animation */}
      <style jsx>{`
        @keyframes progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}
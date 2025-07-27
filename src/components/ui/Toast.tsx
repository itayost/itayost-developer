'use client';

import { cn } from '@/lib/utils';
import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    info: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  const styles = {
    success: 'bg-success text-white',
    error: 'bg-danger text-white',
    info: 'bg-primary-500 text-white',
  };

  return (
    <div 
      className={cn(
        'fixed top-8 right-8 z-50',
        'animate-slide-in-right'
      )}
    >
      <div
        className={cn(
          'flex items-center gap-3 px-6 py-4 rounded-smooth shadow-premium',
          'min-w-[300px] max-w-[500px]',
          styles[type]
        )}
      >
        <div className="flex-shrink-0">
          {icons[type]}
        </div>
        
        <p className="flex-1 text-sm font-medium">
          {message}
        </p>
        
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-4 hover:opacity-80 transition-opacity"
          aria-label="סגור"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10 rounded-b-smooth overflow-hidden">
        <div 
          className="h-full bg-white/30 animate-progress"
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>
    </div>
  );
}
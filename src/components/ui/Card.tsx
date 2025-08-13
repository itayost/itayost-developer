import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'brutal' | 'glass' | 'neon' | 'gradient' | 'minimal';
  hover?: 'lift' | 'rotate' | 'glow' | 'none';
  border?: boolean;
  shadow?: 'brutal' | 'soft' | 'neon' | 'none';
  animated?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = 'brutal',
    hover = 'lift',
    border = true,
    shadow = 'brutal',
    animated = false,
    children,
    ...props 
  }, ref) => {
    
    // Variant styles
    const variantClasses = {
      // Neo-brutalist - Bold and impactful
      brutal: cn(
        'bg-white',
        border && 'border-4 border-black',
        shadow === 'brutal' && 'shadow-brutal',
        hover === 'lift' && 'hover:shadow-brutal-lg hover:-translate-y-2',
        hover === 'rotate' && 'hover:rotate-1',
        'transition-all duration-300'
      ),
      
      // Glassmorphism - Premium and elegant
      glass: cn(
        'bg-white/80 backdrop-blur-lg',
        border && 'border border-white/20',
        shadow === 'soft' && 'shadow-glass',
        hover === 'lift' && 'hover:shadow-glass hover:-translate-y-1',
        hover === 'glow' && 'hover:shadow-neon-purple/20',
        'transition-all duration-500'
      ),
      
      // Neon - Cyberpunk style
      neon: cn(
        'bg-dark-surface relative overflow-hidden',
        border && 'border-2 border-neon-purple',
        shadow === 'neon' && 'shadow-neon-purple/50',
        hover === 'glow' && 'hover:shadow-neon-purple',
        'transition-all duration-300',
        // Animated neon scan line
        animated && 'before:content-[""] before:absolute before:top-0 before:left-[-100%]',
        animated && 'before:w-full before:h-full',
        animated && 'before:bg-gradient-to-r before:from-transparent before:via-neon-purple/20 before:to-transparent',
        animated && 'before:animate-shimmer'
      ),
      
      // Gradient border - Eye-catching
      gradient: cn(
        'bg-white relative p-[3px]',
        'before:content-[""] before:absolute before:inset-0',
        'before:bg-gradient-to-r before:from-neon-blue before:via-neon-purple before:to-neon-green',
        'before:rounded-smooth before:-z-10',
        animated && 'before:bg-[length:200%_200%] before:animate-gradient-shift',
        hover === 'lift' && 'hover:-translate-y-2',
        'transition-all duration-300'
      ),
      
      // Minimal - When you need subtle
      minimal: cn(
        'bg-white',
        border && 'border border-neutral-200',
        shadow === 'soft' && 'shadow-soft',
        hover === 'lift' && 'hover:shadow-soft-lg hover:-translate-y-1',
        'transition-all duration-300 rounded-smooth'
      ),
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          variantClasses[variant],
          animated && 'animate-fade-up',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';

// Card Header Component
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  gradient?: boolean;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, gradient, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'p-6 pb-4',
          gradient && 'bg-gradient-to-r from-neon-purple/10 to-neon-blue/10',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardHeader.displayName = 'CardHeader';

// Card Title Component
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  gradient?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, gradient, size = 'lg', children, ...props }, ref) => {
    
    const sizeClasses = {
      sm: 'text-lg',
      md: 'text-xl',
      lg: 'text-2xl',
      xl: 'text-3xl',
    };
    
    return (
      <h3
        ref={ref}
        className={cn(
          'font-bold text-text-primary',
          sizeClasses[size],
          gradient && 'gradient-text',
          className
        )}
        {...props}
      >
        {children}
      </h3>
    );
  }
);
CardTitle.displayName = 'CardTitle';

// Card Content Component
export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  spacing?: 'sm' | 'md' | 'lg';
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, spacing = 'md', ...props }, ref) => {
    
    const spacingClasses = {
      sm: 'p-4 pt-0',
      md: 'p-6 pt-0',
      lg: 'p-8 pt-0',
    };
    
    return (
      <div
        ref={ref}
        className={cn(spacingClasses[spacing], className)}
        {...props}
      />
    );
  }
);
CardContent.displayName = 'CardContent';

// Card Footer Component
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  border?: boolean;
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, border, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center p-6 pt-0',
          border && 'border-t-2 border-neutral-200 pt-6',
          className
        )}
        {...props}
      />
    );
  }
);
CardFooter.displayName = 'CardFooter';

// Badge Component for Cards
export interface CardBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'brutal' | 'neon' | 'gradient';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const CardBadge = forwardRef<HTMLSpanElement, CardBadgeProps>(
  ({ className, variant = 'brutal', position = 'top-right', children, ...props }, ref) => {
    
    const positionClasses = {
      'top-left': 'absolute top-4 left-4',
      'top-right': 'absolute top-4 right-4',
      'bottom-left': 'absolute bottom-4 left-4',
      'bottom-right': 'absolute bottom-4 right-4',
    };
    
    const variantClasses = {
      brutal: 'bg-neon-yellow text-black border-2 border-black font-bold px-3 py-1',
      neon: 'bg-neon-purple/10 text-neon-purple border border-neon-purple px-3 py-1',
      gradient: 'bg-gradient-to-r from-neon-purple to-neon-blue text-white px-3 py-1',
    };
    
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center text-sm rounded-full',
          positionClasses[position],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
CardBadge.displayName = 'CardBadge';

export { Card, CardContent, CardFooter, CardHeader, CardTitle };

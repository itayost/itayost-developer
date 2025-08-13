import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette - Bold & Vibrant
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7fe',
          300: '#a5bcfc',
          400: '#7f96f8',
          500: '#5b70f1',
          600: '#4252e5',
          700: '#3541ca',
          800: '#2e37a4',
          900: '#2b3282',
          950: '#1b1f4e',
        },
        
        // Neon Colors for Bold Accents
        neon: {
          blue: '#00D9FF',
          purple: '#BD00FF',
          green: '#00FF88',
          yellow: '#FFD600',
          pink: '#FF006E',
          orange: '#FF6B35',
          cyan: '#00FFF0',
        },
        
        // Brutalist Accents
        brutal: {
          black: '#000000',
          white: '#FFFFFF',
          yellow: '#FFD600',
          red: '#FF3333',
          green: '#00FF88',
          blue: '#0066FF',
          purple: '#BD00FF',
        },
        
        // Dark Mode Support
        dark: {
          surface: '#0A0A0A',
          elevated: '#1A1A1A',
          overlay: '#2A2A2A',
          border: '#3A3A3A',
          subtle: '#4A4A4A',
        },
        
        // Refined Neutrals
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        
        // Clean backgrounds with gradients
        background: {
          primary: '#ffffff',
          secondary: '#fafafa',
          tertiary: '#f5f5f5',
          gradient: {
            start: '#667eea',
            end: '#764ba2',
          },
        },
        
        // Text colors
        text: {
          primary: '#171717',
          secondary: '#525252',
          tertiary: '#737373',
          inverse: '#ffffff',
          neon: '#00D9FF',
        },
        
        // Semantic colors - Bold
        success: '#00FF88',
        warning: '#FFD600',
        danger: '#FF3333',
        info: '#00D9FF',
      },
      
      // Bold Background Gradients
      backgroundImage: {
        // Main gradients
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-main': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        
        // Neon gradients
        'gradient-neon': 'linear-gradient(45deg, #00D9FF, #BD00FF, #00FF88)',
        'gradient-sunset': 'linear-gradient(45deg, #FF6B35, #FF006E, #BD00FF)',
        'gradient-cyber': 'linear-gradient(135deg, #00FFF0 0%, #0066FF 50%, #BD00FF 100%)',
        'gradient-fire': 'linear-gradient(45deg, #FFD600, #FF6B35, #FF006E)',
        
        // Mesh gradients for depth
        'mesh-gradient': `
          radial-gradient(at 20% 80%, rgba(189, 0, 255, 0.15) 0px, transparent 50%),
          radial-gradient(at 80% 20%, rgba(0, 217, 255, 0.15) 0px, transparent 50%),
          radial-gradient(at 40% 40%, rgba(255, 0, 110, 0.15) 0px, transparent 50%)
        `,
        
        // Patterns
        'dots': `radial-gradient(circle, currentColor 1px, transparent 1px)`,
        'grid': `
          linear-gradient(currentColor 1px, transparent 1px),
          linear-gradient(90deg, currentColor 1px, transparent 1px)
        `,
        'diagonal-lines': `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          currentColor 10px,
          currentColor 20px
        )`,
        
        // Noise texture for depth
        'noise': `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")`,
      },
      
      // Brutalist & Premium Shadows
      boxShadow: {
        // Soft shadows (keeping some for subtle elements)
        'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.05)',
        'soft-md': '0 4px 16px -4px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 32px -8px rgba(0, 0, 0, 0.12)',
        'soft-xl': '0 16px 48px -12px rgba(0, 0, 0, 0.15)',
        
        // Brutalist shadows - hard edges
        'brutal-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal': '6px 6px 0px 0px rgba(0,0,0,1)',
        'brutal-md': '8px 8px 0px 0px rgba(0,0,0,1)',
        'brutal-lg': '12px 12px 0px 0px rgba(0,0,0,1)',
        'brutal-xl': '16px 16px 0px 0px rgba(0,0,0,1)',
        
        // Colored brutal shadows
        'brutal-blue': '6px 6px 0px 0px #00D9FF',
        'brutal-purple': '6px 6px 0px 0px #BD00FF',
        'brutal-green': '6px 6px 0px 0px #00FF88',
        'brutal-yellow': '6px 6px 0px 0px #FFD600',
        
        // Neon glow effects
        'neon-blue': '0 0 30px rgba(0, 217, 255, 0.5)',
        'neon-purple': '0 0 30px rgba(189, 0, 255, 0.5)',
        'neon-green': '0 0 30px rgba(0, 255, 136, 0.5)',
        'neon-pink': '0 0 30px rgba(255, 0, 110, 0.5)',
        'neon-yellow': '0 0 30px rgba(255, 214, 0, 0.5)',
        
        // Inner shadows
        'inner-brutal': 'inset 4px 4px 0px 0px rgba(0,0,0,1)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        
        // Premium glass shadows
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.25)',
      },
      
      // Bold Animations
      animation: {
        // Basic animations
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-up': 'fade-up 0.5s ease-out',
        'fade-down': 'fade-down 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        
        // Fun animations
        'bounce-in': 'bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'wobble': 'wobble 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        
        // Glitch effects
        'glitch': 'glitch 0.3s ease-in-out',
        'glitch-loop': 'glitch 2s ease-in-out infinite',
        
        // Pulse & Glow
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'pulse-border': 'pulse-border 2s ease-in-out infinite',
        
        // Advanced animations
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'rotate': 'rotate 10s linear infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
        
        // Text animations
        'text-slide-up': 'text-slide-up 0.5s ease-out',
        'text-glitch': 'text-glitch 0.5s ease-in-out',
        'typing': 'typing 2s steps(20, end)',
      },
      
      keyframes: {
        // Basic keyframes
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        
        // Fun keyframes
        'bounce-in': {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'wobble': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        
        // Glitch keyframes
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        
        // Pulse & Glow keyframes
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(189, 0, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(189, 0, 255, 0.8), 0 0 60px rgba(189, 0, 255, 0.4)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'pulse-border': {
          '0%, 100%': { borderColor: 'rgba(189, 0, 255, 0.5)' },
          '50%': { borderColor: 'rgba(189, 0, 255, 1)' },
        },
        
        // Advanced keyframes
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'gradient-shift': {
          '0%, 100%': { filter: 'hue-rotate(0deg)' },
          '50%': { filter: 'hue-rotate(30deg)' },
        },
        'rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'morph': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        
        // Text keyframes
        'text-slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'text-glitch': {
          '0%, 100%': { textShadow: '2px 2px #00D9FF, -2px -2px #FF006E' },
          '25%': { textShadow: '-2px 2px #00D9FF, 2px -2px #FF006E' },
          '50%': { textShadow: '2px -2px #00D9FF, -2px 2px #FF006E' },
          '75%': { textShadow: '-2px -2px #00D9FF, 2px 2px #FF006E' },
        },
        'typing': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      
      // Typography
      fontSize: {
        'display': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '900' }],
        'headline': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '900' }],
        'title': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '800' }],
        'subtitle': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
      },
      
      fontFamily: {
        sans: ['var(--font-inter)'],
        hebrew: ['var(--font-rubik)'],
        display: ['var(--font-inter)'],
        mono: ['Space Mono', 'monospace'],
      },
      
      // Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
        '144': '36rem',
        '160': '40rem',
      },
      
      // Border Radius
      borderRadius: {
        'none': '0',
        'brutal': '0',
        'subtle': '0.375rem',
        'smooth': '0.75rem',
        'medium': '1rem',
        'large': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        'full': '9999px',
      },
      
      // Border Width for Brutalist Style
      borderWidth: {
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '8': '8px',
      },
      
      // Transitions
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      
      // Backdrop Filters
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      
      // Z-Index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
};

export default config;
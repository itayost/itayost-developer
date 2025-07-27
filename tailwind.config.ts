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
        // Modern & Clean Color Palette
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7fe',
          300: '#a5bcfc',
          400: '#7f96f8',
          500: '#5b70f1',  // Sophisticated Blue - Main
          600: '#4252e5',
          700: '#3541ca',
          800: '#2e37a4',
          900: '#2b3282',
          950: '#1b1f4e',
        },
        
        accent: {
          50: '#fef3f2',
          100: '#fee4e2',
          200: '#fececa',
          300: '#fdaba5',
          400: '#fa7d71',
          500: '#f15043',  // Refined Coral - Subtle accent
          600: '#de3124',
          700: '#bb251a',
          800: '#9b221a',
          900: '#81221b',
          950: '#460d09',
        },
        
        // Sophisticated Neutrals
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
        
        // Clean backgrounds
        background: {
          primary: '#ffffff',
          secondary: '#fafafa',
          tertiary: '#f5f5f5',
        },
        
        // Text colors
        text: {
          primary: '#171717',
          secondary: '#525252',
          tertiary: '#737373',
          inverse: '#ffffff',
        },
        
        // Semantic colors - muted
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        info: '#3b82f6',
      },
      
      // Subtle gradients for modern design
      backgroundImage: {
        // Sophisticated gradients
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        
        // Primary gradient - subtle
        'primary-gradient': 'linear-gradient(135deg, #5b70f1 0%, #7f96f8 100%)',
        'primary-gradient-subtle': 'linear-gradient(135deg, #f0f4ff 0%, #e0e9ff 100%)',
        
        // Noise texture for depth
        'noise': `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")`,
        
        // Subtle mesh gradient
        'mesh-subtle': `
          radial-gradient(at 40% 20%, hsla(225, 85%, 70%, 0.05) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(189, 85%, 56%, 0.05) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(355, 85%, 93%, 0.05) 0px, transparent 50%)
        `,
        
        // Dot pattern for texture
        'dot-pattern': `radial-gradient(circle, #e5e5e5 1px, transparent 1px)`,
      },
      
      // Refined shadows
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.05)',
        'soft-md': '0 4px 16px -4px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 32px -8px rgba(0, 0, 0, 0.12)',
        'soft-xl': '0 16px 48px -12px rgba(0, 0, 0, 0.15)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'elegant': '0 1px 3px rgba(0, 0, 0, 0.05), 0 10px 40px -5px rgba(0, 0, 0, 0.1)',
        'premium': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 20px 50px -10px rgba(0, 0, 0, 0.1)',
      },
      
      // Subtle animations
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-up': 'fade-up 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'float-subtle': 'float-subtle 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'float-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      
      // Typography - clean and modern
      fontSize: {
        'display': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'headline': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'title': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subtitle': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      
      fontFamily: {
        sans: ['var(--font-inter)'],
        hebrew: ['var(--font-rubik)'],
        display: ['var(--font-inter)'],
      },
      
      // Spacing for clean layouts
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
        '144': '36rem',
        '160': '40rem',
      },
      
      // Modern border radius
      borderRadius: {
        'subtle': '0.375rem',
        'smooth': '0.75rem',
        'elegant': '1rem',
        '4xl': '2rem',
      },
      
      // Backdrop filters
      backdropBlur: {
        xs: '2px',
      },
      
      // Letter spacing
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.025em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      
      // Line height
      lineHeight: {
        'tightest': '1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
    },
  },
  plugins: [],
};

export default config;
import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,jsx,mdx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
      sm: ['0.875rem', { lineHeight: '1.5rem', letterSpacing: '0.015em' }],
      base: ['1rem', { lineHeight: '1.75rem', letterSpacing: '0.01em' }],
      lg: ['1.125rem', { lineHeight: '1.875rem', letterSpacing: '0.005em' }],
      xl: ['1.25rem', { lineHeight: '2rem', letterSpacing: '0' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem', letterSpacing: '-0.01em' }],
      '3xl': ['1.875rem', { lineHeight: '2.375rem', letterSpacing: '-0.015em' }],
      '4xl': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.02em' }],
      '5xl': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.025em' }],
      '6xl': ['3.75rem', { lineHeight: '4.25rem', letterSpacing: '-0.03em' }],
      '7xl': ['4.5rem', { lineHeight: '5rem', letterSpacing: '-0.035em' }],
    },
    extend: {
      colors: {
        // Premium neutral palette with warmer undertones
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        // Premium accent colors
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      fontFamily: {
        sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
        display: [
          ['Mona Sans', ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
      boxShadow: {
        'premium-sm': '0 1px 2px 0 rgb(0 0 0 / 0.03), 0 1px 3px 0 rgb(0 0 0 / 0.05)',
        'premium': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05), 0 0 0 1px rgb(0 0 0 / 0.03)',
        'premium-md': '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05), 0 0 0 1px rgb(0 0 0 / 0.03)',
        'premium-lg': '0 20px 25px -5px rgb(0 0 0 / 0.06), 0 8px 10px -6px rgb(0 0 0 / 0.04), 0 0 0 1px rgb(0 0 0 / 0.02)',
        'premium-xl': '0 25px 50px -12px rgb(0 0 0 / 0.15), 0 0 0 1px rgb(0 0 0 / 0.02)',
        'glow': '0 0 20px rgb(0 0 0 / 0.1)',
        'glow-accent': '0 0 30px rgb(34 197 94 / 0.15)',
        'inner-premium': 'inset 0 1px 2px 0 rgb(0 0 0 / 0.03)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'subtle-pulse': 'subtle-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'subtle-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'premium-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'premium-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Computer Modern Serif"', '"Latin Modern Roman"', 'Georgia', 'serif'],
        mono: ['"Computer Modern Typewriter"', '"Latin Modern Mono"', 'monospace'],
      },
      colors: {
        definition: { bg: '#e8f4fd', border: '#2196F3', text: '#0d47a1' },
        theorem: { bg: '#e8eaf6', border: '#3f51b5', text: '#1a237e' },
        example: { bg: '#e8f5e9', border: '#4caf50', text: '#1b5e20' },
        warning: { bg: '#fff3e0', border: '#ff9800', text: '#e65100' },
        day1: '#3b82f6',
        day2: '#8b5cf6',
        day3: '#06b6d4',
        day4: '#f59e0b',
        day5: '#ef4444',
      },
    },
  },
  plugins: [],
}
export default config

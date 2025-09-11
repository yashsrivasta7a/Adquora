/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(0)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'marquee-left': 'marquee-left var(--speed) linear infinite',
        'marquee-right': 'marquee-right var(--speed) linear infinite',
        'gradient': 'gradient 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

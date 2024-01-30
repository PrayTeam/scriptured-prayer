/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../prayerapp/templates/**/*.html',
    '../scriptured_prayer/templates/**/*.html',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      snowgrass: '#c5ccc4',
      lichen: '#989a82',
      olive: '#33331b',
      indigo: '#6366f1',
      sky: '#0ea5e9',
      emerald: '#10b981',
      purple: '#6c4565',
      blue: '#33335d',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}


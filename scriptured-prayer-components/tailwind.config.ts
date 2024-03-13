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
      night: '#1c1a24',
      snowgrass: '#c5ccc4',
      lichen: '#989a82',
      olive: '#33331b',
      ocean: '#2c4146',
      stone: '#677180',
      leaf: '#3c4a20',
      obsidian: '#2a3258',
      gray: '#c3c7cc',
      indigo: '#6366f1',
      sky: '#0ea5e9',
      emerald: '#10b981',
      purple: '#6c4565',
      red: '#d10000',
      blue: '#33335d',
      
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
      keyframes: {
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
  },

  plugins: [],
};

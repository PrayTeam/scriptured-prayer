const { colors, screens } = require('./src/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    '../prayerapp/templates/**/*.html',
    '../scriptured_prayer/templates/**/*.html',
  ],
  theme: {
    extend: {},
    colors,
    screens,
  },
  plugins: [],
}


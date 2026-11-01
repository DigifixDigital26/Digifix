/** Tailwind CSS v3. Brand tokens live here so every component shares one palette. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#064E3B',
          'green-dark': '#043628',
          gold: '#D4B16D',
          cream: '#F8F5EF',
          'cream-dark': '#EDE7DA',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

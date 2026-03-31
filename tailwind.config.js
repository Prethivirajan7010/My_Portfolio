/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          50: '#f7f5f1',
          100: '#f0ece5',
          200: '#e2dacf',
          300: '#cfc2b4',
          500: '#8c7d70',
          400: '#a29588',
          600: '#6e6258',
          700: '#514843',
          900: '#171614'
        },
        accent: {
          100: '#ebf1ee',
          200: '#d9e4df',
          300: '#b9c9c1',
          500: '#5f7a6d',
          600: '#455a50'
        },
        rose: '#eadfd7',
        sand: '#ece5db'
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif']
      },
      boxShadow: {
        soft: '0 14px 40px rgba(23, 22, 20, 0.08)',
        card: '0 24px 60px rgba(23, 22, 20, 0.10)'
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(95,122,109,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(95,122,109,0.08) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

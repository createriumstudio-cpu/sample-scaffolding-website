/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a2b5e',
        accent: '#2563eb'
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif']
      }
    }
  },
  plugins: []
};

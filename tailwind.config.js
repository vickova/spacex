/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B3D91',
        subprimary: '#007BFF',
        secondary: '#C0C0C0',
        subsecondary: '#F0F2F5',
        warning: '#FF4D4D'
      }
    },
  },
  plugins: [],
}

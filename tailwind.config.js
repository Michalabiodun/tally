/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        arimo: ['Arimo', 'sans-serif'],
      },
      colors: {
        sidebar: '#0f172a',
        'sidebar-hover': '#1e293b',
        'brand-green': '#10b981',
        'primary-blue': '#1A2D54',
        'teal': '#38A6A3',
        'yellow': '#A9B500',
        'dark-gray': '#1E1E1E',
        'light-gray': '#F4F4F4',
        'green': '#0DAA37',
        'orange': '#EFA506',
        'purple': '#8200B5',
        'red': '#FF5D60',
        'success-green': '#D3F6DA',
      }
    },
  },
  plugins: [],
};

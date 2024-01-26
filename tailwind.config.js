/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center:true,
      padding: '16px',
    },
    extend: {
      colors: {
        dark: '#0f172a',
        light: '#f1f5f9',
        secondary: '#4338ca',
        primary: '#1e3a8a',
      },
      fontFamily: {
        roboto: 'Roboto, sans-serif',
      }
    },
  },
  plugins: [],
};

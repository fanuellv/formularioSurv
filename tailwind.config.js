/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        keyframes: {
          growShrink: {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.2)' },
          },
        },
        animation: {
          growShrink: 'growShrink 2s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  };
  
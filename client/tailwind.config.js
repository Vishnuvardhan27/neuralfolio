/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        scrollBehavior: ['responsive']
      },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
    corePlugins: {
      preflight: true,
    },
  };
  
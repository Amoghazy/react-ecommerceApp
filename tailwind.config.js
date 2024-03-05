/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  darkMode: "class",
  plugins: [import("tw-elements-react/dist/plugin.cjs")],
};

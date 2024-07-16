// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  theme: {
    extend: {
      colors: {
        gray: "#EEF2F5",
        primary: "#172463",
        primaryHover: "#374AA6",
      },
    },
  },
  plugins: [flowbite.plugin()],
};

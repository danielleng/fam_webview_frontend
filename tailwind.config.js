/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[theme-mode="dark"]'],
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

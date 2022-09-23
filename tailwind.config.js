/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/components/**/*.{js,ts,hbs}',
    './app/templates/**/*.hbs',
    './public/md/**/*.md',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

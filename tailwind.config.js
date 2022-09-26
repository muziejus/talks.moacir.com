/** @type {import('tailwindcss').Config} */
const { slate } = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/components/**/*.{js,ts,hbs}',
    './app/templates/**/*.hbs',
    './public/md/**/*.md',
  ],
  theme: {
    colors: {
      slate,
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#000d74',
      columbiaBlue: {
        DEFAULT: '#C4D8E2',
        100: '#75AADB',
        200: '#6CADDF',
        500: '#008EE0',
        800: '#2C6BAC',
        900: '#0046A6',
      },
      white: '#F9F9F9',
      lightGray: '#EFEFEF',
      sand: '#D3D3C0',
      gray: '#555555',
      blue1: '#41516C',
      blue2: '#093552',
    },
    fontFamily: {
      serif: ['Lusitana', 'ui-serif', 'Times New Roman', 'serif'],
      sans: ['Gudea', 'ui-sans-serif', 'Helvetica', 'sans-serif'],
      mono: ['Ubuntu Mono', 'ui-mono', 'Monaco', 'mono'],
      ubuntu: ['Ubuntu', 'ui-sans-seif', 'Helvetica', 'sans-serif'],
      trajan: [
        'trajan-pro-3',
        'TimesNewRoman',
        'Times New Roman',
        'Times',
        'Georgia',
        'serif',
      ],
      garamond: [
        'adobe-garamond-pro',
        'TimesNewRoman',
        'Times New Roman',
        'Times',
        'Georgia',
        'serif',
      ],
      proxima: [
        'proxima-nova',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
    },
    extend: {},
  },
  plugins: [],
};

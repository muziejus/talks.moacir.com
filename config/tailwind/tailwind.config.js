'use strict';
// located in <app root>/config/tailwind/

const path = require('path');

const appRoot = path.join(__dirname, '../../');
const appEntry = path.join(appRoot, 'app');
const relevantFilesGlob = '**/*.{html,js,ts,hbs,gjs,gts}';

module.exports = {
  content: [path.join(appEntry, relevantFilesGlob)],
  theme: {
    colors: {
      'washed-blue': '#63859d',
      'columbia-blue': '#b9d9eb',
      'light-columbia-blue': '#ebf4f9',
      'dark-blue': '#003099',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['EB Garamond', 'Garamond', 'serif'],
      heading: ['Trajan Pro', 'Cinzel', 'serif'],
      didot: ['Didot', 'Didot LT STD', 'Hoefler Text', 'Garamond', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};

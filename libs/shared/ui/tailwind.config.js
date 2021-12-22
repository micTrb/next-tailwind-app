const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');
const { appRootPath } = require('@nrwl/workspace/src/utils/app-root');

console.log(join(__dirname, './src/**/*.{js,ts,jsx,tsx}'));
console.log(createGlobPatternsForDependencies(__dirname));

module.exports = {
  mode: 'jit',
  presets: [require(join(appRootPath, 'tailwind-workspace-preset'))],
  purge: [
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}')
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import lineClamp from '@tailwindcss/line-clamp';
import aspectRatio from '@tailwindcss/aspect-ratio';
import { presets } from './tailwind.config';

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  presets: [presets],
  theme: {
    extend: {},
  },
  plugins: [forms, lineClamp, aspectRatio],
};

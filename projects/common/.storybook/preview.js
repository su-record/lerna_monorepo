import { app } from '@storybook/vue3';
import { withSource } from './withSource';
import '../src/assets/index.css';
import OutSideClick from '@/directives/OutSideClick';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [withSource];

app.directive('outside', OutSideClick);

import type { Preview } from '@storybook/react-vite';
import { storybookTheme } from './theme';
import '../src/storybook/docs.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      theme: storybookTheme,
    },
    controls: {
      hideNoControlsWarning: true,
    },
    options: {
      storySort: {
        order: [
          'Foundations',
          ['Overview', 'Architecture', 'Usage Rules'],
          'Tokens',
          ['Primitive Colors', 'Semantic Colors', 'Theme And Brands', 'Typography', 'Utility Alpha', 'Misc Foundations'],
        ],
      },
    },
  },
  globalTypes: {
    brand: {
      name: 'Brand',
      description: 'Active brand for theme-driven token previews',
      defaultValue: 'Cars24',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'Cars24', title: 'Cars24' },
          { value: 'Team BHP', title: 'Team BHP' },
          { value: 'CarInfo', title: 'CarInfo' },
          { value: 'Vehicle Info', title: 'Vehicle Info' }
        ]
      }
    }
  }
};

export default preview;

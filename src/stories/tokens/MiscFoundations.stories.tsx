import type { Meta, StoryObj } from '@storybook/react-vite';
import { MiscTokensPage } from '../../storybook/TokenDocs';
import type { BrandName } from '../../storybook/token-data';

const meta = {
  title: 'Tokens/Misc Foundations',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: (_args, context) => <MiscTokensPage brand={context.globals.brand as BrandName} />,
};

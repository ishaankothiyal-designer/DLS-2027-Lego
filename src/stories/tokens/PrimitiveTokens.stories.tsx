import type { Meta, StoryObj } from '@storybook/react-vite';
import { PrimitiveTokensPage } from '../../storybook/TokenDocs';
import type { BrandName } from '../../storybook/token-data';

const meta = {
  title: 'Tokens/Primitive Colors',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: (_args, context) => <PrimitiveTokensPage brand={context.globals.brand as BrandName} />,
};

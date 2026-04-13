import type { Meta, StoryObj } from '@storybook/react-vite';
import { TypographyTokensPage } from '../../storybook/TokenDocs';
import type { BrandName } from '../../storybook/token-data';

const meta = {
  title: 'Tokens/Typography',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: (_args, context) => <TypographyTokensPage brand={context.globals.brand as BrandName} />,
};

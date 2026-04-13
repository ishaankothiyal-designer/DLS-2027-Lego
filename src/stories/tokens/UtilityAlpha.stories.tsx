import type { Meta, StoryObj } from '@storybook/react-vite';
import { UtilityTokensPage } from '../../storybook/TokenDocs';
import type { BrandName } from '../../storybook/token-data';

const meta = {
  title: 'Tokens/Utility Alpha',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: (_args, context) => <UtilityTokensPage brand={context.globals.brand as BrandName} />,
};

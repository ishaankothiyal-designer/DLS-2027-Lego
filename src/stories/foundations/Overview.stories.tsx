import type { Meta, StoryObj } from '@storybook/react-vite';
import { OverviewPage } from '../../storybook/TokenDocs';
import type { BrandName } from '../../storybook/token-data';

const meta = {
  title: 'Foundations/Overview',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: (_args, context) => <OverviewPage brand={context.globals.brand as BrandName} />,
};

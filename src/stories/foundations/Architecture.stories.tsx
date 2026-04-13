import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArchitecturePage } from '../../storybook/TokenDocs';
import type { BrandName } from '../../storybook/token-data';

const meta = {
  title: 'Foundations/Architecture',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: (_args, context) => <ArchitecturePage brand={context.globals.brand as BrandName} />,
};

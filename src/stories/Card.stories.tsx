import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardComponent } from '../components/Card';

const meta = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Sample Title',
    description: 'Sample description',
  },
};

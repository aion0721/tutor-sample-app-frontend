// src/stories/CardComponent.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardComponent } from "../components/Card";

const meta = {
  title: "Components/Card",
  component: CardComponent,
  tags: ["autodocs"],

  /* 🆕 ここで追加分を明示 */
  argTypes: {
    category: {
      control: "select",
      options: ["infra", "app", "business", "it", "other"],
      description: "Card background category",
      defaultValue: "other",
    },
    tags: {
      control: "object",
      description: "Tag list displayed in the footer",
    },
  },
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Sample Title",
    description: "Sample description",
    category: "other",
    tags: ["sample"],
  },
};

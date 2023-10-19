import type { Meta, StoryObj } from "@storybook/react";
import Heading from ".";

export default {
  title: "Components/Heading",
  component: Heading,
} as Meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    element: "h1",
    content: "Welcome to Shushi",
  },
};

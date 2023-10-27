import type { Meta, StoryObj } from "@storybook/react";
import HandleQuantity from ".";

export default {
  title: "Components/HandleQuantity",
  component: HandleQuantity,
} as Meta;

type Story = StoryObj<typeof HandleQuantity>;

export const Default: Story = {
  args: {
    quantity: 2,
    width: 94,
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import CartItem from ".";

export default {
  title: "Components/CartItem",
  component: CartItem,
} as Meta;

type Story = StoryObj<typeof CartItem>;

export const Default: Story = {
  args: {},
};

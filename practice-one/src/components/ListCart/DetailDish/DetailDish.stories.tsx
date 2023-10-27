import type { Meta, StoryObj } from "@storybook/react";
import DetailDish from ".";

export default {
  title: "Components/DetailDish",
  component: DetailDish,
} as Meta;

type Story = StoryObj<typeof DetailDish>;

export const Default: Story = {
  args: {
    name: "Smashed Avo",
    price: 25,
    className: "font-family",
  },
};

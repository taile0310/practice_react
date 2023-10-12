import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    titleCard: "Promo code",
    width: 443,
  },
};

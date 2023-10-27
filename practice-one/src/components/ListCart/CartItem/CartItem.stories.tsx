import type { Meta, StoryObj } from "@storybook/react";
import CartItem from ".";

export default {
  title: "Components/CartItem",
  component: CartItem,
} as Meta;

type Story = StoryObj<typeof CartItem>;

export const Default: Story = {
  args: {
    image: "https://sushi-restaurant-phi.vercel.app/item1.aef69296.jpg",
    name: "Smashed Avo",
    price: 25,
    quantity: 1,
    className: "font-family",
    listStyle: "none",
  },
};

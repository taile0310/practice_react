import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ListCart from ".";
import { CartProvider } from "../../context/CartContext";

export default {
  title: "Components/ListCart",
  component: ListCart,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <CartProvider>
          <Story />
        </CartProvider>
      </MemoryRouter>
    ),
  ],
} as Meta;
type Story = StoryObj<typeof ListCart>;

export const Default: Story = {
  args: {
    className: "font-family",
    carts: [
      {
        name: "Smashed Avo",
        price: 25,
        image: "https://sushi-restaurant-phi.vercel.app/item1.aef69296.jpg",
        id: "1",
        quantity: 1,
      },
      {
        name: "Yin & Yang",
        price: 15,
        image: "https://sushi-restaurant-phi.vercel.app/item2.fb0267f5.jpg",
        id: "2",
        quantity: 1,
      },
      {
        name: "Pancakes",
        price: 25,
        image: "https://sushi-restaurant-phi.vercel.app/item3.dd2f5a77.jpg",
        id: "3",
        quantity: 1,
      },
      {
        name: "Rancheros (Tofu)",
        price: 47,
        image: "https://sushi-restaurant-phi.vercel.app/item5.57044373.jpg",
        id: "5",
        quantity: 1,
      },
    ],
  },
};

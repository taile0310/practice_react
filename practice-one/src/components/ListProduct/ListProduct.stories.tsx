import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ListProduct from ".";
import { CartProvider } from "../../context/CartContext";

export default {
  title: "Components/ListProduct",
  component: ListProduct,
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

type Story = StoryObj<typeof ListProduct>;

export const Default: Story = {
  args: {
    products: [
      {
        name: "Smashed Avo",
        price: 25,
        image: "https://sushi-restaurant-phi.vercel.app/item1.aef69296.jpg",
        id: "1",
      },
      {
        name: "Yin & Yang",
        price: 15,
        image: "https://sushi-restaurant-phi.vercel.app/item2.fb0267f5.jpg",
        id: "2",
      },
      {
        name: "Pancakes",
        price: 25,
        image: "https://sushi-restaurant-phi.vercel.app/item3.dd2f5a77.jpg",
        id: "3",
      },
      {
        name: "Huevos Rancheros",
        price: 75,
        image: "https://sushi-restaurant-phi.vercel.app/item4.1bc8531b.jpg",
        id: "4",
      },
      {
        name: "Rancheros (Tofu)",
        price: 47,
        image: "https://sushi-restaurant-phi.vercel.app/item5.57044373.jpg",
        id: "5",
      },
      {
        name: "Breakkie Roll",
        price: 77,
        image: "https://sushi-restaurant-phi.vercel.app/item5.57044373.jpg",
        id: "6",
      },
      {
        name: "Breakkie Roll",
        price: 98,
        image: "https://sushi-restaurant-phi.vercel.app/item7.8a2c0654.jpg",
        id: "7",
      },
      {
        name: "Burrito",
        price: 59,
        image: "https://sushi-restaurant-phi.vercel.app/item8.03c62f49.jpg",
        id: "8",
      },
    ],
  },
};

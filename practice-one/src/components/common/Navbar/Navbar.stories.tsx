import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from ".";
import { CartProvider } from "../../../context/CartContext";

export default {
  title: "Components/Navbar",
  component: Navbar,
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

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    width: 134,
  },
};

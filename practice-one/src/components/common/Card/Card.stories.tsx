import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Card from ".";
import { CartProvider } from "../../../stores/contexts/CartContext";

export default {
  title: "Components/Card",
  component: Card,
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

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    width: 443,
    titleCard: "Promo Code",
    titleButton: "apply",
    className: "card card-secondary font-family",
    showInput: true,
    variants: "secondary",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import FormCheckout from ".";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../../context/CartContext";

export default {
  title: "Components/FormCheckout",
  component: FormCheckout,
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

type Story = StoryObj<typeof FormCheckout>;

export const Default: Story = {
  args: {},
};

import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Checkout from "./Checkout";

export default {
  title: "Components/Checkout",
  component: Checkout,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof Checkout>;

export const Default: Story = {
  args: {},
};

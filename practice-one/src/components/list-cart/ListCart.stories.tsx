import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ListCart from "./ListCart";

export default {
  title: "Components/ListCart",
  component: ListCart,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof ListCart>;

export const Default: Story = {};

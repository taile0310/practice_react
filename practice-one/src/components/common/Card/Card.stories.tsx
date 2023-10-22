import { Meta, StoryObj } from "@storybook/react";
import Card from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    width: 443,
    titleCard: "Promo Code",
    titleButton: "Apply",
    className: "card card-secondary font-family",
    showInput: true,
  },
};

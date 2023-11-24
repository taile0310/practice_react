import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Card from ".";
import { VARIANT } from "../../../types/Variant";

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
    titleButton: "apply",
    className: "card card-secondary font-family",
    showInput: true,
    variants: VARIANT.SECONDARY,
  },
};

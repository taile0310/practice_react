import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "enter promo code",
    className: "card-input promo-code",
  },
};

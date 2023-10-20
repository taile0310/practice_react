import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import { BTN_VARIANTS } from "../../../constant/btn";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variants: "primary",
    textBtn: "menu",
    size: "large",
    typeText: "uppercase",
  },
};

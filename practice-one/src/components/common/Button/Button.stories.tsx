import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import { VARIANT } from "../../../types/Variant";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variants: VARIANT.PRIMARY,
    children: "menu",
    size: "md",
    typeText: "uppercase",
  },
};

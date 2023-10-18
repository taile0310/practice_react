import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    isHomePage: true,
    textBtn: "MENU",
    className: "btn-primary primary-text-btn",
  },
};

export const Secondary: Story = {
  args: {
    textBtn: "Apply",
    className: "btn-secondary text-large btn-apply",
  },
};

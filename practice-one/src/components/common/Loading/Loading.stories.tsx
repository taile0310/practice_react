import type { Meta, StoryObj } from "@storybook/react";
import Loading from ".";

export default {
  title: "Components/Loading",
  component: Loading,
} as Meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {},
};

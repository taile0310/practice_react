import type { Meta, StoryObj } from "@storybook/react";
import FormCheckout from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/FormCheckout",
  component: FormCheckout,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof FormCheckout>;

export const Default: Story = {
  args: {},
};

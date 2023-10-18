import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Menu from ".";

export default {
  title: "Components/Menu",
  component: Menu,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {};

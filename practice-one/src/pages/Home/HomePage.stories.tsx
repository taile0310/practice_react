import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from ".";

export default {
  title: "Components/HomePage",
  component: HomePage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  args: {},
};

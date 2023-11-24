import type { Meta, StoryObj } from "@storybook/react";
import Product from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Product",
  component: Product,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof Product>;

export const Default: Story = {
  args: {
    image: "https://sushi-restaurant-phi.vercel.app/item1.aef69296.jpg",
    name: "Smashed Avo",
    width: 224,
  },
};

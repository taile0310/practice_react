import { Meta, StoryObj } from "@storybook/react";
import Image from ".";
import { Menu } from "../../../assets/image";

export default {
  title: "Components/Image",
  component: Image,
} as Meta;

type Story = StoryObj<typeof Image>;

export const ImageRectangle: Story = {
  args: {
    src: "https://sushi-restaurant-phi.vercel.app/item1.aef69296.jpg",
  },
};

export const ImageCircle: Story = {
  args: {
    src: "https://sushi-restaurant-phi.vercel.app/item1.aef69296.jpg",
    className: "img-circle",
  },
};

export const Icon: Story = {
  args: {
    src: Menu,
  },
};

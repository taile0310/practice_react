import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { CustomBtnProps } from "../../../types/interface";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    isHomePage: { control: "boolean" },
    textBtn: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = (args: CustomBtnProps) => {
  const { isHomePage } = args;
  const className = isHomePage
    ? "btn-primary primary-text-btn"
    : "btn-secondary text-large btn-apply";

  return <Button {...args} className={className} />;
};

Default.args = {
  isHomePage: true,
  textBtn: "MENU",
};

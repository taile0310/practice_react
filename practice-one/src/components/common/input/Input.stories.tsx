import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { CustomInputProps } from "../../../types/interface";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  argTypes: {
    placeholder: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;
export const Default: Story = (args: CustomInputProps) => {
  return <Input {...args} />;
};

Default.args = {
  placeholder: "enter promo code",
};

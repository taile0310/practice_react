import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { CustomCardProps } from "../../../types/interface";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  argTypes: {
    titleCard: { control: "text" },
    width: { control: "number", defaultValue: 443 },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = (args: CustomCardProps) => {
  return <Card {...args} />;
};

Default.args = {
  titleCard: "Promo Code",
  width: 443,
};

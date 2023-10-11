import React from "react";
import { Story, Meta } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import { CustomNavbarProps } from "../../../types/interface";

export default {
  title: "Navbar",
  component: Navbar,
  argTypes: {
    width: { control: "number", defaultValue: 150 },
  },
} as Meta;

const Template: Story = (args: CustomNavbarProps) => (
  <Router>
    <Navbar {...args} />
  </Router>
);

export const Default = Template.bind({});

Default.args = {
  width: 150,
};

import type { Meta, StoryObj } from "@storybook/react";
import Error from ".";
import { ERROR_MESSAGES } from "../../../constant/Errors";

export default {
  title: "Components/Error",
  component: Error,
} as Meta;

type Story = StoryObj<typeof Error>;

export const Default: Story = {
  args: {
    className: "messages-error text-medium font-family",
    content: ERROR_MESSAGES.FETCH,
  },
};

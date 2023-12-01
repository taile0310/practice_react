import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button, { CustomBtnProps } from ".";
import { VARIANT } from "../../../types/Variant";

describe("Button Component", () => {
  const props = {
    variant: VARIANT.PRIMARY,
    size: "xl",
    typeText: "uppercase",
    children: "Click me",
    onClick: jest.fn(),
  } as CustomBtnProps;

  it("Render correctly with default props", () => {
    const container = render(<Button {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("Render with variant is secondary", () => {
    const container = render(
      <Button {...props} variants={VARIANT.SECONDARY} />
    );
    expect(container).toMatchSnapshot();
  });

  it("Render with size is lg", () => {
    const container = render(<Button {...props} size={"lg"} />);
    expect(container).toMatchSnapshot();
  });

  it("Render with size is capitalize", () => {
    const container = render(<Button {...props} typeText={"capitalize"} />);
    expect(container).toMatchSnapshot();
  });

  it("Call onClick handler when clicked", () => {
    const { getByText } = render(<Button {...props} />);
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});

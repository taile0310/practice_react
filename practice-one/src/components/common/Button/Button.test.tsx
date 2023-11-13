import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from ".";
import { VARIANT } from "../../../types/Variant";
import { TButtonSize } from "../../../types/Button/Size";
import { TButtonText } from "../../../types/Button/Text";

describe("Button Component", () => {
  const props = {
    variant: VARIANT.PRIMARY,
    size: "xl" as TButtonSize,
    typeText: "uppercase" as TButtonText,
    children: "Click me",
  };

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

  it("Render with size is md", () => {
    const container = render(<Button {...props} size={"md"} />);
    expect(container).toMatchSnapshot();
  });

  it("Render with size is sm", () => {
    const container = render(<Button {...props} size={"sm"} />);
    expect(container).toMatchSnapshot();
  });

  it("Render with size is xs", () => {
    const container = render(<Button {...props} size={"xs"} />);
    expect(container).toMatchSnapshot();
  });

  it("Render with size is capitalize", () => {
    const container = render(<Button {...props} typeText={"capitalize"} />);
    expect(container).toMatchSnapshot();
  });
});

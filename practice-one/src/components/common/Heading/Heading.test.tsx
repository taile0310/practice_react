import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Heading from ".";
import { THeading } from "../../../types/Heading";

describe("Heading Component", () => {
  const props = {
    element: "h1" as THeading,
    children: "Shushi",
  };
  it("Render correctly with default props", () => {
    const container = render(<Heading {...props} />);
    expect(container).toMatchSnapshot();
  });
  it("Render with elment is h2", () => {
    const container = render(<Heading {...props} element="h2" />);
    expect(container).toMatchSnapshot();
  });
  it("Render with elment is h3", () => {
    const container = render(<Heading {...props} element="h3" />);
    expect(container).toMatchSnapshot();
  });
  it("Render with elment is h4", () => {
    const container = render(<Heading {...props} element="h4" />);
    expect(container).toMatchSnapshot();
  });
  it("Render with elment is h5", () => {
    const container = render(<Heading {...props} element="h5" />);
    expect(container).toMatchSnapshot();
  });
  it("Render with elment is h6", () => {
    const container = render(<Heading {...props} element="h6" />);
    expect(container).toMatchSnapshot();
  });
});

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Heading, { HeadingProps } from ".";

describe("Heading Component", () => {
  const props = {
    element: "h1",
    children: "Shushi",
  } as HeadingProps;
  it("Render correctly with default props", () => {
    const container = render(<Heading {...props} />);
    expect(container).toMatchSnapshot();
  });
  it("Render with elment is h2", () => {
    const container = render(<Heading {...props} element="h2" />);
    expect(container).toMatchSnapshot();
  });
});

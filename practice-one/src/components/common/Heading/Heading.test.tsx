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
});

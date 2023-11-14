import { render } from "@testing-library/react";
import Image from ".";

describe("Image Component", () => {
  it("Render component correctly", () => {
    const container = render(<Image />);
    expect(container).toMatchSnapshot();
  });
});

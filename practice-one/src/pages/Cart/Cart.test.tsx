import { render } from "@testing-library/react";
import Cart from ".";

describe("Cart Component", () => {
  it("Render component correctly", () => {
    const container = render(<Cart />);
    expect(container).toMatchSnapshot();
  });
});

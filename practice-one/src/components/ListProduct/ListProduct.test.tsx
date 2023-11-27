import { render } from "@testing-library/react";
import ListProduct from ".";

describe("ListProduct Component", () => {
  it("Render component correctly", () => {
    const container = render(<ListProduct />);
    expect(container).toMatchSnapshot();
  });
});

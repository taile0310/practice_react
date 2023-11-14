import { render } from "@testing-library/react";
import DetailDish from ".";

describe("DetailDish Component", () => {
  it("Render component correctly", () => {
    const props = {
      name: "Yin & Yang",
      price: 15,
    };
    const container = render(<DetailDish {...props} />);
    expect(container).toMatchSnapshot();
  });
});

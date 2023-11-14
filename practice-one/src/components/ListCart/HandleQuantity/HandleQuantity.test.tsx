import { render } from "@testing-library/react";
import HandleQuantity from ".";

describe("HandleQuantity Component", () => {
  it("Render component correctly", () => {
    const props = {
      id: "1",
      quantity: 1,
    };
    const container = render(<HandleQuantity {...props} />);
    expect(container).toMatchSnapshot();
  });
});

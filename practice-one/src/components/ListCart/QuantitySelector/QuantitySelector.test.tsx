import { render } from "@testing-library/react";
import QuantitySelector from ".";

describe("HandleQuantity Component", () => {
  it("Render component correctly", () => {
    const props = {
      id: "1",
      quantity: 1,
      handleUpdateQuantity: jest.fn(),
      handleRemoveFromCart: jest.fn(),
    };
    const container = render(<QuantitySelector {...props} />);
    expect(container).toMatchSnapshot();
  });
});

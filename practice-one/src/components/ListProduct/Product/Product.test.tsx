import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Product from ".";

describe("Product Component", () => {
  const props = {
    id: "1",
    name: "Yin & Yang",
    image: "",
    product: {
      id: "2",
      name: "Panakes",
      image: "",
      price: 15,
      quantity: 1,
    },
    handleRemoveProduct: jest.fn(),
    handleAddToCart: jest.fn(),
    handleRemoveFromCart: jest.fn(),
  };

  it("Render component correctly", () => {
    const container = render(<Product {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("Handle click event correctly", () => {
    render(<Product {...props} name="Panakes" />);
    const imageElement = screen.getByText("Panakes");
    fireEvent.click(imageElement);
  });
});

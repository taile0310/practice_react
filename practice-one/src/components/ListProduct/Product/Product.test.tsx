import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Product from ".";

describe("Product Component", () => {
  const props = {
    id: "1",
    name: "Yin & Yang",
    image: "https://sushi-restaurant-phi.vercel.app/item1.fb0267f5.jpg",
    product: {
      id: "2",
      name: "Panakes",
      image: "https://sushi-restaurant-phi.vercel.app/item2.fb0267f5.jpg",
      price: 15,
      quantity: 1,
    },
    onRemoveProduct: jest.fn(),
    onAddToCart: jest.fn(),
    onRemoveFromCart: jest.fn(),
    onToggleUpdateProduct: jest.fn(),
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

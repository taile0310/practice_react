import { render } from "@testing-library/react";
import CartItem from ".";
import "@testing-library/jest-dom";

describe("CartItem Component", () => {
  const props = {
    id: "1",
    name: "Yin & Yang",
    image: "https://sushi-restaurant-phi.vercel.app/item2.fb0267f5.jpg",
    price: 25,
    quantity: 1,
  };
  it("Render component correctly", () => {
    const container = render(<CartItem {...props} />);
    expect(container).toMatchSnapshot();
  });
});

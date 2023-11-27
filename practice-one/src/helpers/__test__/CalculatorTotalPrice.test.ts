import { CustomProductProps } from "../../types/Product";
import { calculatorTotalPrice } from "../CalculatorToltalPrice";

describe("Functions Calculator Total Price", () => {
  it("Return 0 when cart is empty", () => {
    const carts: CustomProductProps[] = [];
    const totalPrice = calculatorTotalPrice(carts);
    expect(totalPrice).toBe(0);
  });

  it("Calculator total price correctly", () => {
    const carts: CustomProductProps[] = [
      {
        id: "1",
        name: "Yin & Yang",
        image: "https://sushi-restaurant-phi.vercel.app/item.fb0267f5.jpg",
        quantity: 1,
        price: 10,
      },
      {
        id: "2",
        name: "Pancakes",
        image: "https://sushi-restaurant-phi.vercel.app/item2.fb0267f5.jpg",
        quantity: 2,
        price: 15,
      },
    ];
    const totalPrice = calculatorTotalPrice(carts);
    expect(totalPrice).toBe(40);
  });
});

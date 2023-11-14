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
      { id: "1", name: "Yin & Yang", image: "", quantity: 1, price: 10 },
      { id: "2", name: "Pancakes", image: "", quantity: 2, price: 15 },
    ];
    const totalPrice = calculatorTotalPrice(carts);
    expect(totalPrice).toBe(40);
  });
  it("Handle missing quantity and price", () => {
    const carts: CustomProductProps[] = [
      {
        id: "1",
        name: "Yin & Yang",
        image: "",
        quantity: 0 ,
        price: 10,
      },
      { id: "2", name: "Pancakes", image: "", quantity: 2, price: 0 },
    ];
    const totalPrice = calculatorTotalPrice(carts);
    expect(totalPrice).toBe(0);
  });
});

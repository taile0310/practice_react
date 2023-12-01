import { act, renderHook } from "@testing-library/react";
import { cartStore } from "..";

global.window.confirm = jest.fn(() => true);

describe("cartStore", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const product = {
    id: "1",
    name: "Yin & Yang",
    image: "",
    price: 10,
  };

  it("Add product to cart", () => {
    const { result } = renderHook(() => cartStore());

    act(() => {
      result.current.handleAddToCart(product);
    });

    expect(result.current.carts).toHaveLength(1);
    expect(result.current.carts[0].id).toBe("1");
  });

  it("Remove product from cart", () => {
    const { result } = renderHook(() => cartStore());

    act(() => {
      result.current.handleAddToCart(product);
    });

    act(() => {
      result.current.handleRemoveFromCart("1");
    });

    expect(result.current.carts).toHaveLength(0);
  });

  it("Update quantity of a product in the cart", () => {
    const { result } = renderHook(() => cartStore());

    act(() => {
      result.current.handleAddToCart(product);
    });

    act(() => {
      result.current.handleUpdateQuantity("1", "increase");
    });

    expect(result.current.carts[0].quantity).toBe(2);

    act(() => {
      result.current.handleUpdateQuantity("1", "decrease");
    });

    expect(result.current.carts[0].quantity).toBe(1);
  });
});

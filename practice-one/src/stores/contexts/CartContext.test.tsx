import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import { CartContext, CartProvider } from "./CartContext";
import { CustomProductProps } from "../../types/Product";
import { TAction } from "../../types/Action";

jest.spyOn(window, "confirm").mockImplementation(() => true);

describe("CartProvider", () => {
  const product = {
    id: "1",
    name: "Panakes",
    price: 10,
    quantity: 1,
    isExist: true,
  } as CustomProductProps;

  it("Add a product to the cart", async () => {
    const { getByText } = render(
      <BrowserRouter>
        <CartProvider>
          <CartContext.Consumer>
            {(value) => (
              <button onClick={() => value.handleAddToCart(product)}>
                Add to Cart
              </button>
            )}
          </CartContext.Consumer>
        </CartProvider>
      </BrowserRouter>
    );

    const addToCartButton = getByText("Add to Cart");
    fireEvent.click(addToCartButton);
  });

  it("Remove a product from the cart", () => {
    const { getByText } = render(
      <BrowserRouter>
        <CartProvider>
          <CartContext.Consumer>
            {(value) => (
              <>
                <button onClick={() => value.handleRemoveFromCart(product.id)}>
                  Remove from Cart
                </button>
              </>
            )}
          </CartContext.Consumer>
        </CartProvider>
      </BrowserRouter>
    );
    const removeFromCartButton = getByText("Remove from Cart");
    fireEvent.click(removeFromCartButton);
  });

  it("Update the quantity of a product in the cart", async () => {
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <CartProvider>
          <CartContext.Consumer>
            {(value) => (
              <>
                <button
                  onClick={() =>
                    value.handleUpdateQuantity(
                      product.id,
                      "INCREMENT" as TAction
                    )
                  }>
                  Update Quantity
                </button>
                <div data-testid="cart">
                  Panakes - Quantity: {product.quantity + 1}
                </div>
              </>
            )}
          </CartContext.Consumer>
        </CartProvider>
      </BrowserRouter>
    );
    const updateQuantityButton = getByText("Update Quantity");
    fireEvent.click(updateQuantityButton);

    await waitFor(() => {
      const updatedCart = getByTestId("cart").textContent;
      expect(updatedCart).toContain("Panakes");
      expect(updatedCart).toContain("Quantity: 2");
    });
  });
});

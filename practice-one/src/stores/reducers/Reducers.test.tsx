import { TState, reducer } from ".";
import { TActionReducer } from "./action";

describe("reducer", () => {
  const initialState: TState = {
    carts: [
      {
        id: "1",
        name: "Yin & Yang",
        quantity: 2,
        price: 10,
        image: "",
      },
      {
        id: "2",
        name: "Panakes",
        quantity: 1,
        price: 15,
        image: "",
      },
    ],
  };

  it("should handle ADD_TO_CART action", () => {
    const action: TActionReducer = {
      type: "ADD_TO_CART",
      product: {
        id: "3",
        name: "Burrito",
        quantity: 1,
        price: 15,
        image: "",
      },
    };
    const newState = reducer(initialState, action);

    expect(newState.carts).toHaveLength(initialState.carts.length + 1);
    expect(newState.carts).toContainEqual(action.product);
  });

  it("should handle REMOVE_FROM_CART action", () => {
    const action: TActionReducer = {
      type: "REMOVE_FROM_CART",
      productId: "1",
    };
    const newState = reducer(initialState, action);

    expect(newState.carts).toHaveLength(initialState.carts.length - 1);
    expect(
      newState.carts.filter((item) => item.id !== action.productId)
    ).toEqual([
      {
        id: "2",
        image: "",
        name: "Panakes",
        price: 15,
        quantity: 1,
      },
    ]);
  });

  it("should handle UPDATE_QUANTITY action (increase)", () => {
    const action: TActionReducer = {
      type: "UPDATE_QUANTITY",
      productId: "1",
      action: "increase",
    };
    const newState = reducer(initialState, action);

    const updatedItem = newState.carts.find(
      (item) => item.id === action.productId
    );

    expect(updatedItem?.quantity).toBe(initialState.carts[0].quantity + 1);
  });

  it("should handle UPDATE_QUANTITY action (decrease)", () => {
    const action: TActionReducer = {
      type: "UPDATE_QUANTITY",
      productId: "1",
      action: "decrease",
    };
    const newState = reducer(initialState, action);

    const updatedItem = newState.carts.find(
      (item) => item.id === action.productId
    );

    expect(updatedItem?.quantity).toBe(initialState.carts[0].quantity - 1);
  });

  it("should not allow quantity to go below 1 when decreasing", () => {
    const action: TActionReducer = {
      type: "UPDATE_QUANTITY",
      productId: "2",
      action: "decrease",
    };
    const newState = reducer(initialState, action);

    const updatedItem = newState.carts.find(
      (item) => item.id === action.productId
    );

    expect(updatedItem?.quantity).toBe(1);
  });
});

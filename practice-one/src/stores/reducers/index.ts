import { TActionReducer } from "./action";
import { CustomProductProps } from "../../types/Product";

export type TState = {
  carts: CustomProductProps[];
};

export const reducer = (state: TState, action: TActionReducer) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        carts: [...state.carts, action.product],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.productId),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        carts: state.carts.map((item) => {
          if (item.id === action.productId) {
            const increment = action.action === "increase" ? 1 : -1;
            const newQuantity = (item.quantity || 0) + increment;
            const updatedItem = {
              ...item,
              quantity: newQuantity >= 1 ? newQuantity : 1,
            };
            return updatedItem;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

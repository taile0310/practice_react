import { TAction } from "../../../types/Action";
import { CustomProductProps } from "../../../types/Product";

export type TActionReducer =
  | { type: "ADD_TO_CART"; product: CustomProductProps }
  | { type: "REMOVE_FROM_CART"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; action: TAction };

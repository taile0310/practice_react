import { CustomProductProps } from "../types/Product";

// Method get list cart in local storage
export const getListCart = () => {
  return JSON.parse(localStorage.getItem("CartProducts") || "[]");
};

// Method set list cart in local storage
export const setListCart = (carts: CustomProductProps[]) => {
  localStorage.setItem("CartProducts", JSON.stringify(carts));
};

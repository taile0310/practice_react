import { BASE_URL, ERROR_MESSAGES } from "../constants";
import { CustomProductProps } from "../types";

const removeProduct = async (productId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(ERROR_MESSAGES.FETCH);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGES.FETCH);
  }
};

const updateProduct = async (
  productId: string,
  updatedProductData: CustomProductProps
) => {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedProductData),
    });
    if (!response.ok) {
      throw new Error(ERROR_MESSAGES.FETCH);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGES.FETCH);
  }
};

const addProduct = async (addNewProduct: CustomProductProps) => {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addNewProduct),
    });
    if (!response.ok) {
      throw new Error(ERROR_MESSAGES.FETCH);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGES.FETCH);
  }
};

export const ApiService = {
  removeProduct,
  updateProduct,
  addProduct,
};

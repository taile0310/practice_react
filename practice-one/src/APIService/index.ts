// Type and constants
import { BASE_URL, ERROR_MESSAGES } from "../constants";
import { CustomProductProps } from "../types";

/**
 * Delete products
 * @param productId - ID of the product to be deleted
 * @returns - Promise contains response data from the server
 */
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

/**
 * Update product information
 * @param productId - ID of the product that needs to be updated
 * @param updatedProductData
 * @returns - Promise contains response data from the server
 */
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

/**
 * Add new product
 * @param addNewProduct - Data of new products
 * @returns - Promise contains response data from the server
 */
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

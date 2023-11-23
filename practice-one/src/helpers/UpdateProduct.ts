import { BASE_URL } from "../constants/BaseUrl";
import { CustomProductProps } from "../types/Product";

export const updateProduct = async (
  productId: string,
  updatedProductData: CustomProductProps
) => {
  try {
    console.log(123);
    const res = await fetch(`${BASE_URL}/${productId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedProductData),
    });
    console.log(res, "updatedProduct");
    if (!res.ok) {
      throw new Error("Failed to delete product");
    }
    return true;
  } catch (error) {
    console.error("Error updating product:", error);
    throw new Error("Error updating product");
  }
};

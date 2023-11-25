import { BASE_URL } from "../constants/BaseUrl";
import { CustomProductProps } from "../types/Product";
export const updateProduct = async (
  productId: string,
  updatedProductData: CustomProductProps
) => {
  try {
    const res = await fetch(`${BASE_URL}/${productId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedProductData),
    });
    if (res.ok) {
      return true;
    }
    return false;
  } catch (error) {
    alert("Failed to update product");
  }
};

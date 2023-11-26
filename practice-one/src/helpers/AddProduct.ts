import { BASE_URL } from "../constants/BaseUrl";
import { CustomProductProps } from "../types/Product";
export const addProduct = async (addNewProduct: CustomProductProps) => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addNewProduct),
    });
    if (res.ok) {
      return true;
    }
    return false;
  } catch (error) {
    alert("Failed to add product");
  }
};

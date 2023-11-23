import { BASE_URL } from "../constants/BaseUrl";

export const deleteProduct = async (productId: string) => {
  try {
    const res = await fetch(`${BASE_URL}/${productId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed to delete product");
    }
    return true;
  } catch (error) {
    console.error("Error deleting product:", error);
    return false;
  }
};

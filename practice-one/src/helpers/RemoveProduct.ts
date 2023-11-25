import { BASE_URL } from "../constants/BaseUrl";
export const deleteProduct = async (productId: string) => {
  try {
    const res = await fetch(`${BASE_URL}/${productId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      return true;
    }
    return false;
  } catch (error) {
    alert("Failed to delete product");
    return false;
  }
};

import { BASE_URL } from "../../constants/BaseUrl";
import { deleteProduct } from "../RemoveProduct";

describe("deleteProduct", () => {
  const productId = "1";

  it("Deleted successfully", async () => {
    const response = {
      ok: true,
      json: jest.fn().mockResolvedValue(productId),
    };

    global.fetch = jest.fn().mockResolvedValue(response);

    const deletedProductId = await deleteProduct(productId);

    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/${productId}`, {
      method: "DELETE",
    });

    expect(deletedProductId).toBe(true);
  });

  it("Deleted fail", async () => {
    const response = {
      ok: false,
      json: jest.fn().mockResolvedValue(productId),
    };
    global.fetch = jest.fn().mockResolvedValue(response);

    const deletedProductId = await deleteProduct(productId);

    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/${productId}`, {
      method: "DELETE",
    });

    expect(deletedProductId).toBe(false);
  });
});

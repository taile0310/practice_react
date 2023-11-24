import { BASE_URL } from "../../constants/BaseUrl";
import { updateProduct } from "../UpdateProduct";

describe("updateProduct", () => {
  const productId = "1";
  const updatedProductData = {
    id: "1",
    name: "Yin & Yang",
    image: "images",
    price: 25,
  };

  it("Update successfully", async () => {
    const response = {
      ok: true,
      json: jest.fn().mockResolvedValue(productId),
    };

    global.fetch = jest.fn().mockResolvedValue(response);

    const updateProductId = await updateProduct(productId, updatedProductData);

    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/${productId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedProductData),
    });

    expect(updateProductId).toBe(true);
  });

  it("Update Fail", async () => {
    const response = {
      ok: false,
      json: jest.fn().mockResolvedValue(productId),
    };

    global.fetch = jest.fn().mockResolvedValue(response);

    const updateProductId = await updateProduct(productId, updatedProductData);

    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/${productId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedProductData),
    });

    expect(updateProductId).toBe(false);
  });
});

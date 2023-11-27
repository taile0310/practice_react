import { BASE_URL } from "../../constants/BaseUrl";
import { addProduct } from "../AddProduct";

describe("updateProduct", () => {
  const product = {
    id: "1",
    name: "Yin & Yang",
    image: "https://sushi-restaurant-phi.vercel.app/item1.fb0267f5.jpg",
    price: 25,
  };
  it("Add successfully", async () => {
    const response = {
      ok: true,
      json: jest.fn().mockResolvedValue(product),
    };

    global.fetch = jest.fn().mockResolvedValue(response);

    const addNewProduct = await addProduct(product);

    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    });

    expect(addNewProduct).toBe(true);
  });

  it("Update Fail", async () => {
    const response = {
      ok: false,
      json: jest.fn().mockResolvedValue(product),
    };

    global.fetch = jest.fn().mockResolvedValue(response);

    const addNewProduct = await addProduct(product);

    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    });

    expect(addNewProduct).toBe(false);
  });
});

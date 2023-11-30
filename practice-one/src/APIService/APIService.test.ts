import { ApiService } from ".";
import { BASE_URL, ERROR_MESSAGES } from "../constants";
import { CustomProductProps } from "../types";

describe("ApiService", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const mockResponse = (status: number, responseData: CustomProductProps) =>
    Promise.resolve({
      ok: status >= 200 && status < 300,
      json: () => Promise.resolve(responseData),
    });

  const product = {
    id: "1",
    name: "Panakes",
    price: 15,
    image: "https://sushi-restaurant-phi.vercel.app/item8.03c62f49.jpg",
  };
  it("removeProduct should make a DELETE request to the correct URL", async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(() => mockResponse(200, product));

    await ApiService.removeProduct("1");

    expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}/1`, {
      method: "DELETE",
    });
  });

  it("removeProduct should throw an error when the request fails", async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(() => mockResponse(400, product));

    await expect(ApiService.removeProduct("1")).rejects.toThrow(
      ERROR_MESSAGES.FETCH
    );
  });

  it("updateProduct should make a PUT request to the correct URL with the provided data", async () => {
    const updatedProduct: CustomProductProps = {
      id: "2",
      name: "Yin & Yang",
      image: "https://sushi-restaurant-phi.vercel.app/item1.fb0267f5.jpg",
      price: 25,
    };

    global.fetch = jest
      .fn()
      .mockImplementation(() => mockResponse(200, updatedProduct));

    await ApiService.updateProduct("2", updatedProduct);

    expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}/2`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });
  });

  it("updateProduct should throw an error when the request fails", async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(() => mockResponse(400, product));

    await expect(ApiService.updateProduct("1", product)).rejects.toThrow(
      ERROR_MESSAGES.FETCH
    );
  });

  it("addProduct should make a POST request to the correct URL with the provided data", async () => {
    const newProduct: CustomProductProps = {
      id: "3",
      name: "Panakes",
      image: "https://sushi-restaurant-phi.vercel.app/item2.fb0267f5.jpg",
      price: 15,
    };

    global.fetch = jest
      .fn()
      .mockImplementation(() => mockResponse(200, newProduct));

    await ApiService.addProduct(newProduct);

    expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProduct),
    });
  });

  it("addProduct should throw an error when the request fails", async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(() => mockResponse(400, product));

    await expect(ApiService.addProduct(product)).rejects.toThrow(
      ERROR_MESSAGES.FETCH
    );
  });
});

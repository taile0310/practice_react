import { ERROR_MESSAGES } from "../../constants";
import { BASE_URL } from "../../constants/BaseUrl";
import { fetchData } from "../FetchData";

describe("Function Fetch Data", () => {
  it("Fetches data from URL and returns parsed JSON data if response is ok", async () => {
    const mockData = [
      {
        id: "2",
        name: "Yin & Yang",
        image: "https://sushi-restaurant-phi.vercel.app/item2.fb0267f5.jpg",
        price: 15,
      },
      {
        id: "3",
        name: "Pancakes",
        image: "https://sushi-restaurant-phi.vercel.app/item3.dd2f5a77.jpg",
        price: 25,
      },
    ];

    const response = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    };
    global.fetch = jest.fn().mockResolvedValue(response);
    const data = await fetchData(BASE_URL!);
    expect(data).toEqual(mockData);
  });

  it("Throws an error if response is not ok", async () => {
    const response = {
      ok: false,
    };
    global.fetch = jest.fn().mockResolvedValue(response);
    await expect(fetchData(BASE_URL!)).rejects.toThrow(ERROR_MESSAGES.FETCH);
    expect(fetch).toHaveBeenCalledWith(BASE_URL);
  });
});

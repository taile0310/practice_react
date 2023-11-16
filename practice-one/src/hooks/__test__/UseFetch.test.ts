import { act, renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import useFetch from "../useFetch";
import * as FetchDataModule from "../../helpers/FetchData";

jest.mock("../../helpers/FetchData");
const mockFetchData = FetchDataModule.fetchData as jest.Mock;

describe("useFetch", () => {
  it("Fetches data faild", async () => {
    mockFetchData.mockRejectedValue(new Error("Fetch failed"));
    const { result } = renderHook(() => useFetch());
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(result.current.error).toBeDefined();
  });

  it("Fetches data", async () => {
    const data = [
      { id: "1", name: "Yin & Yang", image: "", quantity: 1, price: 10 },
      { id: "2", name: "Pancakes", image: "", quantity: 2, price: 15 },
    ];
    mockFetchData.mockResolvedValue(data);

    const { result } = renderHook(() => useFetch());
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });
    expect(result.current.data).toBeDefined();
  });

  it("Handles Loadmore", async () => {
    const { result } = renderHook(() => useFetch());

    await act(async () => {
      result.current.handleShowMorePoducts();
    });
    expect(result.current.data).toHaveLength(2);
  });
});

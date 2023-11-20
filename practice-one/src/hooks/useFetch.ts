// SWR
import useSWRInfinite from "swr/infinite";
import { mutate } from "swr";

// Helper and Constant
import { fetchData } from "../helpers/FetchData";
import { BASE_URL } from "../constants/BaseUrl";
import { useCallback } from "react";

const useFetch = () => {
  // The getKey function is used to create a key for each data page, based on pageIndex and previousPageData.
  const getKey = useCallback((pageIndex: number) => {
    const page = pageIndex + 1;
    const limit = 8;
    return `${BASE_URL}?page=${page}&limit=${limit}`;
  }, []);

  // Manage data fetch state.
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetchData);
  const isLoadingInitialData = !data && !error;

  // Check if data is being fetched or loaded.
  const isLoading =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");

  // Check to see if all products have been loaded or not
  const isFull = data?.[size - 1]?.length === 0;

  // Method loadmore
  const handleShowMorePoducts = () => {
    !isFull && setSize(size + 1);
    mutate(getKey(size));
  };

  return { data, isLoading, error, isFull, handleShowMorePoducts };
};

export default useFetch;

import useSWRInfinite from "swr/infinite";
import { fetchData } from "../helpers/FetchData";
import { BASE_URL } from "../constants/BaseUrl";

const useFetch = () => {
  const getKey = (pageIndex: number, previousPageData: []) => {
    if (previousPageData && !previousPageData.length) return null;
    const page = pageIndex + 1;
    const limit = 8;
    return `${BASE_URL}?page=${page}&limit=${limit}`;
  };
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetchData);
  const isLoadingInitialData = !data && !error;
  const isLoading =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const handleShowMorePoducts = () => {
    return setSize(size + 1);
  };
  return { data, isLoading, error, handleShowMorePoducts };
};

export default useFetch;

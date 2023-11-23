// SWR
import useSWRInfinite from "swr/infinite";

// Helper and Constant
import { fetchData } from "../helpers/FetchData";
import { BASE_URL } from "../constants/BaseUrl";
import { deleteProduct } from "../helpers/RemoveProduct";
import { updateProduct } from "../helpers/UpdateProduct";
import { useToggle } from "../stores/useToggle";

const useFetch = () => {
  const { inputValues } = useToggle();
  // The getKey function is used to create a key for each data page, based on pageIndex and previousPageData.
  const getKey = (pageIndex: number) => {
    const page = pageIndex + 1;
    const limit = 8;
    return `${BASE_URL}?page=${page}&limit=${limit}`;
  };

  // Manage data fetch state.
  const { data, error, size, setSize, mutate } = useSWRInfinite(
    getKey,
    fetchData
  );
  const isLoadingInitialData = !data && !error;

  // Check if data is being fetched or loaded.
  const isLoading =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");

  // Check to see if all products have been loaded or not
  const isFull = data?.[size - 1]?.length === 0;

  // Method loadmore
  const handleShowMorePoducts = async () => {
    !isFull && setSize(size + 1);
    await mutate(data);
  };

  const handleRemoveProduct = async (productId: string) => {
    await deleteProduct(productId);
    await mutate(data);
    console.log(productId);
  };

  const handleUpdateProduct = async (productId: string) => {
    try {
      await updateProduct(productId, inputValues);
      console.log(1232132);
      await mutate(data);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  return {
    data,
    isLoading,
    error,
    isFull,
    handleShowMorePoducts,
    handleRemoveProduct,
    handleUpdateProduct,
  };
};

export default useFetch;

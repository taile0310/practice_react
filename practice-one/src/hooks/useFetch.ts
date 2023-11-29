// SWR
import useSWRInfinite from "swr/infinite";
// Helper and Constant
import { BASE_URL } from "../constants/BaseUrl";
import { CustomProductProps } from "../types/Product";
import { fetchData } from "../helpers";
import { useCartStore, useToggleStore } from "../stores";
import { ERROR_MESSAGES } from "../constants";
import { ApiService } from "../APIService";
const useFetch = () => {
  const { inputValues } = useToggleStore();
  const { handleUpdateCartAfterRemove, handleUpdateProductInCart } =
    useCartStore();
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
  const handleShowMoreProducts = async () => {
    !isFull && setSize(size + 1);
    await mutate(data);
  };

  const handleRemoveProduct = async (productId: string) => {
    try {
      await ApiService.removeProduct(productId);
      handleUpdateCartAfterRemove(productId);
      mutate();
    } catch (error) {
      throw new Error(ERROR_MESSAGES.FETCH);
    }
  };

  const handleUpdateProduct = async (productId: string) => {
    try {
      await ApiService.updateProduct(productId, inputValues);
      handleUpdateProductInCart(productId, inputValues);
      mutate();
    } catch (error) {
      alert(error);
      return error;
    }
  };

  const handleAddProduct = async (product: CustomProductProps) => {
    try {
      await ApiService.addProduct(product);
      mutate();
    } catch (error) {
      throw new Error(ERROR_MESSAGES.FETCH);
    }
  };

  return {
    data,
    isLoading,
    error,
    isFull,
    mutate,
    handleShowMoreProducts,
    handleRemoveProduct,
    handleUpdateProduct,
    handleAddProduct,
  };
};
export default useFetch;

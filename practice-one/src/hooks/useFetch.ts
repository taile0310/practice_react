// SWR
import useSWRInfinite from "swr/infinite";
// Helper and Constant
import { BASE_URL } from "../constants/BaseUrl";
import { CustomProductProps } from "../types/Product";
import { fetchData } from "../helpers";
import { ERROR_MESSAGES, NOTIFY } from "../constants";
import { useCartStore, useToggleStore } from "../stores";
import { ApiService } from "../APIService";
const useFetch = () => {
  const { inputValues, setErrors, onCloseModal } = useToggleStore();
  const { handleRemoveFromCart, handleUpdateProductInCart } = useCartStore();
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
      handleRemoveFromCart(productId);
      alert(NOTIFY.HANDLE_SUCCESS);
    } catch (error) {
      alert(error);
      return error;
    }
  };

  const handleUpdateProduct = async (productId: string) => {
    if (!inputValues.name || !inputValues.image || !inputValues.price) {
      setErrors({
        name: !inputValues.name ? `${ERROR_MESSAGES.FIELD_EMPTY}` : null,
        image: !inputValues.image ? `${ERROR_MESSAGES.FIELD_EMPTY}` : null,
        price: !inputValues.price
          ? `${ERROR_MESSAGES.FIELD_EMPTY}`
          : inputValues.price <= 0
          ? `${ERROR_MESSAGES.PRICE}`
          : null,
      });
      return;
    }
    const confirmed = window.confirm(NOTIFY.UPDATE_PRODUCT);
    if (confirmed) {
      // await updateProduct(productId, inputValues);
      await mutate();
      alert(NOTIFY.HANDLE_SUCCESS);
      handleUpdateProductInCart(productId, inputValues);
      onCloseModal();
    }
  };

  const handleAddProduct = async (product: CustomProductProps) => {
    if (!product.name || !product.image || !product.price) {
      setErrors({
        name: !product.name ? `${ERROR_MESSAGES.FIELD_EMPTY}` : null,
        image: !product.image ? `${ERROR_MESSAGES.FIELD_EMPTY}` : null,
        price: !product.price
          ? `${ERROR_MESSAGES.FIELD_EMPTY}`
          : product.price <= 0
          ? `${ERROR_MESSAGES.PRICE}`
          : null,
      });
      return;
    }
    const confirmed = window.confirm(NOTIFY.ADD_PRODUCT);
    if (confirmed) {
      // await addProduct(product);
      await mutate();
      alert(NOTIFY.HANDLE_SUCCESS);
      onCloseModal();
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

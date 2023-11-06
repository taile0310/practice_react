import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/BaseUrl";
import { fetchData } from "../helpers/FetchData";
import { ERROR_MESSAGES } from "../constants/Error";
import { CustomProductProps } from "../types/Product";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<CustomProductProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchDataFromUrl = async () => {
      try {
        const data = await fetchData({ url: BASE_URL });
        setProducts(data);
        setError(null);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setProducts([]);
        setError(ERROR_MESSAGES.FETCH);
      }
    };
    fetchDataFromUrl();
  }, []);
  return { products, isLoading, error };
};

export default useFetch;

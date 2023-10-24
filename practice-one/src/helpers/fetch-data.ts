import { CustomProductProps } from "../types/TProduct";

/**
 * FetchData function to fetch data from URL and process results
 * @param url
 */

type TFecthData = {
  url: string;
  setProducts: (data: CustomProductProps[]) => void;
  setIsLoading: (value: boolean) => void;
  setError: (value: boolean) => void;
};

export const fetchData = async ({
  url,
  setProducts,
  setIsLoading,
  setError,
}: TFecthData) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = (await response.json()) as CustomProductProps[];
      setIsLoading(false);
      setError(false);
      setProducts(data);
    } else {
      setError(true);
      setIsLoading(false);
    }
  } catch (error) {
    setError(true);
    setIsLoading(false);
  }
};

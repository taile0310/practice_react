/**
 * FetchData function to fetch data from URL and process results
 * @param url
 */

import { ERROR_MESSAGES } from "../constants/Error";

type TFecthData = {
  url: string;
};

export const fetchData = async ({ url }: TFecthData) => {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error(ERROR_MESSAGES.FETCH);
};

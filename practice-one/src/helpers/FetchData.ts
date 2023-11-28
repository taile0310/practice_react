import { ERROR_MESSAGES } from "../constants/Error";

/**
 * FetchData function to fetch data from URL and process results
 * @param url
 */
export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error(ERROR_MESSAGES.FETCH);
  } catch (error) {
    return error;
  }
};

import axiosClient from "../../axios-config";
import { ParsedQs } from "qs";

export const search = async (query: ParsedQs) => {
  try {
    return await axiosClient.get(
      `http://localhost:3000/api/items?q=${query.search}`
    );
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (itemId: string) => {
  try {
    return await axiosClient.get(`http://localhost:3000/api/items/${itemId}`);
  } catch (error) {
    console.log(error);
  }
};

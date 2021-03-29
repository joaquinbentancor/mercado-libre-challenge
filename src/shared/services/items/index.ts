import axiosClient from "../../axios-config";
import { ParsedQs } from "qs";

export const search = async (query: ParsedQs) => {
  return await axiosClient.get(`/api/items?q=${query.search}`);
};

export const getItem = async (itemId: string) => {
  return await axiosClient.get(`/api/items/${itemId}`);
};

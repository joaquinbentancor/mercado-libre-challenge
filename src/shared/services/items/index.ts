import axios from "axios";
import { ParsedQs } from "qs";

export const search = async (query: ParsedQs) => {
  try {
    return (
      await axios.get(`http://localhost:3000/api/items?q=${query.search}`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (itemId: string) => {
  try {
    return (
      await axios.get(`http://localhost:3000/api/items/${itemId}`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};

import axiosClient from "../../shared/axios-config";
import { MELI_API } from "../constants";

export namespace MercadoLibreAPI {
  export const fetchItems = (query) => {
    return axiosClient.get(`${MELI_API}/sites/MLA/search?${query}`);
  };
  
  export const fetchItem = (itemId: string) => {
    return axiosClient.get(`${MELI_API}/items/${itemId}`);
  };
  
  export const fetchItemDescription = (itemId: string) => {
    return axiosClient.get(`${MELI_API}/items/${itemId}/description`);
  };
  
  export const fetchCurrency = (currencyId: string) => {
    return axiosClient.get(`${MELI_API}/currencies/${currencyId}`);
  };
  
  export const fetchCategory = (categoryId: string) => {
    return axiosClient.get(`${MELI_API}/categories/${categoryId}`);
  };
}



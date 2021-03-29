import axiosClient from "../../shared/axios-config";
import config from "../../../config";

export namespace MercadoLibreAPI {
  export const fetchItems = (query) => {
    return axiosClient.get(`${config.api.endpoint}/sites/MLA/search?${query}`);
  };

  export const fetchItem = (itemId: string) => {
    return axiosClient.get(`${config.api.endpoint}/items/${itemId}`);
  };

  export const fetchItemDescription = (itemId: string) => {
    return axiosClient.get(
      `${config.api.endpoint}/items/${itemId}/description`
    );
  };

  export const fetchCurrency = (currencyId: string) => {
    return axiosClient.get(`${config.api.endpoint}/currencies/${currencyId}`);
  };

  export const fetchCategory = (categoryId: string) => {
    return axiosClient.get(`${config.api.endpoint}/categories/${categoryId}`);
  };
}

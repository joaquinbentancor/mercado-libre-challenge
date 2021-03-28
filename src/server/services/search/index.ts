import axios from "axios";
import author from "../../helpers/author";
import { MELI_API } from "../../constants";

export const getItems = async (query: string) => {
  const result = await fetchItems(query);

  const fullInformationItems = result.data?.results
    .slice(0, 4)
    .map(async (result) => {
      const [currency] = await getItemSubResources({
        currencyId: result.currency_id,
      });

      return mapItem({ item: result, currency: currency.data });
    });

  const items = await Promise.all(fullInformationItems);
  const maxCategory = getMaxCategory(result.data?.available_filters);

  return { author, items, categories: maxCategory && [maxCategory.value] };
};

export const getItem = async (itemId: string) => {
  const result = await fetchItem(itemId);

  const [currency, category, description] = await getItemSubResources({
    currencyId: result.data?.currency_id,
    categoryId: result.data?.category_id,
    itemId,
  });

  return {
    author,
    item: mapItem({
      item: result.data,
      description: description.data,
      currency: currency.data,
      category: category.data,
    }),
  };
};

const mapItem = ({
  item,
  category = null,
  description = null,
  currency = null,
}) => {
  let mappedItem;

  if (item) {
    mappedItem = {
      id: item.id,
      title: item.title,
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping?.free_shipping,
      price: { amount: item.price },
      sold_quantity: item.sold_quantity,
      address: item.address?.state_name,
    };
  }

  if (currency) {
    mappedItem = {
      ...mappedItem,
      price: {
        ...mappedItem.price,
        currency: currency.symbol,
        decimals: currency.decimal_places,
      },
    };
  }

  if (category) {
    mappedItem = {
      ...mappedItem,
      categories: category.path_from_root?.map((c) => c.name),
    };
  }

  if (description) {
    mappedItem = {
      ...mappedItem,
      description: description.plain_text,
    };
  }

  return mappedItem;
};

const getItemSubResources = ({
  currencyId = null,
  categoryId = null,
  itemId = null,
}) => {
  const subResources = [];

  if (currencyId) {
    subResources.push(fetchCurrency(currencyId));
  }

  if (categoryId) {
    subResources.push(fetchCategory(categoryId));
  }

  if (itemId) {
    subResources.push(fetchItemDescription(itemId));
  }

  return Promise.all(subResources);
};

const getMaxCategory = (filters) => {
  if (!Array.isArray(filters)) {
    return null;
  }

  const categoryFilter = filters.find((f) => f.id == "category");

  if (!categoryFilter || categoryFilter.length === 0) {
    return null;
  }

  const maxCategory = categoryFilter.values.reduce((max, f) => {
    if (f.results > max.results) {
      return f;
    }
    return max;
  }, categoryFilter.values[0]);

  return maxCategory;
};

const fetchItems = (query) => {
  return axios.get(`${MELI_API}/sites/MLA/search?${query}`);
};

const fetchItem = (itemId: string) => {
  return axios.get(`${MELI_API}/items/${itemId}`);
};

const fetchItemDescription = (itemId: string) => {
  return axios.get(`${MELI_API}/items/${itemId}/description`);
};

const fetchCurrency = (currencyId: string) => {
  return axios.get(`${MELI_API}/currencies/${currencyId}`);
};

const fetchCategory = (categoryId: string) => {
  return axios.get(`${MELI_API}/categories/${categoryId}`);
};

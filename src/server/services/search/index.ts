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
  const maxCategory = await getMaxCategory(result.data?.filters);

  return { author, items, categories: maxCategory && mapCategory(maxCategory) };
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
    }),
    categories: mapCategory(category.data),
  };
};

const mapItem = ({ item, description = null, currency = null }) => {
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

  if (description) {
    mappedItem = {
      ...mappedItem,
      description: description.plain_text,
    };
  }

  return mappedItem;
};

const mapCategory = (category) => category.path_from_root?.map((c) => c.name);

const getItemSubResources = ({
  currencyId = null,
  categoryId = null,
  itemId = null,
}) => {
  const subResources = [];

  currencyId && subResources.push(fetchCurrency(currencyId));
  categoryId && subResources.push(fetchCategory(categoryId));
  itemId && subResources.push(fetchItemDescription(itemId));

  return Promise.all(subResources);
};

const getMaxCategory = async (filters) => {
  if (!Array.isArray(filters)) {
    return null;
  }

  const categoryFilter = filters.find((f) => f.id == "category");
  if (!categoryFilter || categoryFilter.length === 0) {
    return null;
  }

  const allCategories = await Promise.all(
    categoryFilter.values?.reduce((acc, category) => {
      acc.push(fetchCategory(category.id));
      return acc;
    }, [])
  );

  const maxCategory: any = allCategories.reduce((max: any, category: any) => {
    if (
      category.total_items_in_this_category > max.total_items_in_this_category
    ) {
      return category;
    }
    return max;
  }, allCategories[0]);

  return maxCategory.data;
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

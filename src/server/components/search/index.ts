import { MercadoLibreAPI } from "../../external-services";
import author from "../../helpers/author";

export const getItems = async (query: string) => {
  const result: any = await MercadoLibreAPI.fetchItems(query);

  const fullInformationItems = result.results
    .slice(0, 4)
    .map(async (result) => {
      const [currency] = await getItemSubResources({
        currencyId: result.currency_id,
      });

      return mapItem({ item: result, currency });
    });

  const [maxCategory, ...items] = await Promise.all([
    getMaxCategory(result.available_filters),
    ...fullInformationItems,
  ]);

  return {
    author,
    items,
    categories: mapCategory(maxCategory),
  };
};

export const getItem = async (itemId: string) => {
  const item: any = await MercadoLibreAPI.fetchItem(itemId);

  const [currency, category, description] = await getItemSubResources({
    currencyId: item.currency_id,
    categoryId: item.category_id,
    itemId,
  });

  return {
    author,
    item: mapItem({ item, description, currency }),
    categories: mapCategory(category),
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

const mapCategory = (category) => category?.path_from_root?.map((c) => c.name);

const getItemSubResources = ({
  currencyId = null,
  categoryId = null,
  itemId = null,
}) => {
  const subResources = [];

  currencyId && subResources.push(MercadoLibreAPI.fetchCurrency(currencyId));
  categoryId && subResources.push(MercadoLibreAPI.fetchCategory(categoryId));
  itemId && subResources.push(MercadoLibreAPI.fetchItemDescription(itemId));

  return Promise.all(subResources);
};

const getMaxCategory = (filters) => {
  if (!Array.isArray(filters)) return null;
  const categoryFilter = filters.find((f) => f.id == "category");
  if (!categoryFilter) return null;

  const maxCategory: any = categoryFilter.values.reduce(
    (max: any, category: any) => {
      if (category.results > max.results) {
        return category;
      }
      return max;
    },
    categoryFilter.values[0]
  );

  return maxCategory
    ? MercadoLibreAPI.fetchCategory(maxCategory.id)
    : Promise.resolve();
};

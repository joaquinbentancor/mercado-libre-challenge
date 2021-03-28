import { App } from "../containers/app";
import SearchResults from "../containers/search-results";
import ItemDetail from "../containers/item-detail";
import { getItem, search } from "../services/items";

interface Route {
  path: string;
  component: any;
  fetchInitialData?: ({ query, path }) => Promise<any>;
  exact?: boolean;
}

export const routes: Route[] = [
  {
    path: "/",
    component: App,
    exact: true,
  },
  {
    path: "/items",
    component: SearchResults,
    exact: true,
    fetchInitialData: ({ query }) => search(query),
  },
  {
    path: "/items/:id",
    component: ItemDetail,
    fetchInitialData: ({ path }) => getItem(path.split("/").pop()),
  },
];

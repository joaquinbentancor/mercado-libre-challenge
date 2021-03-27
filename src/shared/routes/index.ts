import { ParsedQs } from "qs";
import { App } from "../components/app";
import SearchResults from "../containers/search-results";
import { search } from "../services/items";

interface Route {
  path: string;
  component: any;
  fetchInitialData?: (query: ParsedQs) => Promise<any>;
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
    fetchInitialData: (query) => search(query),
  },
];

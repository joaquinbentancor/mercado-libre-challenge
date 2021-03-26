import React from "react";
import { SearchBar } from "../search-bar";
import { SearchResults } from "../../containers/search-results";
import "./style.scss";

export const App = () => {
  return (
    <>
      <SearchBar />
      <SearchResults />
    </>
  );
};

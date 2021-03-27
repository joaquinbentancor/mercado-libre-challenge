import React from "react";
import { SearchBar } from "../search-bar";
import { SearchResults } from "../../containers/search-results";
import "./style.scss";
import ItemDetail from "../../containers/item-detail";

export const App = () => {
  return (
    <>
      <SearchBar />
      
       <SearchResults /> 
    </>
  );
};

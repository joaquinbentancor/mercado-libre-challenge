import React from "react";
import { useHistory } from "react-router";
import { SearchBar } from "../../components/search-bar";

export default () => {
  let history = useHistory();

  return (
    <SearchBar onSearch={(seed) => history.push(`/items?search=${seed}`)} />
  );
};

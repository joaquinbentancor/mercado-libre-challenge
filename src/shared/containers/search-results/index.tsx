import React from "react";
import { ItemBox } from "../../components/item-box";
import { useServerSideData } from "../../hooks/use-server-side-data";
import { ItemsResult } from "../../interfaces";
import "./style.scss";

export default () => {
  const { getData } = useServerSideData();
  const itemsResults = getData<ItemsResult>();

  return (
    <div className="search-results">
      <div className="col-10">
        {itemsResults.items?.map((item) => (
          <ItemBox key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { useHistory } from "react-router";
import { ItemBox } from "../../ui-components/item-box";
import { Breadcrumb } from "../../ui-components/breadcrumb";
import { useServerSideData } from "../../hooks/use-server-side-data";
import { ItemsResult } from "../../interfaces";
import "./style.scss";

export default () => {
  const { getData } = useServerSideData();
  const itemsResult = getData<ItemsResult>();
  let history = useHistory();

  return (
    <div className="search-results">
      <Breadcrumb tags={itemsResult.categories} />
      <div className="search-results-wrapper">
        {itemsResult.items?.map((item) => (
          <ItemBox
            key={item.id}
            item={item}
            onClickItem={(itemId) => history.push(`/items/${itemId}`)}
          />
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { useHistory } from "react-router";
import { ItemBox } from "../../ui-components/item-box";
import { useServerSideData } from "../../hooks/use-server-side-data";
import { ItemsResult } from "../../interfaces";
import "./style.scss";

export default () => {
  const { getData } = useServerSideData();
  const itemsResult = getData<ItemsResult>();
  let history = useHistory();

  return (
    <div className="search-results">
      <div className="col-10">
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

import React from "react";
import { useServerSideData } from "../../hooks/use-server-side-data";
import { ItemResult } from "../../interfaces";
import { ItemDetail } from "../../ui-components/item-detail";
import "./style.scss";

export default () => {
  const { getData } = useServerSideData();
  const itemResult = getData<ItemResult>();

  return (
    <div className="item-detail">
      <div className="col-10">
        {itemResult.item && <ItemDetail item={itemResult.item}/> }
      </div>
    </div>
  );
};

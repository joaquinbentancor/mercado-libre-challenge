import React from "react";
import { ItemDetail } from "../../components/item-detail";
import "./style.scss";

export default () => {
  return (
    <div className="item-detail">
      <div className="col-10">
        <ItemDetail />
      </div>
    </div>
  );
};

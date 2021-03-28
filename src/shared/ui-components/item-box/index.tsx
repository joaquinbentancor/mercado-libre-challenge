import React from "react";
import shipping from "../../../assets/images/shipping.png";
import { Item } from "../../interfaces";
import "./style.scss";

interface ItemBoxProps {
  item: Item;
  onClickItem: (itemId: string) => void;
}

export const ItemBox = ({ item, onClickItem }: ItemBoxProps) => {
  return (
    <div className="box-wrapper">
      <div className="box-card" onClick={() => onClickItem(item.id)}>
        <div className="result-image">
          <img src={item.picture} />
        </div>
        <div className="result-content-wrapper">
          <div className="result-content-header">
            <div className="result-content-price col-9">
              <span>
                {item.price?.currency} {item.price?.amount}
              </span>
              {item.free_shipping && <img src={shipping} />}
            </div>
            <div className="result-content-place col-3">
              <span>{item.address}</span>
            </div>
          </div>
          <div className="result-content-title">
            <span >{item.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

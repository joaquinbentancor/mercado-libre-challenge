import React from "react";
import { Item } from "../../interfaces";
import "./style.scss";

interface ItemDetailProps {
  item: Item;
}

export const ItemDetail = ({ item }: ItemDetailProps) => {
  return (
    <div className="detail-wrapper">
      <div className="detail-card">
        <div style={{ display: "flex" }}>
          <div className="result-image col-7">
            <img src={item.picture} />
          </div>
          <div className="col-5">
            <div className="item-condition-wrapper">
              <span>{item.condition} - 24 vendidos</span>
            </div>
            <div className="item-title-wrapper">
              <span>{item.title}</span>
            </div>
            <div className="item-price-wrapper">
              <span>
                {item.price.currency} {item.price.amount}
              </span>
            </div>
            <div className="buy-button-wrapper">
              <button className="buy-button"> Comprar</button>
            </div>
          </div>
        </div>
        <div className="item-description-wrapper">
          <div className="item-description-title">
            <span>Descripción del producto</span>
          </div>
          <div className="item-description-content col-7">
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

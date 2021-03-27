import React from "react";
import shipping from "../../../assets/images/shipping.png";
import "./style.scss";

export const ItemDetail = () => {
  return (
    <div className="result-wrapper">
      <div className="result-card">
        <div style={{display: "flex"}}>
          <div className="result-image col-7">
            <img src={shipping}></img>
          </div>
          <div className="col-5">
            <div className="item-condition-wrapper">
              <span>Nuevo - 234 vendidos</span>
            </div>
            <div className="item-title-wrapper">
              <span>Deco reverse Sombrero Oxford</span>
            </div>
            <div className="item-price-wrapper">
              <span>$ 1.980</span>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              suscipit quia veniam expedita eum tempore nulla molestias sunt?
              Accusantium assumenda suscipit ea exercitationem totam vero qui
              nulla itaque aliquid consectetur?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

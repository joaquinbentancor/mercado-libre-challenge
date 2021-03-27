import React from "react";
import shipping from "../../../assets/images/shipping.png";
import "./style.scss";

export const ResultBox = () => {
  return (
    <div className={"result-wrapper"}>
      <div className={"result-card"}>
        <div className={"result-image col-2"}>
          <img src={shipping}></img>
        </div>
        <div className={"result-content-wrapper"}>
          <div className={"result-content-header"}>
            <div className={"result-content-price col-2"}>
              <span>$ 2000</span>
            </div>
            {true && (
              <div className="col-5">
                <img src={shipping}></img>
              </div>
            )}
            <div className={"result-content-place col-2"}>
              <span>Capital Federal</span>
            </div>
            <div></div>
          </div>
          <div className={"result-content-description"}>
            <span>Test very very very large description.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

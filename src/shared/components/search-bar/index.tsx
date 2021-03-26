import React from "react";
import search from "../../../assets/images/search.png";
import logo from "../../../assets/images/logo.png";
import "./style.scss";

export const SearchBar = () => {
  return (
    <div className="nav">
      <div className="logo-wrapper col-1">
        <img src={logo} alt="" />
      </div>
      <div className="col-9">
        <form className="form">
          <input
            type="text"
            className="input"
            placeholder="Nunca dejes de buscar"
          />
          <button className="button">
            <img src={search} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

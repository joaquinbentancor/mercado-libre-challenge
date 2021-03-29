import React, { useState } from "react";
import search from "../../../assets/images/search.png";
import logo from "../../../assets/images/logo.png";
import "./style.scss";

interface SearchBarProps {
  onSearch: (seed: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchSeed, setSearchSeed] = useState(null);

  const onSubmitForm = (evt) => {
    evt.preventDefault();

    if (searchSeed) {
      onSearch(searchSeed);
    }
  };

  return (
    <div className="nav">
      <div className="logo-wrapper">
        <img src={logo} alt="" />
      </div>
      <div className="form-wrapper">
        <form className="form" onSubmit={onSubmitForm}>
          <input
            onChange={(evt) => setSearchSeed(evt.target.value)}
            type="text"
            className="input"
            placeholder="Nunca dejes de buscar"
          />
          <button className="search-button">
            <img src={search} />
          </button>
        </form>
      </div>
    </div>
  );
};

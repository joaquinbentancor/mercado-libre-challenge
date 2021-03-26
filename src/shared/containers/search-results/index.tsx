import React from "react";
import { ResultBox } from "../../components/result-box";
import "./style.scss";

export const SearchResults = () => {
  return (
    <div className="search-results">
      <div className="col-10">
        {[0, 1, 2, 3].map((item) => (
          <ResultBox key={item} />
        ))}
      </div>
    </div>
  );
};

import React from "react";
import "./style.scss";

interface BreadcrumbProps {
  tags: string[];
}

export const Breadcrumb = ({ tags }: BreadcrumbProps) => {
  return (
    <div className="breadcrumb">
      <ul className="breadcrumb-list">
        {tags?.map((item, key) => (
          <li className="breadcrumb-item" key={key}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

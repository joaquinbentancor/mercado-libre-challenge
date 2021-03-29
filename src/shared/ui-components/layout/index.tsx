import React from "react";
import "./style.scss";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <div className="layout-children-wrapper">{children}</div>
    </div>
  );
};

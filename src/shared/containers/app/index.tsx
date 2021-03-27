import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../../routes";
import  SearchBar  from "../search-bar";
import "./style.scss";

export const App = () => {
  return (
    <>
      <SearchBar />
      
      <Switch>
        {routes.map(({ path, exact, component: Component, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props) => <Component {...props} {...rest} />}
          />
        ))}
      </Switch>
    </>
  );
};

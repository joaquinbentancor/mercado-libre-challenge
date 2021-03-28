import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../../routes";
import { Layout } from "../../ui-components/layout";
import SearchBar from "../search-bar";
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
            render={(props) => (
              <Layout>
                <Component {...props} {...rest} />
              </Layout>
            )}
          />
        ))}
      </Switch>
    </>
  );
};

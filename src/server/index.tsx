import React from "react";
import { renderToString } from "react-dom/server";
import { matchPath, StaticRouter } from "react-router-dom";
import express from "express";
import resources from "./resources";
import App from "../shared/containers/app";
import { routes } from "../shared/routes";
import htmlTemplate from "./helpers/html-template";
import config from "../../config";

const app = express();
const port = config.port || 3000;

app.use(express.static("build/public"));
app.use(express.json());
app.use(resources);

app.get("*", async (req, res) => {
  const activeRoute = routes.find((route) => matchPath(req.path, route));

  const data = await (activeRoute?.fetchInitialData
    ? activeRoute.fetchInitialData({ query: req.query, path: req.path })
    : Promise.resolve(req.path));

  const markup = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.send(htmlTemplate(markup, data));
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

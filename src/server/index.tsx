import React from "react";
import { renderToString } from "react-dom/server";
import { matchPath, StaticRouter } from "react-router-dom";
import express from "express";
import resources from "./resources";
import { App } from "../shared/components/app";
import { routes } from "../shared/routes";
import htmlTemplate from "./helpers/html-template";

const app = express();
const port = 3000;

app.use(express.static("build/public"));
app.use(express.json());
app.use(resources);

app.get("*", async (req, res) => {
  const activeRoute = routes.find((route) => matchPath(req.path, route));

  const data = await (activeRoute?.fetchInitialData
    ? activeRoute.fetchInitialData(req.query)
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

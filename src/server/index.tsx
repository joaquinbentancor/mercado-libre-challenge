import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import express from "express";
import htmlTemplate from "./helpers/html-template";
import { App } from "../shared/components/app";

const app = express();
const port = 3000;

app.use(express.static("build/public"));
app.use(express.json());

app.get("*", async (req, res) => {
  const markup = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.send(htmlTemplate(markup, { test: "test" }));
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

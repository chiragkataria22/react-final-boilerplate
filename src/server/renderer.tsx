import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import express from "express";
import getHtml from "./html/html";
import path from "path";
import App from "../client/App/App";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { ServerStyleSheet } from "styled-components";

export default (req: express.Request) => {
  const sheet = new ServerStyleSheet();
  const loadableJson = path.resolve(__dirname, "./loadable-stats.json");

  const extractor = new ChunkExtractor({
    statsFile: loadableJson,
    entrypoints: ["client"],
  });

  const content = renderToString(
    sheet.collectStyles(
      <ChunkExtractorManager extractor={extractor}>
        <StaticRouter location={req.path} context={{}}>
          <App />
        </StaticRouter>
      </ChunkExtractorManager>
    )
  );

  const styles = sheet.getStyleTags();

  const htmlData: any = {
    styles,
    children: content,
    extractor,
  };

  const html = getHtml(htmlData);

  return html;
};

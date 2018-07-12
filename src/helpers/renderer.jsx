import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";

import Routes from "../client/Routes";
import { Provider } from "react-redux";

export default async (req, store) => {
  const App = (
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  const content = renderToString(App);

  const helm = Helmet.renderStatic();
  console.log(JSON.stringify(helm));

  return `<!doctype html>
  <html ${helm.htmlAttributes.toString()}>
  <head>
      ${helm.title.toString()}
      ${helm.meta.toString()}
      ${helm.link.toString()}
  </head>
  <body ${helm.bodyAttributes.toString()}>
      <div id="app">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>`;
};

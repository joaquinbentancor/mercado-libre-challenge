import serialize from "serialize-javascript";

export default (injectableComponent, injectableData) => {
  const clientBundleScript = `<script src="/client_bundle.js"></script>`;
  const clientBundleStyle = `<link rel="stylesheet" href="/bundle.css">`;

  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Mercado Libre</title>
          ${clientBundleStyle}
          <script>window.__INITIAL_DATA__ = ${serialize(
            injectableData
          )}</script>
        </head>
        <body>
          <div id="root">${injectableComponent}</div>      
          ${clientBundleScript}
        </body>
    </html>
    `;
};

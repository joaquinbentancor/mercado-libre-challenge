const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const sharedConfig = require("./webpack.shared.config.js");

let config = {
  target: "node",
  entry: "./src/server/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/",
              emitFile: false,
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(sharedConfig, config);

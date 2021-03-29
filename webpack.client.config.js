const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const sharedConfig = require("./webpack.shared.config.js");

const config = {
  target: "node",
  entry: "./src/client/index.tsx",
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "build/public"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: { publicPath: "/" },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    new FaviconsWebpackPlugin("src/assets/images/favicon.ico"),
  ],
};

module.exports = merge(sharedConfig, config);

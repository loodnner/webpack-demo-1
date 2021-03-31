const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "halo", template: "src/assets/index.html" }),
  ],
};

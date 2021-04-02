const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js",
  },

  plugins: [
    new HtmlWebpackPlugin({ title: "halo", template: "src/assets/index.html" }),
  ],
};

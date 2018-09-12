const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              interpolate: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: "images/"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],
    extensions: [".js"]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 9000,
    hot: true
  }
};

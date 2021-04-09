const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  target: ["web", "es2015"],
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: __dirname + "/dist",
    // filename: "index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      template: path.resolve(__dirname, "index.html"),
      filename: path.resolve(__dirname, "dist", "index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [require.resolve("react-refresh/babel")],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: "web",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hotOnly: true,
    hot: true,
    port: 9000,
  },
};

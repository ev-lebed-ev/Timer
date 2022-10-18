const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (config) => ({
  ...config,

  devtool: false,

  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },

  entry: "./src/index.tsx",

  cache: {
    type: "filesystem",
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "ts-loader",
            options: {
              context: path.resolve(__dirname, "../"),
              configFile: "tsconfig.json",
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]--[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        test: /\.m4a$/,
        loader: "file-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Timer",
      template: path.resolve(__dirname, "../src/index.html"),
    }),
  ],
});

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",

  devtool: false,

  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },

  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "../docs"),
  },
  cache: {
    type: "filesystem"
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
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
            }
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
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Timer",
      template: path.resolve(__dirname, "../src/index.html")
    }),
  ],
}

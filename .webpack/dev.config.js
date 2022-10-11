const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  devtool: false,

  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },

  entry: "./src/index.tsx",

  cache: {
    type: 'filesystem'
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
        type: 'asset/resource',
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

  devServer: {
    port: 4000,
    host: "0.0.0.0",
    client: {
      overlay: {
        errors: true,
      },
    }
  },
}

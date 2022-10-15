const path = require("path");
const base = require("./base.config");

module.exports = base({
  mode: "production",

  output: {
    path: path.resolve(__dirname, "../docs"),
    filename: "[fullhash].js",
  },
});

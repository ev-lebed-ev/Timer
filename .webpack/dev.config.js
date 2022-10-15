const base = require("./base.config");

module.exports = base({
  mode: "development",
  devServer: {
    port: 4000,
    host: "0.0.0.0",
    client: {
      overlay: {
        errors: true,
      },
    },
  },
});

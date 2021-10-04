const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: __dirname, dev: dev });
const handle = app.getRequestHandler();

module.exports = {
  app,
  view: (req, res) => {
    return handle(req, res);
  },
};

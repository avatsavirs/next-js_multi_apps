const express = require("express");
const { app: app1, view: app1View } = require("../app1/server.js");
const { app: app2, view: app2View } = require("../app2/server.js");

const port = parseInt(process.env.PORT, 10) || 3000;

async function init() {
  await Promise.all([app1.prepare(), app2.prepare()]);
  const server = express();
  try {
    server.all(["/app1/", "/app1/*"], app1View);
    server.all(["/app2/", "/app2/*"], app2View);
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();

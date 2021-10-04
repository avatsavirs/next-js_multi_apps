const express = require('express')
const app1 = require('../app1/server.js');
const app2 = require('../app2/server.js');

const port = parseInt(process.env.PORT, 10) || 3000;

Promise.all([app1.prepare(), app2.prepare()]).then(() => {

	const server = express();

	server.all([ '/app1/', '/app1/*' ], (req, res) => {
    const handle = app1.getRequestHandler();
		return handle(req, res);
	});

	server.all([ '/app2/', '/app2/*' ], (req, res) => {
    const handle = app2.getRequestHandler();
		return handle(req, res);
	});

	server.listen(port, (err) => {
		if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
	});

})
.catch((ex) => {
	console.error(ex.stack);
	process.exit(1);
})

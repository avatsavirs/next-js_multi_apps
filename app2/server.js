const next = require('next')

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: __dirname, dev: dev});

module.exports = app;


const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const webpack = require('webpack');
const path = require('path');

const host = 'localhost';
const port = 3000;

config.entry.main.unshift(`webpack-dev-server/client?http://${host}:${port}/`);
config.output.publicPath = `http://${host}:${port}`;

console.log('Host in: ' + config.output.publicPath);

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {hot: false, contentBase: path.resolve(__dirname, 'dist')});

server.listen(port);

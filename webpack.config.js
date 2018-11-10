const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  watch: true,
  mode: 'development',
  entry: {
    main: ['./src/main.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new LiveReloadPlugin()
  ]
};
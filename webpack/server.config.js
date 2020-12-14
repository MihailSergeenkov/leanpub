const nodeExternals = require('webpack-node-externals');  
const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    bundle: './server/index.js',
  },
  output: {
    filename: 'server.js',
    path: path.resolve(process.cwd(), 'dist/server'),
  },
  resolve: {
    modules: [
      path.resolve(process.cwd(), 'initializers/server'), 
      path.resolve(process.cwd(), 'src'), 
      'node_modules',
    ],
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      { 
        test: /\.css/, 
        loader: 'ignore-loader',
      },
    ],
  }
};

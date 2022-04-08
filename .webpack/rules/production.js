const path = require('path');

const PROD_TS_RULE = {
  test: /\.ts$/,
  use: [
    {
      loader: 'babel-loader',
      options: { configFile: path.resolve('.webpack/babel/prod.base.js') },
    },
    {
      loader: 'ts-loader',
      options: { transpileOnly: true, onlyCompileBundledFiles: true },
    },
  ],
  exclude: /node_modules/,
};

const PROD_TSX_RULE = {
  test: /\.tsx$/,
  use: [
    {
      loader: 'babel-loader',
      options: { configFile: path.resolve('.webpack/babel/prod.react.js') },
    },
    {
      loader: 'ts-loader',
      options: { transpileOnly: true, onlyCompileBundledFiles: true },
    },
  ],
  exclude: /node_modules/,
};

const PROD_JS_RULE = {
  test: /\.js$/,
  use: [
    {
      loader: 'babel-loader',
      options: { configFile: path.resolve('.webpack/babel/prod.base.js') },
    },
  ],
  exclude: /node_modules/,
};

const PROD_JSX_RULE = {
  test: /\.jsx$/,
  use: [
    {
      loader: 'babel-loader',
      options: { configFile: path.resolve('.webpack/babel/prod.react.js') },
    },
  ],
  exclude: /node_modules/,
};

const PROD_RULES = [PROD_TSX_RULE, PROD_TS_RULE, PROD_JSX_RULE, PROD_JS_RULE];

module.exports = { PROD_RULES };

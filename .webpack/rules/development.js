const path = require('path');
const { SOURCE_DIR, STATIC_DIR } = require('../utils/constants');

const DEV_TS_RULE = {
  test: /\.ts$/,
  use: [
    {
      loader: 'babel-loader',
      options: { configFile: path.resolve('.webpack/babel/dev.base.js') },
    },
    {
      loader: 'ts-loader',
      options: { transpileOnly: true, onlyCompileBundledFiles: true },
    },
  ],
  exclude: /node_modules/,
};

const DEV_TSX_RULE = {
  test: /\.tsx$/,
  use: [
    {
      loader: 'babel-loader',
      options: { configFile: path.resolve('.webpack/babel/dev.react.js') },
    },
    {
      loader: 'ts-loader',
      options: { transpileOnly: true, onlyCompileBundledFiles: true },
    },
  ],
  exclude: /node_modules/,
};

const DEV_JS_RULE = {
  test: /\.js$/,
  use: [
    {
      loader: 'babel-loader',
      options: { configFile: path.resolve('.webpack/babel/dev.base.js') },
    },
  ],
  exclude: /node_modules/,
};

const DEV_JSX_RULE = {
  test: /\.jsx$/,
  use: [
    {
      loader: 'babel-loader',
      options: { configFile: path.resolve('.webpack/babel/dev.react.js') },
    },
  ],
  exclude: /node_modules/,
};

const DEV_RULES = [DEV_TSX_RULE, DEV_TS_RULE, DEV_JSX_RULE, DEV_JS_RULE];

module.exports = { DEV_RULES };

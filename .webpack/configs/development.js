const baseConfig = require('./base');
const { merge } = require('webpack-merge');
const {
  DEVELOPMENT,
  DEV_SERVER_HOST,
  DEV_SERVER_PORT,
  PROJECT_DIR,
} = require('../utils/constants');
const { DEV_RULES } = require('../rules/development');
const ESLintPlugin = require('eslint-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const developmentConfig = {
  mode: DEVELOPMENT,
  module: { rules: DEV_RULES },
  plugins: [
    new ESLintPlugin({
      context: PROJECT_DIR,
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      threads: true,
      lintDirtyModulesOnly: true,
      failOnError: false,
    }),
    new ReactRefreshPlugin({
      overlay: false,
    }),
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    allowedHosts: ['all'],
    port: DEV_SERVER_PORT,
    host: DEV_SERVER_HOST,
    client: {
      logging: 'log',
      overlay: false,
      progress: false,
    },
    hot: true,
    liveReload: false,
  },
};

// noinspection JSCheckFunctionSignatures
module.exports = merge(baseConfig, developmentConfig);

const baseConfig = require('./base');
const { merge } = require('webpack-merge');
const { PRODUCTION, PROJECT_DIR } = require('../utils/constants');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { PROD_RULES } = require('../rules/production');

const productionConfig = {
  mode: PRODUCTION,
  module: {
    rules: PROD_RULES,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      context: PROJECT_DIR,
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      overrideConfig: {
        rules: {
          'no-console': 'error',
          'no-alert': 'error',
          'no-debugger': 'error',
        },
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.(ts|tsx|js|jsx)$/,
      }),
    ],
  },
};

// noinspection JSCheckFunctionSignatures
module.exports = merge(baseConfig, productionConfig);

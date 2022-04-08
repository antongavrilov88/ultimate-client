const { EnvironmentPlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const {
  BUILD_DIR,
  PUBLIC_DIR,
  SOURCE_DIR,
  NODE_ENV,
  SERVER_API_URL,
  SERVER_API_VERSION,
} = require('../utils/constants');
const { getIndexHTML, getTSConfig, getIndexTS } = require('../utils/helpers');
const { BASE_RULES } = require('../rules/base');

module.exports = {
  entry: getIndexTS(SOURCE_DIR),
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: '[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    alias: { '~': SOURCE_DIR },
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.mdx', '.ttf'],
  },
  module: { rules: BASE_RULES },
  plugins: [
    new HTMLWebpackPlugin({
      template: getIndexHTML(PUBLIC_DIR),
    }),
    new EnvironmentPlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      SERVER_API_URL: JSON.stringify(SERVER_API_URL),
      SERVER_API_VERSION: JSON.stringify(SERVER_API_VERSION),
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: getTSConfig(),
      },
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      cacheGroups: {
        default: false,
        vendors: {
          test: /[\\/]node_modules[\\/]]/,
          priority: 1,
          chunks: 'initial',
          name: 'vendors',
          enforce: true,
        },
      },
    },
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              'imagemin-gifsicle',
              'imagemin-mozjpeg',
              'imagemin-pngquant',
              'imagemin-svgo',
            ],
          },
        },
        generator: [
          {
            preset: 'webp',
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: { plugins: ['imagemin-webp'] },
          },
        ],
      }),
    ],
  },
};

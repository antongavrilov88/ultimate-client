const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const productionConfig = require('./production');

module.exports = merge({ plugins: [new BundleAnalyzerPlugin()] }, productionConfig);

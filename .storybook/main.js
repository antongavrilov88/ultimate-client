const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const sourceDir = path.join(__dirname, '..', 'src');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: { builder: 'webpack5' },
  webpackFinal: async (config) => {
    const svgRule = config.module.rules.find((rule) => 'test.svg'.match(rule.test));
    svgRule.exclude = [sourceDir];

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });

    config.module.rules.push({
      test: /\.scss/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: { sassOptions: { identSyntax: true } },
        },
      ],
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { memo: true } }, 'url-loader'],
    });

    config.module.rules.push({
      test: /\.(jpe?g|png)$/,
      use: [{ loader: 'file-loader', options: { name: '[path][name].[ext]' } }],
    });

    config.module.rules.push({
      test: /\.ttf$/,
      use: [{ loader: 'file-loader', options: { name: '[path][name].[ext]' } }],
    });

    config.optimization.minimize = false;
    config.optimization.minimizer.push(
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
      })
    );

    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.modules.push(path.resolve(__dirname, '../src'));

    return config;
  },
};

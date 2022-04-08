const SVG_RULE = {
  test: /\.svg$/,
  use: ['@svgr/webpack', 'url-loader'],
};

const MEDIA_RULE = {
  test: /\.(jpe?g|png|mov|webp|avif)$/,
  use: [{ loader: 'file-loader', options: { name: '[path][name].[ext]' } }],
};

const CSS_RULE = {
  test: /\.scss/,
  use: [
    'css-loader',
    {
      loader: 'sass-loader',
      options: { sassOptions: { identSyntax: true } },
    },
  ],
};

const FONT_RULE = {
  test: /\.ttf$/,
  type: 'asset/resource',
};

const BASE_RULES = [SVG_RULE, MEDIA_RULE, CSS_RULE, FONT_RULE];

module.exports = { BASE_RULES };

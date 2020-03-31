const getWebpackConfig = require('@nrwl/react/plugins/webpack');

function getCustomWebpackConfig(webpackConfig) {
  const config = getWebpackConfig(webpackConfig);

  // SVG fix
  const index = config.module.rules.findIndex(rule => rule.test.test('.svg'));
  config.module.rules.splice(index, 1, {
    test: /\.svg$/,
    //issuer: {
    //  test: /\.[jt]sx?$/
    //},
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          symbolId: '[name]'
        }
      },
      'svgo-loader'
    ]
  });

  return config;
}

module.exports = getCustomWebpackConfig;
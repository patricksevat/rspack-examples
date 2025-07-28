const rspack = require('@rspack/core')
const { defineConfig } = require('@rspack/cli');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = defineConfig({
  output: {
    crossOriginLoading: 'anonymous',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new rspack.experiments.SubresourceIntegrityPlugin({
      htmlPlugin: require.resolve('html-webpack-plugin'),
      enabled: true,
    }),
  ],
});

const { defineConfig } = require('@rspack/cli');
const CopyPlugin = require('copy-webpack-plugin');
const { CopyRspackPlugin } = require('@rspack/core');

module.exports = defineConfig({
  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: 'public',
    //       to: '.',
    //       transform: {
    //         transformer: (content, path) => {
    //           return content
    //         }
    //       }
    //     },
    //   ]
    // }),

    // FIXME: this crashes
    new CopyRspackPlugin({
      patterns: [
        {
          from: 'public',
          to: '.',
          transform: {
            transformer: (content, path) => {
              return content;
            },
          },
        },
      ],
    }),
  ],
});

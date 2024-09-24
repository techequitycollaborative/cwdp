const svgrPlugin = require('@svgr/webpack');

module.exports = {
  
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
                throwIfNamespace: false

            },
          },
        ],
      },
    ],
  },
  
};

const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require('../common/webpack.config');

module.exports = {
  ...commonConfig,
  devServer: {
    ...commonConfig.devServer,
    port: 3032
  },
  plugins: [
    ...commonConfig.plugins,
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: 'remoteAccountDetails',
      filename: 'remoteEntry.js',
      exposes: {
        '.': './src/index',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
  ]
}

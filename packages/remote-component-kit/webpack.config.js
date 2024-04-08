const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require('../common/webpack.config');

module.exports = {
  ...commonConfig,
  devServer: {
    ...commonConfig.devServer,
    port: 3031
  },
  plugins: [
    ...commonConfig.plugins,
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: 'remoteComponentKit',
      filename: 'remoteEntry.js',
      exposes: {
        './AppShell': './src/AppShell',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
  ]
}

const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const commonConfig = require('../common/webpack.config');

module.exports = {
  ...commonConfig,
  devServer: {
    ...commonConfig.devServer,
    port: 3002
  },
  plugins: [
    ...commonConfig.plugins,
    new ModuleFederationPlugin({
      name: "host-user",
      remotes: {
         // Make sure this PORT matches the PORT set in the webpack.config.js of remote-component-kit
        'remoteComponentKit': "remoteComponentKit@http://localhost:3031/remoteEntry.js",
        'remoteAccountDetails': "remoteAccountDetails@http://localhost:3032/remoteEntry.js",
      },
      shared: {react: {singleton: true}, "react-dom": {singleton: true}},
    }),
    new ExternalTemplateRemotesPlugin()
  ]
}

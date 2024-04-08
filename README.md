# module-federation-boilerplate

First, install your dependencies:

```sh
yarn 
```

#### Development

```sh
# Host applications will start on http://localhost:3001 and http://localhost:3002 
npx lerna run start
```

#### Production

```sh
npx lerna run build
```

Locally, this can be tested by hosting a static HTTP server from each package on the expected port, e.g.:

```sh
# Install a simple static HTTP Server CLI tool:
npm install --global serve

# TODO: Make this into an easier to use "lerna run serve:dist" command.

# Run four HTTP servers in four different shells:
cd packages/host-user/dist
serve -p 3001 --single

cd packages/host-admin/dist
serve -p 3002 --single

cd packages/remote-component-kit/dist
serve -p 3031 --cors

cd packages/remote-account-details/dist
serve -p 3032 --cors
```

In a CDN environment, depending on the host/location of the CDN you are deploying to, you will have to edit the Webpack configurations for the host applications. This can be accomplished by editing the `$HOST_DIRECTORY/webpack.config.js` file to point to your CDN:

```js
 'remoteComponentKit': "remoteComponentKit@[CDN Url For remote-component-kit]/remoteEntry.js",
 'remoteAccountDetails': "remoteAccountDetails@[CDN Url For remote-account-details]/remoteEntry.js",
```

It would be advised to create a separate stable `webpack.config.prod.js` to map these CDN URLs once they are known and stable.

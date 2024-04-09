# module-federation-boilerplate

First, install your dependencies:

```sh
yarn 
```

#### Development

```sh
# Host applications will start on http://localhost:3001 and http://localhost:3002,
# remotes on http://localhost:3031 and http://localhost:3032
npm run start:all
```

#### Production

**NOTE**: This is currently not working due to a chunking problem I am working on in the prod build.
```sh
npm run build:all
```

Locally, the prod build can be tested by building all bundles and hosting a static HTTP server from each package on the expected port. This is done with the following command:

```sh
npm run build:all && npm run serve:all
```

In a CDN environment, depending on the host/location of the CDN you are deploying to, you will have to edit the Webpack configurations for the host applications. This can be accomplished by editing the `$HOST_DIRECTORY/webpack.config.js` file to point to your CDN:

```js
 'remoteComponentKit': "remoteComponentKit@[CDN Url For remote-component-kit]/remoteEntry.js",
 'remoteAccountDetails': "remoteAccountDetails@[CDN Url For remote-account-details]/remoteEntry.js",
```

It would be advised to create a separate stable `webpack.config.prod.js` to map these CDN URLs once they are known and stable.

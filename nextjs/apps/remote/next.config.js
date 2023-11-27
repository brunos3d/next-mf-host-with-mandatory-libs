const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        exposes: {
          './table': './components/table/table',
          // whatever else
        },
        shared: {
          'local-package': {
            singleton: true,
          },
          // whatever else
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;

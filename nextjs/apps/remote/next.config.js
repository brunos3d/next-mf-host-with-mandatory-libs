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
          'local-package': '2.0.0',
          // whatever else
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;

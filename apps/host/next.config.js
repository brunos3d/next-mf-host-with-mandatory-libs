const NextFederationPlugin = require('@module-federation/nextjs-mf');

const REMOTE_APP_URL = process.env.NEXT_PUBLIC_REMOTE_APP_URL || 'http://localhost:3011';

// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const getRemotes = (/** @type {Boolean} */ isServer) => {
  // TODO: discussion about zephyr + nextjs (SSR remotes)
  const location = isServer ? 'ssr' : 'chunks';

  return {
    remote: `remote@${REMOTE_APP_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: getRemotes(isServer),
        exposes: {
          // whatever else
        },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;

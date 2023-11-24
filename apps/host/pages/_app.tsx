import { AppProps } from 'next/app';
import Head from 'next/head';

// import Select from 'react-select';

import './styles.css';

// import { init, loadRemote, loadShare } from '@module-federation/runtime';

// init({
//   name: '@demo/main-app',
//   remotes: [],
//   shared: {
//     'react-select': {
//       version: '5.8.0',
//       scope: 'default',
//       lib: () => Select,
//       shareConfig: {
//         singleton: true,
//         requiredVersion: '5.8.0',
//       },
//     },
//   },
// });

// loadShare('react-select').then((reactSelectFactory) => {
//   console.log(reactSelectFactory());
// });

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to template-host!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;

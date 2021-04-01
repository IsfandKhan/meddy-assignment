import Head from 'next/head';
import Router from 'next/router';
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

import { NavBar } from '../components';
import { wrapper } from '../store/store';

import '../styles/globals.css';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate:  process.env.SENTRY_TRACES_SAMPLE_RATE,
});
console.log(process.env.SENTRY_DSN);

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.css" />
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
        defer
      ></script>

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
        integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
        crossOrigin="anonymous"
        defer
      ></script>

      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
        integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
        crossOrigin="anonymous"
        defer
      ></script>

      <script src="https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.js">
        {(Router.onRouteChangeStart = () => NProgress.start())}
        {(Router.onRouteChangeComplete = () => NProgress.done())}
        {(Router.onRouteChangeError = () => NProgress.done())}
      </script>
    </Head>
    <NavBar />
    <Component {...pageProps} />
  </>
);

export default wrapper.withRedux(MyApp);

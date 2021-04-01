import * as Sentry from '@sentry/browser';
import Custom404 from './404';
import Custom500 from './500';

const notifySentry = (err, req, statusCode) => {
  Sentry.configureScope((scope) => {
    if (!req) {
      scope.setTag(`ssr`, false);
      scope.setExtra(`statusCode`, statusCode);
    } else {
      scope.setTag(`ssr`, true);
      scope.setExtra(`url`, req.url);
      scope.setExtra(`params`, req.params);
      scope.setExtra(`query`, req.query);
      scope.setExtra(`statusCode`, statusCode);
      scope.setExtra(`headers`, req.headers);

      if (req.user) {
        scope.setUser({ id: req.user.id, email: req.user.email });
      }
    }
  });

  Sentry.captureException(err);
};

export const getInitialProps = (context) => {
  const { res, err, req } = context;

  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  if (statusCode >= 500 && statusCode < 600) {
    notifySentry(err, req, statusCode);
    res.writeHead(500, {
      Location: '/500'
    });
    res.end();
  }

  if (statusCode == 404) {
    notifySentry(err, req, statusCode);
    res.writeHead(404, {
      Location: '/404'
    });
    res.end();
  }

  return { statusCode, err, req };
};

const Error = (props) => {
  const { statusCode, err, req } = props;
  notifySentry(err, req, statusCode);

  if (statusCode === 404) {
    return <Custom404 />;
  } else if (statusCode === 500) {
    return <Custom500 />;
  }
  return <h1 className="text-uppercase text-center">An error occurred</h1>;
};

export default Error;

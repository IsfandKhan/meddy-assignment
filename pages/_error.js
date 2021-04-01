import Custom404 from './404';
import Custom500 from './500';

export const getInitialProps = (context) => {
  console.log(context, 'context');

  const { res, err } = context;

  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  if (statusCode >= 500 && statusCode < 600) {
    res.writeHead(500, {
      Location: '/500'
    });
    res.end();
  }

  if (statusCode == 404) {
    res.writeHead(404, {
      Location: '/404'
    });
    res.end();
  }

  return { statusCode };
};

const Error = (props) => {
  const { statusCode } = props;
  if (statusCode === 404) {
    return <Custom404 />;
  } else if (statusCode === 500) {
    return <Custom500 />;
  }
  return <h1 className="text-uppercase text-center">An error occurred</h1>;
};

export default Error;

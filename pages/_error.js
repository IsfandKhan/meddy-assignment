export const getInitialProps = ({ res, err }) => {
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

const Error = () => <h1 className="text-uppercase" style={{ margin: '50%' }}>An error occurred</h1>;

export default Error;

import * as sentry from '@sentry/browser';
const CustomErrorGenerator = () => (
  <button
    className="btn btn-danger"
    onClick={() => {
      try {
        throw new Error({ statusCode: 500 });
      } catch (error) {
        sentry.captureException(error);
      }
    }}
  >
    Click
  </button>
);

export default CustomErrorGenerator;

const CustomErrorGenerator = () => (
  <button
    className="btn btn-danger"
    onClick={() => {
      throw new Error({statusCode: 500});
    }}
  >
    Click
  </button>
);

export default CustomErrorGenerator;

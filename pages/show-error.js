const CustomErrorGenerator = () => (
  <button
    className="btn btn-danger"
    onClick={() => {
      throw new Error();
    }}
  >
    Click
  </button>
);

export default CustomErrorGenerator;

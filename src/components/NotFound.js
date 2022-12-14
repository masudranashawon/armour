const NotFound = ({ needFullHeight }) => {
  return (
    <section
      className={`${needFullHeight && "min-h-scrren"} not-found wrapper`}
    >
      <h1>
        404
        <br />
        Not Found
      </h1>
    </section>
  );
};

export default NotFound;

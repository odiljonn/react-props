import React from "react";

const Hello = (props) => {
  const { name, age, jobs, children } = props;
  return (
    <div>
      <p>
        i am {name}, i am {age} i {jobs}
      </p>
      <p>{children}</p>
    </div>
  );
};

export default Hello;

import React from "react";

const Hello = (props) => {
  const { name, age, children } = props;
  return (
    <div>
      <p>
        i am {name}, i am {age}
      </p>
      <p>{children}</p>
    </div>
  );
};

export default Hello;

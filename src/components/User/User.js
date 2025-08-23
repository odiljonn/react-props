import React, { useState } from "react";
import Hello from "../Person/Person";

const User = () => {
  const [nameState, setNameState] = useState({ isboll: true });
  const [counstate, setcountstate] = useState(0);

  const changename = () => {
    setNameState({ isboll: !nameState.isboll });
  };

  const change2 = () => {
    setcountstate(counstate + 1);
  };

  return (
    <div>
      <h1> User Component {nameState.isboll ? "hello" : "bye"}</h1>
      <button onClick={changename}>click me</button>

      <button onClick={change2}>nombers{counstate}</button>
    </div>
  );
};

export default User;

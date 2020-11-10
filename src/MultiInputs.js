import React, { useState } from "react";
import addUser from "./App";

function InputSampleMulti(addUser) {
  const [inputs, setInputs] = useState({
    name: "",
    email: ""
  });

  const onAdd = (name, email, addUser) => {
    addUser(name, email);
    setInputs({
      name: "",
      pass: ""
    });
  };

  return (
    <div>
      <input name="id" value={inputs.name} />
      <input name="email" value={inputs.email} />
      <button onClick={onAdd(inputs.name, inputs.email)}>Add user </button>
      <div>
        <li> id : {inputs.name}</li>
        <li> email : {inputs.pass}</li>
      </div>
    </div>
  );
}
export default InputSampleMulti;

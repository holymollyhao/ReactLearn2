import React, { useState } from "react";

function InputSampleMulti() {
  const [inputs, setInputs] = useState({
    name: "",
    pass: ""
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      // this fucntion changes "inputs" itself
      ...inputs,
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      pass: ""
    });
  };

  return (
    <div>
      <input name="name" onChange={onChange} value={inputs.name} />
      <input name="pass" onChange={onChange} value={inputs.pass} />
      <button onClick={onReset}>erase all </button>
      <div>
        <li> id : {inputs.name}</li>
        <li> pass : {inputs.pass}</li>
      </div>
    </div>
  );
}
export default InputSampleMulti;

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
      <input name="id" onChange={onChange} value={inputs.name} />
      <input name="email" onChange={onChange} value={inputs.pass} />
      <button onClick={onReset}>erase all </button>
      <div>
        <li> id : {inputs.name}</li>
        <li> email : {inputs.pass}</li>
      </div>
    </div>
  );
}
export default InputSampleMulti;
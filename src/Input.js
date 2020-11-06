import React, { useState } from "react";

function InputSample() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText((prevElem) => (prevElem.name = e.target.value));
  };

  const onReset = () => {
    setText("");
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>erase all </button>
      <div>
        <b> value : {text}</b>
      </div>
    </div>
  );
}
export default InputSample;

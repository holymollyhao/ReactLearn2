import React, { useState } from "react";

function Counter() {
  //the one inside usestate is initial values
  const [number, setNumber] = useState(10);
  const onIncrease = () => {
    console.log("+1");
    setNumber(number + 1);
  };
  const onDecrease = () => {
    console.log("-1");
    //can use fucntions inside the set functions to determine what to do
    setNumber((num) => num - 1);
  };

  return (
    // onincrease() makes the function to be called when rendered.
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default Counter;

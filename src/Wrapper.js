import React from "react";

function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px"
  };
  return <div style={style}>{children}</div>;
  //need to render its children as well. Defined already in React.
}

export default Wrapper;

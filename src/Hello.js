import React from "react";
// making reacet components, requried this import

function Hello({ color, name }) {
  return <div style={{ color: color }}>Hello {name}</div>;
  // needs to return only 1 component, usually covered in div tag

  // <div>{a}</div>
  // this returns a, a javascript element defined.
}

Hello.defaultProps = {
  name: "peekaboo"
};
export default Hello;
// exporting component name Hello

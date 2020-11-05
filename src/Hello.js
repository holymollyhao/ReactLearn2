import React from "react";
// making reacet components, requried this import

var a;
a = 3;

function Hello() {
  return <div>Hello</div>;
  // needs to return only 1 component, usually covered in div tag

  // <div>{a}</div>
  // this returns a, a javascript element defined.
}

export default Hello;
// exporting component name Hello

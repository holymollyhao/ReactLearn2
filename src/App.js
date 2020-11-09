import React from "react";
// import Hello from "./Hello";
import Wrapper from "./Wrapper";
// import Counter from "./Counter";
import InputSample from "./Input";
import InputSampleMulti from "./MultiInputs";

import "./App.css";

function App() {
  const name = "react";

  const style = {
    //LIKE vue, styles are camelcasaed.
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem" //when using a different dimension than pixel, "" required
  };

  const userList = [];
  function addUser(id, email) {
    userList = [...userList, { id: id, email: email }];
  }

  return (
    <Wrapper>
      <InputSampleMulti />
    </Wrapper>
  );
}

export default App;

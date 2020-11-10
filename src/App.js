import React, { useState, useRef } from "react";
import Wrapper from "./Wrapper";
import Userinput from "./Userinput";
import Userslist from "./Userslist";

import "./App.css";

function App() {
  const [inputs, setInputs] = useState({
    id: "",
    username: "",
    email: ""
  });
  const [usersList, setUserslist] = useState([]);

  const { username, email } = inputs;
  const nextid = useRef(0);

  function addUser() {
    const user = {
      id: nextid.current,
      username: username,
      email: email
    };
    setUserslist([...usersList, user]);
    nextid.current = nextid.current + 1;
    setInputs({
      username: "",
      email: ""
    });
  }

  function removeUser() {
    setUserslist(usersList.filter((user) => user.username !== username));
  }

  function onChange(e) {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  return (
    <Wrapper>
      <Userinput
        username={username}
        email={email}
        addUser={addUser}
        onChange={onChange}
      />
      <Userslist users={usersList} removeUser={removeUser} />
    </Wrapper>
  );
}

export default App;

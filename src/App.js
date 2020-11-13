import React, { useState, useRef } from "react";
import Wrapper from "./Wrapper";
import Userinput from "./Userinput";
import Userslist from "./Userslist";

import "./App.css";

function App() {
  const [inputs, setInputs] = useState({
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
      email: email,
      active: false
    };
    console.log(user);
    setUserslist([...usersList, user]);
    nextid.current += 1;
    setInputs({
      username: "",
      email: ""
    });
  }

  function removeUser(id) {
    setUserslist(usersList.filter((user) => user.id !== id));
  }

  function toggleUser(id) {
    setUserslist(
      usersList.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
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
      <Userslist
        users={usersList}
        removeUser={removeUser}
        toggleUser={toggleUser}
      />
    </Wrapper>
  );
}

export default App;

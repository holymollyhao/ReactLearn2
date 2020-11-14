import React, { useRef, useMemo, useCallback, useReducer } from "react";
import Wrapper from "./Wrapper";
import Userinput from "./Userinput";
import Userslist from "./Userslist";

import "./App.css";

// usereducer : multiple elements to manage
// usestate : single or boolean values sto manage
const initialState = {
  inputs: {
    username: "",
    email: ""
  },
  usersList: []
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };

    case "ADD_USER":
      console.log(action.user);
      return {
        inputs: initialState.inputs,
        usersList: [...state.usersList, action.user]
      };

    case "REMOVE_USER":
      console.log("removing user");
      return {
        ...state,
        usersList: state.usersList.filter((user) => user.id !== action.id)
      };

    case "TOGGLE_USER":
      return {
        ...state,
        usersList: state.usersList.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { usersList } = state;
  const { username, email } = state.inputs;

  const nextid = useRef(0);

  const addUser = useCallback(() => {
    const user = {
      id: nextid.current,
      username: username,
      email: email,
      active: false
    };
    console.log(user);
    dispatch({
      type: "ADD_USER",
      user
    });
    nextid.current += 1;
  }, [username, email]);

  const removeUser = useCallback((id) => {
    console.log("removing");
    console.log(id);
    dispatch({
      type: "REMOVE_USER",
      id
    });
  }, []);

  const toggleUser = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id
    });
  }, []);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value
    });
  }, []);

  const countActive = useCallback(() => {
    var sum = 0;
    console.log("counting...");
    usersList.map((user) => (user.active === true ? (sum += 1) : (sum += 0)));
    return sum;
  }, [usersList]);

  const activeUsers = useMemo(() => countActive(), [usersList]); // reusing values

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
      Active users : {activeUsers}
    </Wrapper>
  );
}

export default App;

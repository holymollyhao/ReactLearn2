import React from "react";

function Userinput({ username, email, addUser, onChange }) {
  return (
    <div>
      <input
        name="username"
        placeholder="username"
        value={username}
        onChange={onChange}
      />
      <input
        name="email"
        placeholder="email"
        value={email}
        onChange={onChange}
      />
      <button onClick={addUser}>add</button>
    </div>
  );
}

export default Userinput;

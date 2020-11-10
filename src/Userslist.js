import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function Userslist({ users, removeUser }) {
  return (
    <div>
      {users.map((user) => (
        <div>
          <User user={user} key={user.id} />
          <button onClick={removeUser}>remove</button>
        </div>
      ))}
    </div>
  );
}

export default Userslist;

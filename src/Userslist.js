import React, { useEffect } from "react";

function User({ user, removeUser, toggleUser }) {
  // var id = user.id;
  useEffect(() => {
    console.log("user set");
    console.log(user);
    return () => {
      console.log("user just before change");
      console.log(user);
    };
  }, [user.id]);
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black"
        }}
        onClick={() => toggleUser(user.id)}
      >
        {user.username}
      </b>{" "}
      <span>({user.email})</span>
      <button
        onClick={() => {
          removeUser(user.id);
        }}
      >
        remove
      </button>
    </div>
  );
}

function Userslist({ users, removeUser, toggleUser }) {
  return (
    <div>
      {users.map((user) => (
        <div>
          <User
            user={user}
            key={user.id}
            removeUser={removeUser}
            toggleUser={toggleUser}
          />
        </div>
      ))}
    </div>
  );
}

export default React.memo(Userslist);

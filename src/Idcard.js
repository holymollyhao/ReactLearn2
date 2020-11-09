import React from "react";

function Idcard({ user }) {
  const style = {
    //LIKE vue, styles are camelcasaed.
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem" //when using a different dimension than pixel, "" required
  };

  return (
    <div style={style}>
      <b>
        ID is : {user.username} email is : {user.email}
      </b>
    </div>
  );
}

function Idstack() {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "velopert@naver.com"
    }
  ];

  return (
    <div>
      {users.map((user) => (
        <Idcard user={user} />
      ))}
    </div>
  );
}

export default Idstack;

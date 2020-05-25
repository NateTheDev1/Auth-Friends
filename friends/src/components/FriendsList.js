import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Friends</h1>
      {friends.length !== 0 ? (
        <div>
          {friends.map((f) => (
            <div key={f.id}>
              <h3>Name: {f.name}</h3>
              <p>Email: {f.email}</p>
              <p>Age: {f.age}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FriendsList;

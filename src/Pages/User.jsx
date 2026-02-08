import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  const user = [
    { id: 1, name: "Bishesh", gmail: "bishesh@gmail.com", age: 24 },
    { id: 2, name: "Sushmita", gmail: "sushmita@gmail.com", age: 23 },
    { id: 3, name: "Superman", gmail: "superman@gmail.com", age: 20 },
    { id: 4, name: "Batman", gmail: "batman@gmail.com", age: 20 },
  ];
  return (
    <>
      {user.map((data) => (
        <div key={data.id}>
          <Link to={`/user/${data.id}`}>
            <h1>{data.name}</h1>
          </Link>
        </div>
      ))}
    </>
  );
};

export default User;

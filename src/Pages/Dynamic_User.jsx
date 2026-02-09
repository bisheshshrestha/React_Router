import React from "react";
import { useParams } from "react-router-dom";

const Dynamic_User = () => {
  // console.log("UserParams = ", useParams());
  const { id } = useParams();
  const user = [
    { id: 1, name: "Bishesh", gmail: "bishesh@gmail.com", age: 24 },
    { id: 2, name: "Sushmita", gmail: "sushmita@gmail.com", age: 23 },
    { id: 3, name: "Superman", gmail: "superman@gmail.com", age: 20 },
    { id: 4, name: "Batman", gmail: "batman@gmail.com", age: 20 },
  ];
  const specific_user = user.find((data) => data.id == id);
  console.log(specific_user);

  return (
    <div>
      <h1>Id = {specific_user.id}</h1>
      <h1>Name= {specific_user.name}</h1>
      <h1>Gmail= {specific_user.gmail}</h1>
      <h1>Age= {specific_user.age}</h1>
    </div>
  );
};

export default Dynamic_User;

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "pink",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "white" : "blue",
            backgroundColor: isActive ? "green" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "white" : "blue",
            backgroundColor: isActive ? "green" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "white" : "blue",
            backgroundColor: isActive ? "green" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/contact"}
        >
          Contact
        </NavLink>

        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "white" : "blue",
            backgroundColor: isActive ? "green" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/user"}
        >
          User
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;

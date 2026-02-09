import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate;

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/user");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/home");
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}

        {!isLoggedIn && (
          <>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <button onClick={handleLogin}>Login</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;

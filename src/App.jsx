import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import User from "./Pages/User";
import Dynamic_User from "./Pages/Dynamic_User";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<Dynamic_User />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Laptops from "./Pages/Laptops";
import Phones from "./Pages/Phones";
import Camera from "./Pages/Camera";

const Index = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* child route */}
            <Route index element={<Home />} /> {/* index=> default child */}
            <Route path="about" element={<About />} />
            <Route path="products" element={<Product />}>
              {/* Nested child routes */}
              <Route path="phones" element={<Phones />} />
              <Route path="laptops" element={<Laptops />} />
              <Route path="camera" element={<Camera />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Index;

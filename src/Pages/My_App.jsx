import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Products from "../components/Products";
import Profile from "../components/Profile";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";

async function githubProfileLoader() {
  const res = await fetch("https://api.github.com/users/bisheshshrestha");
  if (!res.ok) throw new Error("Failed to fetch profile");
  return res.json();
}

function Layout() {
  return (
    <div>
      <header>
        <h1>My Shop</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/profile" prefetch="intent">
            Profile
          </Link>
        </nav>
      </header>

      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
      <footer>
        <p>© 2025 My Shop</p>
      </footer>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "profile", element: <Profile />, loader: githubProfileLoader },
    ],
  },
]);
const My_App = () => {
  return <RouterProvider router={router} />;
};

export default My_App;

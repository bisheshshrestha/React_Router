import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Index from "./Index.jsx";
import My_App from "./Pages/My_App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Index /> */}
    <My_App />
  </StrictMode>,
);

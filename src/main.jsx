import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "../src/data/css/main.css";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

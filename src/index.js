import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "offers",
        element: <Offer/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
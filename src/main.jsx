import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Index from "./routes";
import ErrorPage from "./routes/errorPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import NavbarComponent from "./components/NavbarComponent";
import ListAnswer from "./components/ListAnswer";
import AddAnswer from "./components/AddAnswer";
import EditAnswer from "./components/EditAnswer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarComponent />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: "/edit/:id", element: <EditAnswer /> },
      { path: "/tambah-answer", element: <AddAnswer /> },
      { path: "/list-answer", element: <ListAnswer /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

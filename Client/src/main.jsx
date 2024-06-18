import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <ThemeProvider>
        {" "}
        <RouterProvider router={router} />
        <ToastContainer />
      </ThemeProvider>
    </React.StrictMode>
  </AuthProvider>
);

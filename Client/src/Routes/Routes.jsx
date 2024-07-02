import { createBrowserRouter } from "react-router-dom";

import MainLay from "../Layout/MainLay";
import Singin from "../Pages/SingIn/Singin";
import SignUp from "../Pages/SingUp/SingUp";
import HomeLay from "../Layout/HomeLay";
import ServicesDetails from "../Pages/Home/Services/ServicesDetails/ServicesDetails";
import About from "../Pages/About/About";
import Contact from "../Pages/Home/Contact/Contact";
import DashboardLayout from "../Layout/DashboardLayout";
import AddDoctor from "../Pages/Dashboard/Admin/AddDoctor";
import MyAddDoc from "../Pages/Dashboard/Admin/MyAddDoc";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLay></MainLay>,
    children: [
      {
        index: true,
        element: <HomeLay></HomeLay>,
      },
      {
        path: "/services/:id",
        element: <ServicesDetails></ServicesDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`),

      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/singin",
    element: <Singin></Singin>,
  },
  {
    path: "/singup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "add-doctor",
        element: <AddDoctor></AddDoctor>,
      },
      {
        path: "my-added-doctors",
        element: <MyAddDoc></MyAddDoc>,
      },
    ],
  },
]);

export default router;

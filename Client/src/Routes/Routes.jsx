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
import AllDoctors from "../Pages/Home/Doctor/AllDoctors";
import DocDetails from "../Pages/Home/Doctor/DocDetails";
import Users from "../Pages/Dashboard/Admin/Users/Users";
import Apoinment from "../Pages/Apoinment/Apoinment";
import AllApo from "../Pages/Dashboard/Admin/AllAppionment/AllApo";
import MyAppo from "../Pages/Dashboard/User/MyAppoinment/MyAppo";
import Profile from "../Pages/Dashboard/User/Profile/Profile";

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
      {
        path: '/allDoctors',
        element: <AllDoctors></AllDoctors>
      },
      {
        path: '/doctor/:id',
        element: <DocDetails></DocDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/doctorssss/${params.id}`),
      },
      {
        path: '/appointment',
        element: <Apoinment></Apoinment>
      }
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
      {
        path: 'users',
        element: <Users></Users>,
        
      },
      {
        path: 'all-appointments',
        element: <AllApo></AllApo>
      },
      {
        path: 'my-appointments',
        element: <MyAppo></MyAppo>
      },
      {
        path: 'profile',
        element : <Profile></Profile>
      },
      {
        path: 'appointment',
        element: <Apoinment></Apoinment>
      }
    ],
  },
]);

export default router;

import {
    createBrowserRouter,
    
  } from "react-router-dom";

import MainLay from "../Layout/MainLay";
import Singin from "../Pages/SingIn/Singin";
import SignUp from "../Pages/SingUp/SingUp";
import HomeLay from "../Layout/HomeLay";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLay></MainLay>,
      children: [
        {
          index: true,
          element: <HomeLay></HomeLay>
        }
      ],
    },
    {
      path: '/singin',
      element: <Singin></Singin>
    },
    {
      path: '/singup',
      element: <SignUp></SignUp>
    }
  ]);




  export default router;
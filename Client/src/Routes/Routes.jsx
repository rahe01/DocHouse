import {
    createBrowserRouter,
    
  } from "react-router-dom";

import MainLay from "../Layout/MainLay";
import Singin from "../Components/SingIn/Singin";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLay></MainLay>
    },
    {
      path: '/singin',
      element: <Singin></Singin>
    }
  ]);




  export default router;
import {
    createBrowserRouter,
    
  } from "react-router-dom";

import MainLay from "../Layout/MainLay";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLay></MainLay>
    },
  ]);




  export default router;
import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../Components/Navbar/Navbar";



const MainLay = () => {
  return (
    <div className="container mx-auto">
      <ComplexNavbar></ComplexNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLay;

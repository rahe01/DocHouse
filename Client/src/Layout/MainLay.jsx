import { Outlet } from "react-router-dom";
import { ComplexNavbar } from './../Pages/Home/Navbar/Navbar';
import Footer from "../Pages/Home/Footer/Footer";




const MainLay = () => {
  return (
    <div className="container mx-auto">
      <ComplexNavbar></ComplexNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLay;

import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";
import { MdPersonAdd, MdAssignmentInd, MdEvent, MdAccountCircle, MdBook, MdDashboard } from "react-icons/md"; // Add icons for new menu items
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import MenuItem from "./MenuItem";
import { toast } from "react-toastify";

const Sidebar = () => {
  const { logOut, } = useAuth();
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successful");
        navigate("/");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div className="block cursor-pointer p-4 font-bold">
          <Link to="/">
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/d2pvBM8/icon.png"
                className="w-12"
                alt=""
              />
              <div className="ml-2 pt-1">
                <span className="text-2xl text-purple-300 font-bold">Doc</span>
                <span className="text-2xl text-blue-500 font-bold">House</span>
              </div>
            </div>
          </Link>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
            <Link to="/">
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/d2pvBM8/icon.png"
                  className="w-12"
                  alt=""
                />
                <div className="ml-2 pt-1">
                  <span className="text-2xl text-purple-300 font-bold">Doc</span>
                  <span className="text-2xl text-blue-500 font-bold">House</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/* Common Routes */}
              <MenuItem
                label="Dashboard"
                address="/dashboard"
                icon={<MdDashboard className="text-blue-500" />}
              />
              
              {/* Admin Routes */}
              <h1 className="text-xl font-bold text-center my-5">Admin Routes</h1>
          
                <>
                  <MenuItem
                    label="Statistics"
                    address="/dashboard/statistict"
                    icon={<FaChartPie className="text-green-500" />}
                  />
                  <MenuItem
                    label="Add Doctor"
                    address="/dashboard/add-doctor"
                    icon={<MdPersonAdd className="text-purple-500" />}
                  />
                  <MenuItem
                    label="My Added Doctors"
                    address="/dashboard/my-added-doctors"
                    icon={<MdAssignmentInd className="text-orange-500" />}
                  />
                  <MenuItem
                    label="Manage Users"
                    address="/dashboard/users"
                    icon={<MdAssignmentInd className="text-red-500" />}
                  />
                  <MenuItem
                    label="All Pending Appointments"
                    address="/dashboard/all-appointments"
                    icon={<MdEvent className="text-yellow-500" />}
                  />
                  <MenuItem
                    label="All Success Appointments"
                    address="/dashboard/successApoAdmin"
                    icon={<MdEvent className="text-deep-purple-500" />}
                  />
                </>
         
              
              {/* User Routes */}
              <h1 className="text-xl font-bold text-center my-5">User Routes</h1>
             
                <>
                  <MenuItem
                    label="Pending Appointment"
                    address="/dashboard/my-appointments"
                    icon={<MdEvent className="text-blue-500" />}
                  />
                  <MenuItem
                    label="Success Appointment"
                    address="/dashboard/aposeccessbyuser"
                    icon={<MdEvent className="text-pink-500" />}
                  />
                  <MenuItem
                    label="Book Appointment"
                    address="/dashboard/appointment"
                    icon={<MdBook className="text-green-500" />}
                  />
                  <MenuItem
                    label="Profile"
                    address="/dashboard/profile"
                    icon={<MdAccountCircle className="text-orange-500" />}
                  />
               
                </>
           
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5 text-red-500" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

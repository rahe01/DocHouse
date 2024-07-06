import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";
import {  MdPersonAdd, MdAssignmentInd, MdEvent } from "react-icons/md"; // Add icons for new menu items
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import MenuItem from "./MenuItem";
import { toast } from "react-toastify";

const Sidebar = () => {
  const { logOut } = useAuth();
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
              {/* Dashboard */}
             
              {/* Statistics */}
              <MenuItem
                label="Statistics"
                address="/dashboard/statistics"
                icon={<FaChartPie className="text-green-500" />}
              />
              {/* Add Doctor */}
              <MenuItem
                label="Add Doctor"
                address="add-doctor"
                icon={<MdPersonAdd className="text-purple-500" />}
              />
              {/* My Added Doctors */}
              <MenuItem
                label="My Added Doctors"
                address="my-added-doctors"
                icon={<MdAssignmentInd className="text-orange-500" />}
              />
              {/* Manage Users */}
              <MenuItem
                label="Manage Users"
                address="users"
                icon={<MdAssignmentInd className="text-red-500" />}
              />
              {/* All Appointments */}
              <MenuItem
                label="All Appointments"
                address="allapplications"
                icon={<MdEvent className="text-yellow-500" />}
              />
              <h1 className="text-xl font-bold mb-4">User Menu</h1>
              <MenuItem
                label="My Appointments"
                address="my-appointments"
                icon={<MdEvent className="text-blue-500" />
}
              />
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

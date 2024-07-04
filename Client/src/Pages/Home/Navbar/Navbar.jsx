import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { FaHome } from "react-icons/fa";
import { FcCableRelease, FcCollaboration, FcContacts, FcAcceptDatabase } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from './../../../Hooks/useAuth';

// Profile menu items
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    path: "/my-profile",
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    path: "/edit-profile",
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
    path: "/inbox",
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
    path: "/help",
  },
  {
    label: "Admin Dashboard",
    icon: FcAcceptDatabase,
    path: "/admin-dashboard",
  },
  {
    label: "User Dashboard",
    icon: FcAcceptDatabase,
    path: "/dashboard",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    path: "/",
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const navigate = useNavigate();
  const { logOut, user } = useAuth();
  console.log(user);
  const { email, displayName } = user || {};
  const photo = user?.reloadUserInfo?.photoUrl || "https://i.ibb.co/v3tRDh1/user.png";

  if (user) {
    console.log(email, displayName, user.reloadUserInfo?.photoUrl);
  }

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={photo}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, path }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <Link to={path} key={label}>
              <MenuItem
                onClick={() => {
                  closeMenu();
                  if (label === "Sign Out") handleLogout();
                }}
                className={`flex items-center gap-2 rounded ${
                  isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography as="span" variant="small" className="font-normal" color={isLastItem ? "red" : "inherit"}>
                  {label}
                </Typography>
              </MenuItem>
            </Link>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// Nav list items
const navListItems = [
  {
    label: "Home",
    icon: FaHome,
    link: "/dashboard",
  },
  {
    label: "About",
    icon: FcCableRelease,
    link: "/about",
  },
  {
    label: "Appointment",
    icon: FcCollaboration,
    link: "/appointment",
  },
  {
    label: "Contact",
    icon: FcContacts,
    link: "/contact",
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, link }) => (
        <Link to={link} key={label}>
          <Typography as="span" variant="small" color="gray" className="font-medium text-blue-gray-500">
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })} <span className="text-gray-900"> {label}</span>
            </MenuItem>
          </Typography>
        </Link>
      ))}
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setIsNavOpen(false));
  }, []);

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-3xl lg:pl-6 sticky top-0 z-50">
      <div className="relative mx-auto flex items-center justify-end text-blue-gray-900">
        <div className="flex items-center gap-80">
          <Typography as="a" href="#" className="mr-4 ml-2 cursor-pointer py-1.5 font-medium">
            <Link to={"/"}>
              <div className="flex items-center">
                <img src='https://i.ibb.co/d2pvBM8/icon.png' className="w-12" alt="" />
                <div className="ml-2 pt-1">
                  <span className="text-2xl text-purple-300 font-bold">Doc</span>
                  <span className="text-2xl text-blue-500 font-bold">House</span>
                </div>
              </div>
            </Link>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
        </div>
        <IconButton size="sm" color="blue-gray" variant="text" onClick={toggleIsNavOpen} className="ml-auto mr-2 lg:hidden">
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        {user ? (
          <Button size="sm" variant="text" onClick={handleLogout}>
            Signout
          </Button>
        ) : (
          <Link to={"/signin"}>
            <Button size="sm" variant="text">
              <span>Log In</span>
            </Button>
          </Link>
        )}
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}

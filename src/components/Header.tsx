import React from 'react';
 
import { Link, NavLink } from 'react-router-dom'
import MobileNav from './MobileNav'
import logoImage from '../assets/Logo.png'

export default function Header() {
  const [open, setopen] = React.useState(false);
  const menuData = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Ministries",
      to: "/",
    },
    {
      name: "Give",
      to: "/",
    },
    {
      name: "Events",
      to: "/",
    },
  ];

  let activeStyle = {
    backgroundColor: "#345d89",
    borderRightWidth: "4px",
    borderRightColor: "#80BCFF",
  };

  let mainStyle = {
    borderBottomWidth: "2px",
    borderColor: "white",
    textAlign: "center",
  };

  return (
    <header className="bg-blue-900 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="NBBC Logo" className="h-12 w-auto" />
          </Link>
          
          <div className="hidden md:hidden lg:flex space-x-6 text-white font-medium">
            {menuData?.map((menu, index) => (
              <NavLink
                key={index}
                style={({ isActive }) => (isActive ? mainStyle : undefined)}
                to={menu?.to}
                className="text-white py-2 pl-2 hover:bg-[#345d89] text-left flex items-center"
              >
                <p className="p-2 text-white">{menu?.name}</p>
              </NavLink>
            ))}
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  )
}
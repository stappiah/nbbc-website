import { Link, NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import logoImage from "../../assets/Logo.png";

export default function Header() {

  const menuData = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Ministries", to: "/ministries" },
    { name: "Give", to: "/give" },
    { name: "Sermons", to: "/sermons" },
  ];

  let mainStyle = {
    color: "#FFB200",
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="NBBC Logo" className="h-14 w-auto" />
          </Link>

          <div className="hidden md:hidden lg:flex space-x-6 text-[#0D92F4] font-medium">
            {menuData?.map((menu, index) => (
              <NavLink
                key={index}
                style={({ isActive }) => (isActive ? mainStyle : {})}
                to={menu?.to}
                className="text-[#0D92F4] py-2 pl-2 hover:text-[#FFB200] text-left flex items-center"
              >
                <p className="p-2">{menu?.name}</p>
              </NavLink>
            ))}
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

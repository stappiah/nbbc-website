import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuData = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Ministries", to: "/ministries" },
    { name: "Give", to: "/give" },
    { name: "Events", to: "/" },
  ];

  let mainStyle = {
    color: "#FFB200",
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#0D92F4]"
        aria-label="Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="mb-4 text-[#0D92F4]"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col gap-4">

            {menuData?.map((menu, index) => (
              <NavLink
                key={index}
                style={({ isActive }) => (isActive ? mainStyle : {})}
                to={menu?.to}
                className="text-[#0D92F4] hover:text-[#FFB200] font-medium"
              >
                <p className="p-2">{menu?.name}</p>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

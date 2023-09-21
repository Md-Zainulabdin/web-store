import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-[60px] bg-white fixed top-0 left-0 z-20 border-b px-[20px] md:px-[50px] flex items-center justify-between">
      <div className="logo">
        <Link to={"/"}>
          <h1 className="text-2xl font-semibold text-[--text-color]">
            Web Store
          </h1>
        </Link>
      </div>
      <div className="menu flex items-center gap-6">
        <NavLink
          to={"/cart"}
          className={({ isActive }) => `
           hover:text-[#777] cursor-pointer ${
             isActive ? "text-indigo-400" : "text-[#555]"
           }`}
        >
          <FiShoppingBag size={20} />
        </NavLink>
        <NavLink
          to={"profile"}
          className={({ isActive }) => `
           hover:text-[#777] cursor-pointer ${
             isActive ? "text-indigo-400" : "text-[#555]"
           }`}
        >
          <MdPersonOutline size={24} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

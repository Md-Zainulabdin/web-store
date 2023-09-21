import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[70px] px-[20px] md:px-[50px]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

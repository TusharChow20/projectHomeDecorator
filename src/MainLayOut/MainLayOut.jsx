import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Outlet } from "react-router";

const MainLayOut = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="min-h-[calc(100vh-258px)]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;

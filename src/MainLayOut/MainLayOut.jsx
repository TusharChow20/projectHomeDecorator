import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Outlet } from "react-router";

const MainLayOut = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="min-h-[calc(100vh-258px)] px-3 md:px-10 max-w-screen-2xl mx-auto py-4 md:py-10">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;

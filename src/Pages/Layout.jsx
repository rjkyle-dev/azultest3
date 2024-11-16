/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />

      {/* <section className="container mx-auto h-auto mb-[50px] px-4 ml-[9em]">
        <Footer />
      </section> */}
    </>
  );
};

export default Layout
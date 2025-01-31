import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="w-screen h-[85vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

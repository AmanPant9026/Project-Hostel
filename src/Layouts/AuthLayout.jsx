import React from "react";
import Navbar from "../components/Navbar";  // Import Navbar component
import Footer from "../components/Footer";  // Import Footer component

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Using flexbox to make sure the layout stretches properly */}
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <div className="flex-grow">{children}</div>  {/* This will take up the remaining space */}
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default AuthLayout;

// Layout for authenticated pagesimport React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <div className="w-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default AuthLayout;

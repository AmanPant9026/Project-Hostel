import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-screen px-10 py-3 bg-gray-100 shadow-lg">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-extrabold text-[#3164f4] font-poppins"
      >
        Hostel Stay
      </Link>

      {/* Login / Signup */}
      <div className="flex gap-2">
        <Link to="/login">
          <Button variant="text" className="font-poppins">
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="text-white bg-blue-600 font-poppins">
            Signup
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

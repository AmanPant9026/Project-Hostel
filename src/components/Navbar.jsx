import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed flex items-center justify-between w-screen px-10 py-2 bg-gray-100 shadow-lg">
      {/* Logo */}
      <Link to="/" className="text-xl font-extrabold text-black font-playwrite">
        Hostel Stay
      </Link>

      {/* Login / Signup */}
      <div className="flex items-center justify-center gap-2">
        <Link to="/login">
          <Button
            variant="text"
            className="px-4 py-2 text-sm font-medium capitalize font-source"
          >
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="px-4 py-2 text-sm font-medium text-white capitalize font-source ">
            Signup
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

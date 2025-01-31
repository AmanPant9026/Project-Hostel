import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-20 flex items-center justify-between w-screen px-10 py-2 shadow-lg transition-colors duration-300 ${
        isScrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="text-xl font-extrabold font-playwrite">
        Hostel Stay
      </Link>

      {/* Login / Signup */}
      <div className="flex items-center justify-center gap-2">
        <Link to="/login">
          <Button
            variant="text"
            className={`px-4 py-2 text-sm font-medium capitalize font-source ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button
            className={`px-3 py-1 text-sm font-medium text-white capitalize font-source ${
              isScrolled ? "" : "bg-white text-black"
            } `}
          >
            Signup
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

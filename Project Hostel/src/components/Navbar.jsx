import { Button } from "@material-tailwind/react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-screen px-10 py-3 bg-gray-100 shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-[#3164f4] font-poppins">
        Hostel stay
      </div>
      {/* login /regis */}
      <div className="flex gap-2">
        <Button variant="text" className=" font-poppins">
          Login
        </Button>
        <Button className="bg-primary font-poppins">Signup</Button>
      </div>
    </div>
  );
};

export default Navbar;

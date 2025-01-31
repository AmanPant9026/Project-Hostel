import React from "react";
import { FaXTwitter, FaMeta, FaInstagram, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="py-6 text-center text-black">
      <div className="flex items-center justify-between px-8 ">
        {/* Logo */}
        <div className="flex items-center justify-center text-xl">
          <h1 className="font-semibold font-playwrite">Hostel stay</h1>
        </div>
        {/* contact icons */}
        <div className="flex gap-4 mr-5 text-xl ">
          <FaXTwitter size={"1.3em"} />
          <FaMeta size={"1.3em"} />
          <FaInstagram size={"1.3em"} />
          <FaLinkedin size={"1.3em"} />
        </div>
      </div>
      <div className="flex items-center justify-center w-full px-8 mt-3">
        <hr className="w-full border-t-2 border-gray-400" />
      </div>

      <div className="flex items-center justify-center gap-4 mt-2">
        <p className="text-xs font-poppins">
          &copy; {new Date().getFullYear()} Hostel Stay. All Rights Reserved.
        </p>

        <a href="#" className="text-xs hover:underline ">
          Privacy Policy
        </a>
        <a href="#" className="text-xs hover:underline">
          Terms of Service
        </a>
        <a href="#" className="text-xs hover:underline">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;

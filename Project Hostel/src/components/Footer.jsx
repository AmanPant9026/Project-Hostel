import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-white bg-gray-800">
      <p className="text-sm font-poppins">
        &copy; {new Date().getFullYear()} Hostel Stay. All Rights Reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="text-blue-400 hover:text-blue-300">
          Privacy Policy
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-300">
          Terms of Service
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-300">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;

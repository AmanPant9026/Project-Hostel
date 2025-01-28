import React, { useState } from "react";
import { auth } from "../services/firebase"; 
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"; 
import AuthLayout from "../Layouts/AuthLayout";
import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom"; 
import googleLogo from '../assets/google.png';  // Import the Google logo

const Login = () => {
  const [message, setMessage] = useState("");  
  const [isLoading, setIsLoading] = useState(false);  

  const navigate = useNavigate(); 

  // Handle Google login
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setMessage("Login successful with Google!");
      console.log("User logged in with Google: ", result.user);
      navigate("/owner-dashboard");  // Redirect to the Owner Dashboard after successful login
    } catch (error) {
      setMessage("Failed to login with Google: " + error.message);
      console.log("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="relative h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 overflow-hidden">
        {/* Login Form with floating effect */}
        <div className="relative bg-white bg-opacity-80 shadow-2xl rounded-3xl p-12 md:w-96 w-full transform transition-all hover:scale-105 ease-in-out duration-300">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Typography variant="h2" color="blue-gray" className="font-poppins text-3xl font-extrabold text-[#3164f4]">
              Hostel Stay
            </Typography>
          </div>

          <div className="text-center mb-6">
            <Typography variant="h3" color="blue-gray" className="font-poppins text-2xl font-semibold text-gray-800">
              Welcome Back
            </Typography>
            <p className="text-sm text-gray-600 mt-2">Please sign in to continue</p>
          </div>

          {/* Error Message */}
          {message && <p className="text-center text-sm text-red-500 mb-4">{message}</p>}

          {/* Google Login Image */}
          <div className="flex justify-center mb-6">
            <img
              src={googleLogo}
              alt="Google Login"
              className="w-20 h-20 cursor-pointer transition-all transform hover:scale-110 hover:opacity-90"
              onClick={handleGoogleLogin}
            />
          </div>

          {/* Contact Us Section */}
          <div className="text-center mt-6">
            <Typography className="text-xs text-gray-600">
              Need assistance?{" "}
              <a href="/contact" className="text-blue-500 font-semibold underline">
                Contact Us
              </a>
            </Typography>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;

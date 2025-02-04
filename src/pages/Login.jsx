import React, { useState } from "react";
import { auth } from "../services/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import AuthLayout from "../Layouts/AuthLayout";
import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import googleLogo from "../assets/google.png"; // Import the Google logo

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
      navigate("/owner-dashboard"); // Redirect to the Owner Dashboard after successful login
    } catch (error) {
      setMessage("Failed to login with Google: " + error.message);
      console.log("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700">
        {/* Login Form with floating effect */}
        <div className="relative w-full p-12 transition-all duration-300 ease-in-out transform bg-white shadow-2xl bg-opacity-80 rounded-3xl md:w-96 hover:scale-105">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Typography
              variant="h2"
              color="blue-gray"
              className="font-poppins text-3xl font-extrabold text-[#3164f4]"
            >
              Hostel Stay
            </Typography>
          </div>

          <div className="mb-6 text-center">
            <Typography
              variant="h3"
              color="blue-gray"
              className="text-2xl font-semibold text-gray-800 font-poppins"
            >
              Welcome Back
            </Typography>
            <p className="mt-2 text-sm text-gray-600">
              Please sign in to continue
            </p>
          </div>

          {/* Error Message */}
          {message && (
            <p className="mb-4 text-sm text-center text-red-500">{message}</p>
          )}

          {/* Google Login Image */}
          <div className="flex justify-center mb-6">
            <img
              src={googleLogo}
              alt="Google Login"
              className="w-20 h-20 transition-all transform cursor-pointer hover:scale-110 hover:opacity-90"
              onClick={handleGoogleLogin}
            />
          </div>

          {/* Contact Us Section */}
          <div className="mt-6 text-center">
            <Typography className="text-xs text-gray-600">
              Need assistance?{" "}
              <a
                href="/contact"
                className="font-semibold text-blue-500 underline"
              >
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

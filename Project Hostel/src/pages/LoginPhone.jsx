import React, { useState } from "react";
import { useCountries } from "use-react-countries";
import AuthLayout from "../Layouts/AuthLayout";
import { auth } from "../../firebase-config";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider
} from "firebase/auth";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from "@material-tailwind/react";

const LoginPhone = () => {
  const [otp, setOtp] = useState("");

  const [message, setMessage] = useState("");

  // Configure Recaptcha
  const [phone, setphone] = useState("");
  const [user, setuser] = useState();
  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setuser(confirmation);
    } catch (error) {
      console.log(error);
    }
  };
  const verifyotp = async () => {
    try {
      await user.confirm(otp);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthLayout>
      <div className="h-[90vh] flex justify-center items-center">
        <div className="w-1/3 bg-gray-100 rounded-lg shadow-lg h-1/3">
          <div className="flex items-center justify-center w-full font-semibold h-1/4 font-poppins">
            <h1>Login with Phone Number</h1>
          </div>
          <div className="flex items-center px-2 h-1/3">
            <PhoneInput
              country="US"
              value={phone} // "phone" already contains "+"
              onChange={(phone) => setphone(phone)} // Prepends "+" every time
            />
          </div>
          <div className="flex items-center justify-center h-1/3">
            <Button size="sm" className="text-xs w-1/a3" onClick={sendOtp}>
              Send OTP
            </Button>
          </div>
          <div id="recaptcha"></div>
          <div>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 mt-4 border rounded"
            />
            <Button
              className="p-2 mt-2 text-xs text-white bg-blue-500 "
              onClick={verifyotp}
            >
              Verify OTP
            </Button>
          </div>
          <div id="recaptcha-container" style={{ marginTop: "10px" }}></div>
          {message && (
            <p className="text-sm text-center text-red-500">{message}</p>
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPhone;

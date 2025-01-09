//  app component'
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OwnerDashboard from "./pages/OwnerDashboard";
import UserDashboard from "./pages/UserDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    //full containers
    //and route mangement
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/owner" element={<OwnerDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

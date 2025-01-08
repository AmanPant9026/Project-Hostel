//  app component'
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OwnerDashboard from "./pages/OwnerDashboard";
import UserDashboard from "./pages/UserDashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    //full containers
    //and route mangement
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/owner" element={<OwnerDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

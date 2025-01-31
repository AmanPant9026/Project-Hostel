import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login"; // Unified login component
import OwnerDashboard from "./pages/OwnerDashboard"; // Owner Dashboard Page
import MultiStepForm from "./components/MultistepForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />{" "}
        {/* Owner Dashboard */}
        <Route path="/multi-step-form" element={<MultiStepForm />} />{" "}
        {/* Example route */}
      </Routes>
    </Router>
  );
}

export default App;

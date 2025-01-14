import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  {
    title: "Tenant Onboarding",
    description: "Easily onboard tenants with a step-by-step process."
  },
  {
    title: "Real-Time Tracking",
    description: "Track rental statuses and payments in real-time."
  },
  {
    title: "Payment Automation",
    description: "Simplify rent collection with automated payment reminders."
  },
  {
    title: "Hostel Management",
    description: " Easily Manage your Hostel via Dashboard"
  }
];

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-100 ">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen p-3 bg-blue-50">
          <h1 className="text-5xl font-extrabold text-[#3164f4] font-poppins mb-4">
            Streamline your Hostel Management
          </h1>
          <p className="mb-8 text-lg text-gray-600 font-poppins">
            Manage your hostels with ease, from tenant onboarding to financial
            reporting.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
              Try Demo
            </button>
            <button className="px-6 py-3 text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50">
              Learn More
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-10 py-16">
          <h2 className="mb-10 text-3xl font-bold text-center text-gray-700 font-poppins">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
        {/* About the Platform */}
        <section></section>
      </main>
      <Footer />
    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="mb-2 text-xl font-bold text-gray-800 font-poppins">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HomePage;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@material-tailwind/react";
// import { ChevronRight } from "lucide-react";
const features = [
  {
    title: "Seamless Onboarding Process for Hostel Owners",
    description: "Get started quickly with our easy onboarding."
  },
  {
    title: "Comprehensive Dashboard for Real-Time Insights",
    description: "Monitor your properties effortlessly from one place."
  },
  {
    title: "Automated Communication with Tenants Made Easy",
    description: "Stay connected with tenants through automated messages."
  }
];
const services = [
  {
    title:
      "Streamlined Solutions for Effortless Property Rentals and Management",
    description:
      "Our services are designed to make property management hassle-free for owners.",
    link_title: "Learn More"
  },
  {
    title:
      "Comprehensive Marketing Strategies to Maximize Your Property's Visibility",
    description:
      "We help you reach potential renters through targeted marketing campaigns.",
    link_title: "Sign Up"
  },
  {
    title: "24/7 Support to Address Your Property Management Needs Anytime",
    description:
      "Our dedicated support team is here to assist you around the clock.",
    link_title: "Contact"
  }
];
const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen p-3 bg-black">
          <h1 className="w-1/2 mt-10 mb-4 text-4xl font-bold text-center text-white font-source">
            Simplify Hostel Management for Owners Everywhere
          </h1>
          <p className="w-4/5 mb-8 text-sm text-center text-gray-600 font-poppins">
            Our rental website streamlines the process for property owners,
            making it easier than ever to manage listings and connect with
            potential renters. Experience hassle-free onboarding and enjoy more
            time focusing on what matters most.
          </p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="px-3 py-2 font-medium text-black capitalize bg-white rounded-lg shadow-md font-source"
            >
              Learn more
            </Button>
            <Button className="flex items-center justify-center gap-2 px-3 py-2 font-medium text-white capitalize bg-black border border-white rounded-lg font-source">
              Sign Up
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="flex flex-col items-center justify-center px-10 py-16">
          <h2 className="mb-4 text-3xl font-bold text-center text-black font-poppins">
            Effortless Hostel Management for Owners
          </h2>

          <p className="w-3/5 mb-10 text-sm text-center text-gray-600">
            Our platform streamlines property management, allowing owners to
            focus on what truly matters. Experience a hassle-free way to manage
            your rentals with our intuitive tools.
          </p>

          <div className="grid justify-start grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          <div className="flex gap-4 mt-16">
            <Button
              variant="outlined"
              className="px-3 py-2 font-medium text-black capitalize bg-gray-100 rounded-lg font-source"
            >
              Learn more
            </Button>
            <Button
              variant="text"
              className="flex items-center justify-center gap-2 px-3 py-2 font-medium capitalize rounded-lg font-source"
            >
              Sign Up
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </div>
        </section>
        {/* Discover the Ease */}
        <section className="flex justify-center gap-3 px-10 mb-10">
          <div className="w-1/2 ">
            <h2 className="mb-4 text-3xl font-bold text-black font-poppins">
              Discover the Ease of Rental Management
            </h2>
            <p className="mb-10 text-sm text-gray-600">
              Our rental website streamlines the entire process for property
              owners. Enjoy hassle-free management and increased efficiency.
            </p>
            <div className="flex flex-row">
              <div>
                <h1 className="font-semibold font-source"> Time-Saving</h1>
                <p className="mt-3 text-sm text-gray-600 font-source">
                  Reduce the time spent on property management tasks and focus
                  on what matters.
                </p>
              </div>
              <div>
                <h1 className="font-semibold font-source">User-Friendly</h1>
                <p className="mt-3 text-sm text-gray-600 font-source">
                  Navigate effortlessly with our intuitive interface designed
                  for all users.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <Button
                variant="outlined"
                className="px-3 py-2 font-medium text-black capitalize bg-gray-100 rounded-lg font-source"
              >
                Learn more
              </Button>
              <Button
                variant="text"
                className="flex items-center justify-center gap-2 px-3 py-2 font-medium capitalize rounded-lg font-source"
              >
                Sign Up
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
          <div className="w-2/5 ">
            <img
              src="/src/assets/Placeholder.svg"
              alt=""
              className="rounded-lg"
            />
          </div>
        </section>
        {/* services */}
        <section className="flex flex-col justify-center gap-3 px-10 mb-10">
          <h2 className="w-3/5 mt-10 mb-4 text-3xl font-bold text-black font-poppins ">
            Simplifying Property Management : Services Tailored for Property
            Owners
          </h2>
          <div className="grid justify-start grid-cols-1 gap-4 mt-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((feature, index) => (
              <FeatureCard2
                key={index}
                title={feature.title}
                description={feature.description}
                link_title={feature.link_title}
              />
            ))}
          </div>
        </section>
        {/* Join us */}
        <section className="flex items-center justify-center px-10 mb-10">
          <div className="w-1/2 mt-10">
            <h2 className="mb-4 text-3xl font-bold text-black font-poppins">
              Join Us Today for Easy Rentals
            </h2>
            <p className="mb-10 text-sm text-gray-600">
              Discover how our platform simplifies rental management for
              property owners and tenants alike.
            </p>

            <div className="flex gap-4 mt-8">
              <Button
                variant="outlined"
                className="px-3 py-2 font-medium text-black capitalize bg-gray-100 rounded-lg font-source"
              >
                Learn more
              </Button>
              <Button
                variant="text"
                className="flex items-center justify-center gap-2 px-3 py-2 font-medium capitalize rounded-lg font-source"
              >
                Sign Up
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
          <div className="flex justify-center w-1/2 mt-10 ">
            <img
              src="/src/assets/Placeholder2.svg"
              alt=""
              className="object-cover w-4/5 rounded-lg h-52 w-100 "
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg h-fit">
      <div className="flex items-center justify-center w-full mb-2 h-1/4">
        <img src="/src/assets/bullet.svg" className="w-[12%]" />
      </div>
      <div className="flex items-center justify-center h-1/2">
        <h3 className="mb-3 font-bold text-center text-gray-800 text-md font-poppins h-1/2">
          {title}
        </h3>
      </div>
      <div className="flex items-center justify-center h-1/4">
        <p className="text-xs text-center text-gray-600 h-1/4">{description}</p>
      </div>
    </div>
  );
};

const FeatureCard2 = ({ title, description, link_title }) => {
  return (
    <div className="flex flex-col items-center p-3 bg-white rounded-lg h-fit">
      <div className="flex items-center w-full mb-2 h-1/4">
        <img src="/src/assets/bullet.svg" className="w-[12%]" />
      </div>
      <div className="flex items-center h-1/2">
        <h3 className="mb-3 font-bold text-gray-800 text-md font-poppins h-1/2">
          {title}
        </h3>
      </div>
      <div className="flex items-center h-1/4">
        <p className="text-xs text-gray-600 h-1/4">{description}</p>
      </div>
      <div className="flex items-center w-full mt-5 h-1/4">
        <Button
          variant="text"
          className="flex items-start gap-2 px-3 py-2 font-medium capitalize rounded-lg font-source"
        >
          {link_title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;

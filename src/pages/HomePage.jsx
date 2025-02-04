import React from "react";
import MainLayout from "../Layouts/MainLayout";
import HeroSection from "../components/HomePage/HeroSection";
import FeaturesSection from "../components/HomePage/FeaturesSection";
import DiscoverSection from "../components/HomePage/DiscoverSection";
import ServicesSection from "../components/HomePage/ServicesSection";
import JoinUsSection from "../components/HomePage/JoinUsSection";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <ServicesSection />
      <JoinUsSection />
    </MainLayout>
  );
};

export default HomePage;

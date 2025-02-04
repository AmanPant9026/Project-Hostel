import React from "react";
import styled from "styled-components";
import Title from "../Title";
import FeatureCard from "./FeatureCard";

const features = [
  { title: "🚀 Seamless Onboarding", description: "Get started quickly with our easy onboarding process." },
  { title: "📊 Comprehensive Dashboard", description: "Monitor your properties and track tenant activity in real-time." },
  { title: "💬 Automated Communication", description: "Stay connected with tenants effortlessly through automated messaging." },
];

const FeaturesSection = () => {
  return (
    <FeaturesWrapper>
      <TitleContainer>
        <Title title="Effortless Hostel Management" subtitle="Manage your properties with ease" />
      </TitleContainer>
      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} />
        ))}
      </FeatureGrid>
    </FeaturesWrapper>
  );
};


const FeaturesWrapper = styled.section`
  text-align: center;
  padding: 80px 20px;
  background: white;
  color: #2d2d2d;
  transition: all 0.3s ease-in-out;
`;

const TitleContainer = styled.div`
  margin-bottom: 50px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  padding: 0 30px;
`;

export default FeaturesSection;

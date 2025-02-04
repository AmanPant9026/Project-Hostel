import React from "react";
import styled from "styled-components";
import Title from "../Title";
import ServiceCard from "./ServiceCard";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const services = [
  { title: "🏠 Effortless Property Rentals", description: "Hassle-free management for owners.", link_title: "Learn More" },
  { title: "📢 Maximized Property Visibility", description: "Reach more renters through marketing.", link_title: "Learn More" },
  { title: "📞 24/7 Customer Support", description: "Always here to assist you.", link_title: "Learn More" },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <ServicesWrapper>
      <TitleContainer>
        <Title title="Tailored Services for Property Owners" subtitle="Experience seamless property management" />
      </TitleContainer>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} link_title={service.link_title} />
        ))}
      </ServiceGrid>
      <ButtonContainer>
        <StyledButton primary onClick={() => navigate("/login")}>Sign In</StyledButton>
      </ButtonContainer>
    </ServicesWrapper>
  );
};

const ServicesWrapper = styled.section`
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(to bottom, #ffffff, #f8f9fa);
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
`;

const TitleContainer = styled.div`
  margin-bottom: 40px;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  padding: 0 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
`;

const StyledButton = styled(Button)`
  padding: 14px 24px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(90deg, #0077b6, #00b4d8);
  color: white;
  border: none;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background: linear-gradient(90deg, #005f8a, #0077b6);
    transform: translateY(-2px);
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
  }
`;

export default ServicesSection;

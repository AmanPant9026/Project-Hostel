import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <HeroWrapper>
      <Overlay />
      <Content>
        <TitleText>Seamless <HighlightedText>Hostel Management</HighlightedText></TitleText>
        <Subtitle>Effortless <HighlightedSubtitle>Property Rentals & Booking System</HighlightedSubtitle></Subtitle>
        <Description>
          Manage your hostel efficiently with our all-in-one management system. Automate bookings, monitor availability, and track payments effortlessly.
        </Description>
        <ButtonContainer>
          <StyledButton>Explore More</StyledButton>
          <StyledButton primary onClick={() => navigate("/login")}>Get Started</StyledButton>
        </ButtonContainer>
      </Content>
    </HeroWrapper>
  );
};


const HeroWrapper = styled.section`
  height: 100vh;
  background: url("/src/assets/hero-bg.jpg") center/cover no-repeat, linear-gradient(to right, #001F3F, #0077B6);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  padding: 20px;
`;


const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 119, 182, 0.5), rgba(255, 255, 255, 0.1));
`;

const Content = styled.div`
  max-width: 800px;
  z-index: 2;
  position: relative;
  padding: 20px;
`;


const TitleText = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #f8f9fa; 
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
`;


const HighlightedText = styled.span`
  color: #ffcc00;
  text-shadow: 2px 2px 14px rgba(255, 204, 0, 0.6);
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 10px;
  color: #d9e5ff;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
`;


const HighlightedSubtitle = styled.span`
  color: #00c2ff;
  text-shadow: 1px 1px 14px rgba(0, 194, 255, 0.6);
`;

const Description = styled.p`
  font-size: 1.3rem;
  opacity: 0.95;
  margin: 20px 0;
  font-weight: 400;
  color: #f1f1f1; /* Slightly off-white for better readability */
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;


const StyledButton = styled(Button)`
  padding: 14px 24px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: ${(props) => (props.primary ? "linear-gradient(90deg, #ffcc00, #ff5733)" : "rgba(255, 255, 255, 0.3)")};
  color: ${(props) => (props.primary ? "#fff" : "white")};
  border: ${(props) => (props.primary ? "none" : "2px solid white")};
  backdrop-filter: blur(12px);
  box-shadow: 0px 4px 12px rgba(255, 255, 255, 0.2);

  &:hover {
    background: ${(props) => (props.primary ? "linear-gradient(90deg, #e6b800, #d14400)" : "rgba(255, 255, 255, 0.5)")};
    color: ${(props) => (props.primary ? "#fff" : "white")};
    transform: translateY(-2px);
    box-shadow: 0px 6px 15px rgba(255, 255, 255, 0.3);
  }
`;

export default HeroSection;

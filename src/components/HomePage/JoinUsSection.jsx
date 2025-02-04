import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const JoinUsSection = () => {
  const navigate = useNavigate();

  return (
    <JoinWrapper>
      <Content>
        <Title title="Join Us Today & Elevate Your Rental Experience" subtitle="Smart, seamless, and efficient property management" />
        <Description>
          Imagine effortless hostel management where bookings, payments, and tenant communication happen with just a few clicks.  
          Our platform empowers hostel owners by automating tasks, increasing efficiency, and reducing manual work.  
          <br /><br />
          📌 For Owners – Optimize your rentals with real-time insights & automated processes.
          <br></br>  
          📌 For Tenants – Find, book, and manage your stay with a seamless digital experience.  
          <br /><br />
          Don’t miss out—transform your rental journey today!
        </Description>
        <ButtonContainer>
          <StyledButton>Learn More</StyledButton>
          <StyledButton primary onClick={() => navigate("/login")}>Sign In</StyledButton>
        </ButtonContainer>
      </Content>
    </JoinWrapper>
  );
};


const JoinWrapper = styled.section`
  text-align: center;
  padding: 100px 20px;
  background: white;
  color: #2d2d2d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
  font-family: "Poppins", sans-serif;
`;

const Content = styled.div`
  max-width: 850px;
  text-align: center;
  padding: 20px;
`;


const Description = styled.p`
  font-size: 1.3rem;
  color: #444;
  margin-bottom: 40px;
  font-weight: 400;
  line-height: 1.7;
  text-align: left;
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
  letter-spacing: 0.5px;
`;


const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const StyledButton = styled(Button)`
  padding: 14px 24px;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: ${(props) => (props.primary ? "#0077b6" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#0077b6")};
  border: ${(props) => (props.primary ? "none" : "2px solid #0077b6")};
  box-shadow: ${(props) => (props.primary ? "0px 4px 12px rgba(0, 119, 182, 0.3)" : "none")};

  &:hover {
    background: ${(props) => (props.primary ? "#005f8a" : "#0077b6")};
    color: ${(props) => (props.primary ? "#fff" : "#fff")};
    transform: translateY(-2px);
    box-shadow: ${(props) => (props.primary ? "0px 6px 18px rgba(0, 119, 182, 0.4)" : "0px 6px 15px rgba(0, 119, 182, 0.2)")};
  }
`;

export default JoinUsSection;

import React from "react";
import styled from "styled-components";

const FeatureCard = ({ title, description }) => {
  return (
    <Card>
      <FeatureIcon>{title.charAt(0)}</FeatureIcon>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
};

const Card = styled.div`
  background: linear-gradient(135deg, #0077b6, #00b4d8);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  color: white;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 119, 182, 0.5);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 15px 30pxrgba(0, 119, 182, 0.5);
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 12px;
  }

  p {
    font-size: 1rem;
    opacity: 0.9;
  }
`;


const FeatureIcon = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffcc00;
  text-shadow: 0px 4px 10px rgba(255, 204, 0, 0.8);
  margin-bottom: 20px;
`;

export default FeatureCard;

import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const DiscoverSection = () => {
  const navigate = useNavigate();

  return (
    <DiscoverWrapper>
      <Content>
        <Title title="Discover the Ease of Rental Management" subtitle="Enjoy hassle-free management and increased efficiency" align="left" />
        <Text>
          Our rental platform simplifies hostel and rental management for owners, making the process seamless and effortless. Experience a smooth, user-friendly system that reduces workload and maximizes efficiency.
        </Text>
        <BulletPoints>
          <BulletCard>
            <h3>📌 Time-Saving</h3>
            <p>Reduce the time spent on property management tasks and focus on what matters.</p>
          </BulletCard>
          <BulletCard>
            <h3>🖥️ User-Friendly</h3>
            <p>Navigate effortlessly with our intuitive interface designed for all users.</p>
          </BulletCard>
        </BulletPoints>
        <ButtonContainer>
          <StyledButton>Learn More</StyledButton>
          <StyledButton primary onClick={() => navigate("/login")}>Sign In</StyledButton>
        </ButtonContainer>
      </Content>
      <ImageContainer>
        <StyledImage src="/src/assets/hostel.jpg" alt="Rental Management" />
      </ImageContainer>
    </DiscoverWrapper>
  );
};

/* ✅ Modern Layout with a Clean White Background */
const DiscoverWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 80px 20px;
  background: linear-gradient(to bottom, #ffffff, #f8f9fa);
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Content = styled.div`
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

/* ✅ Improved Text Readability */
const Text = styled.p`
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 1.5;
`;

/* ✅ Styled Bullet Points */
const BulletPoints = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

/* ✅ Glassmorphism Effect on Bullet Cards */
const BulletCard = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: #0077b6;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

/* ✅ Buttons with Modern Hover Effects */
const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StyledButton = styled(Button)`
  padding: 14px 24px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: ${(props) => (props.primary ? "linear-gradient(90deg, #ffcc00, #ff5733)" : "#0077b6")};
  color: ${(props) => (props.primary ? "white" : "white")};
  border: none;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background: ${(props) => (props.primary ? "linear-gradient(90deg, #e6b800, #d14400)" : "#005f8a")};
    transform: translateY(-2px);
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
  }
`;

/* ✅ Responsive Image Styling */
const ImageContainer = styled.div`
  width: 40%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export default DiscoverSection;

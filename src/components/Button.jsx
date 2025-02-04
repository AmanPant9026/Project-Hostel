import React from "react";
import styled from "styled-components";

const Button = ({ children, primary, onClick, fullWidth }) => {
  return (
    <StyledButton primary={primary} onClick={onClick} fullWidth={fullWidth}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 14px 24px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: none;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  background: ${({ primary }) => (primary ? "linear-gradient(90deg, #0077b6, #00b4d8)" : "white")};
  color: ${({ primary }) => (primary ? "white" : "#0077b6")};
  border: ${({ primary }) => (primary ? "none" : "2px solid #0077b6")};
  box-shadow: ${({ primary }) => (primary ? "0px 4px 10px rgba(0, 119, 182, 0.3)" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "linear-gradient(90deg, #005f8a, #0077b6)" : "#0077b6")};
    color: white;
    box-shadow: ${({ primary }) => (primary ? "0px 6px 15px rgba(0, 119, 182, 0.4)" : "0px 4px 8px rgba(0, 119, 182, 0.2)")};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default Button;

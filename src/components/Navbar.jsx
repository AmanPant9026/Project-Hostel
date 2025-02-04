import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarWrapper>
      <NavContainer>
        <Logo onClick={() => navigate("/")}>🏠 Hostel Manager</Logo>

        {/* Desktop Navigation */}
        <NavLinks>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/features">Features</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <SignInButton onClick={() => navigate("/login")}>Sign In</SignInButton>
        </NavLinks>

        {/* Mobile Menu Toggle */}
        <MenuIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </MenuIcon>
      </NavContainer>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <MobileMenu>
          <MobileNavItem to="/" onClick={() => setIsOpen(false)}>Home</MobileNavItem>
          <MobileNavItem to="/features" onClick={() => setIsOpen(false)}>Features</MobileNavItem>
          <MobileNavItem to="/services" onClick={() => setIsOpen(false)}>Services</MobileNavItem>
          <MobileNavItem to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavItem>
          <SignInButtonMobile onClick={() => { navigate("/login"); setIsOpen(false); }}>
            Sign In
          </SignInButtonMobile>
        </MobileMenu>
      )}
    </NavbarWrapper>
  );
};

/* 🔹 Navbar Styling */
const NavbarWrapper = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background 0.3s ease-in-out;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
`;

const Logo = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #0077b6;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #005f8a;
  }
`;

/* 🔹 Desktop Navigation */
const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: #2d2d2d;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #0077b6;
  }
`;

/* 🔹 Sign In Button */
const SignInButton = styled.button`
  padding: 10px 18px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(90deg, #0077b6, #00b4d8);
  color: white;
  border: none;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 8px rgba(0, 119, 182, 0.2);

  &:hover {
    background: linear-gradient(90deg, #005f8a, #0077b6);
    box-shadow: 0px 6px 12px rgba(0, 119, 182, 0.3);
  }
`;

/* 🔹 Mobile Navigation Menu */
const MenuIcon = styled.div`
  cursor: pointer;
  color: #0077b6;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const MobileNavItem = styled(Link)`
  font-size: 1.2rem;
  font-weight: 500;
  color: #2d2d2d;
  text-decoration: none;
  padding: 12px 0;
  text-align: center;
  font-family: "Poppins", sans-serif;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #0077b6;
  }
`;

const SignInButtonMobile = styled(SignInButton)`
  margin-top: 15px;
  width: 100%;
  text-align: center;
`;

export default Navbar;

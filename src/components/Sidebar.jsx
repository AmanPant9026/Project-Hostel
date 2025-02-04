import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SidebarWrapper isOpen={isOpen}>
      <Header>
        <Logo>🏠 Hostel Manager</Logo>
        <ToggleButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </ToggleButton>
      </Header>

      <NavMenu isOpen={isOpen}>
        <NavItem to="/" active={location.pathname === "/"}>🏡 Home</NavItem>
        <NavItem to="/dashboard" active={location.pathname === "/dashboard"}>📊 Dashboard</NavItem>
        <NavItem to="/bookings" active={location.pathname === "/bookings"}>📅 Bookings</NavItem>
        <NavItem to="/settings" active={location.pathname === "/settings"}>⚙️ Settings</NavItem>
        <SignInButton onClick={() => navigate("/login")}>🔑 Sign In</SignInButton>
      </NavMenu>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  width: ${({ isOpen }) => (isOpen ? "250px" : "70px")};
  height: 100vh;
  background: #0077b6;
  color: white;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease-in-out;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h2`
  font-size: ${({ isOpen }) => (isOpen ? "1.8rem" : "1rem")};
  font-weight: 700;
  transition: font-size 0.3s ease-in-out;
  text-align: center;
  white-space: nowrap;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const NavMenu = styled.nav`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: hidden;
  ${({ isOpen }) => !isOpen && "display: none;"}
`;

const NavItem = styled(Link)`
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 10px;
  border-radius: 6px;
  transition: background 0.3s ease-in-out;
  background: ${({ active }) => (active ? "#005f8a" : "transparent")};

  &:hover {
    background: #005f8a;
  }
`;

const SignInButton = styled.button`
  background: white;
  color: #0077b6;
  padding: 10px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 20px;

  &:hover {
    background: #ffcc00;
    color: #0077b6;
  }
`;

export default Sidebar;

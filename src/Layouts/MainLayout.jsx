import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

const MainLayout = ({ children }) => {
  return (
    <PageContainer>
      <Navbar />
      <InnerLayout>{children}</InnerLayout>
      <Footer />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  background: #f8f9fa;
  font-family: "Poppins", sans-serif;
`;

const InnerLayout = styled.main`
  max-width: 1200px;
  margin: auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export default MainLayout;

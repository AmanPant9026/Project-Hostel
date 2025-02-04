import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <p>© 2024 Hostel Manager. All Rights Reserved.</p>
      </FooterContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: #0077b6;
  color: white;
  text-align: center;
  padding: 15px 0;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  font-size: 1rem;
`;

export default Footer;

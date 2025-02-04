import React from "react";
import styled from "styled-components";

const Title = ({ title, subtitle, align = "center" }) => {
  return (
    <TitleWrapper align={align}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <Underline />
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-align: ${(props) => props.align};
  margin-bottom: 30px;

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #2d2d2d;
  }

  p {
    font-size: 1rem;
    color: gray;
    margin-top: 5px;
  }
`;

const Underline = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #0077b6, #00b4d8);
  margin: 10px auto 0;
  border-radius: 2px;
`;

export default Title;

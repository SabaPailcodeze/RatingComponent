import React from "react";
import star from "../../assets/Star.svg";
import styled from "styled-components";

const Circle = () => {
  const StyledCircle = styled.div`
    width: 48px;
    height: 48px;
    background-color: #262e38;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  `;
  return (
    <StyledCircle>
      <img src={star} alt="" />
    </StyledCircle>
  );
};

export default Circle;

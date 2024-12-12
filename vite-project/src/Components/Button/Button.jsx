import React from "react";
import styled from "styled-components";

const Button = ({ onClick }) => {
  const StyledButton = styled.button`
    width: 100%;
    background-color: #fc7614;
    color: white;
    border-radius: 22.5px;
    border-style: none;
    padding: 15px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 2px;
    cursor: pointer;
    &:hover {
      background-color: white;
      color: #fc7614;
    }
  `;
  return <StyledButton onClick={onClick}>SUBMIT</StyledButton>;
};

export default Button;

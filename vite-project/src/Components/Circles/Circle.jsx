import React, { useState } from "react";
import styled from "styled-components";
const Circles = ({ isSelected, setIsSelected }) => {
  const Div = styled.div`
    display: flex;
    gap: 25px;
    font-family: "Overpass";
  `;
  const Circle = styled.div`
    height: 51px;
    width: 51px;
    background-color: ${(props) => (props.Selected ? "#FC7614" : "#262e38")};
    color: ${(props) => (props.Selected ? "white" : "#7c8798")};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #7c8798;
      color: white;
    }
  `;
  return (
    <Div>
      <Circle Selected={isSelected === 1} onClick={() => setIsSelected(1)}>
        1
      </Circle>
      <Circle Selected={isSelected === 2} onClick={() => setIsSelected(2)}>
        2
      </Circle>
      <Circle Selected={isSelected === 3} onClick={() => setIsSelected(3)}>
        3
      </Circle>
      <Circle Selected={isSelected === 4} onClick={() => setIsSelected(4)}>
        4
      </Circle>
      <Circle Selected={isSelected === 5} onClick={() => setIsSelected(5)}>
        5
      </Circle>
    </Div>
  );
};

export default Circles;

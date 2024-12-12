import "./App.css";
import styled from "styled-components";
import Star from "./Components/Star/Star";
import Text from "./Components/Text/Text";
import Circle from "./Components/Circles/Circle";
import Button from "./Components/Button/Button";
import React, { useState } from "react";

function App() {
  const [isSelected, setIsSelected] = useState(null);

  const submitClick = () => {
    setIsSelected(null);
  };

  const Div = styled.div`
    margin: 0;
    padding: 0;
    background-color: #131518;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Card = styled.div`
    background: var(
      --black-gradient,
      radial-gradient(98.96% 98.96% at 50% 0%, #232a34 0%, #181e27 100%)
    );
    width: 30%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 30px;
  `;

  return (
    <Div>
      <Card>
        <Star></Star>
        <Text></Text>
        <Circle isSelected={isSelected} setIsSelected={setIsSelected}></Circle>
        <Button onClick={submitClick}></Button>
      </Card>
    </Div>
  );
}

export default App;

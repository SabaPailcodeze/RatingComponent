import React from "react";
import styled from "styled-components";

const Text = () => {
  const How = styled.p`
    color: white;
    font-weight: 700;
    font-size: 28px;
    padding-bottom: 10px;
  `;
  const Please = styled.p`
    color: #969fad;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
  `;
  return (
    <div>
      <How>How did we do?</How>
      <Please>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Please>
    </div>
  );
};

export default Text;

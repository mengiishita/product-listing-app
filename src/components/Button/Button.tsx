import React from "react";
import styled from "styled-components";

const Button: React.FC<{ label: string; onClick: Function }> = (props) => {
  return (
    <Wrapper
      className="bg-primary fc-white"
      onClick={() => {
        props.onClick();
      }}
    >
      {props.label}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button`
  width: 124px;
  height: 22px;
  padding: 0.2rem;
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #085e78;
  }
`;

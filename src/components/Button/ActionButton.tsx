import React from "react";
import styled from "styled-components";

const ActionButton: React.FC<{ label: "-" | "+"; onClick: Function }> = (
  props
) => {
  return (
    <Button
      onClick={() => {
        props.onClick();
      }}
    >
      {props.label}
    </Button>
  );
};

export default ActionButton;

const Button = styled.button`
  width: 10px;
  padding: 0.2rem;
  font-size: 1.5rem;
  color: #1ea4ce;
  background: #ffffff;
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
`;

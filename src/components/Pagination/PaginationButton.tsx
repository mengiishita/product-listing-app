import React from "react";
import styled from "styled-components";

const PaginationButton: React.FC<{
  label: string;
  onClick: Function;
}> = (props) => {
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

export default PaginationButton;

const Button = styled.button`
  height: 16px;
  padding: 12px;
  border: none;
  outline none;
  color: #1ea4ce;
  background: transparent;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

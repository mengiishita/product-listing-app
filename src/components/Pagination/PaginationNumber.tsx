import React from "react";
import styled from "styled-components";

const PaginationNumber: React.FC<{
  label: string;
  isActive: boolean;
  onClick: Function;
}> = (props) => {
  return (
    <Button
      style={{
        background: props.isActive ? "#1EA4CE" : "",
        color: props.isActive ? "#ffffff" : "#697488",
      }}
      onClick={() => {
        props.onClick();
      }}
    >
      {props.label}
    </Button>
  );
};

export default PaginationNumber;

const Button = styled.button`
  min-width: 32px;
  height: 40px;
  padding: 12px;
  font-size: 14px;
  color: #ffffff;
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600px;
  background: transparent;
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  text-align: center;
`;

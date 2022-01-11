import React from "react";
import styled from "styled-components";

const TypeButton: React.FC<{
  label: string;
  className: string;
  onClick: Function;
}> = (props) => {
  return (
    <Button className={props.className} onClick={() => props.onClick()}>
      {props.label}
    </Button>
  );
};

export default TypeButton;

const Button = styled.button`
  width: 60px;
  height: 30px;
  padding: 6px;
  color: white;
  border-radius: 2px;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
`;

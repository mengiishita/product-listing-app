import React from "react";
import styled from "styled-components";

const CustomInput: React.FC<{
  placeholder?: string;
  onChange?: (e: string) => void;
}> = (props) => {
  return (
    <Input
      type="text"
      placeholder={props.placeholder}
      onChange={(e) => {
        props.onChange && props.onChange(e.target.value);
      }}
    />
  );
};

export default CustomInput;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px;
  border: 2px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 2px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #a8a8a8;
  outline: none;

  &:focus {
    border: 3px solid #e0e0e0;
  }
`;

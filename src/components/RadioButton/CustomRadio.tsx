import React from "react";
import styled from "styled-components";
import Tick from "../../assets/images/Tick.png";

const CustomRadio: React.FC<{
  id?: string;
  checked?: boolean;
  label: string;
  onClick: Function;
}> = (props) => {
  return (
    <Container
      onClick={() => {
        props.onClick();
      }}
    >
      <RadioButton
        id={props.id}
        style={{ borderColor: props.checked ? "#1EA4CE" : "" }}
      >
        {props.checked && <img src={Tick} alt="" />}
      </RadioButton>
      <div className="label">{props.label}</div>
    </Container>
  );
};

export default CustomRadio;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .label {
    margin-left: 12px;
  }
  cursor: pointer;
`;

const RadioButton = styled.div`
  width: 22px;
  height: 22px;
  background: #ffffff;
  border: 2px solid #dfdee2;
  box-sizing: border-box;
  border-radius: 17.5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

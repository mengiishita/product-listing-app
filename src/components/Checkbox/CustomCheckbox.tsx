import React from "react";
import styled from "styled-components";

const CustomCheckbox: React.FC<{
  id?: string;
  checked?: boolean;
  label: string;
  count?: number;
  onChange: Function;
}> = (props) => {
  return (
    <Container
      className="grey-light"
      onClick={(e) => {
        props.onChange();
      }}
    >
      <CustomCB id={props.id} onChange={() => {}}>
        <label className="container">
          <input
            type="checkbox"
            checked={props.checked}
            onChange={() => {
              props.onChange();
            }}
          />
          <span className="checkmark"></span>
        </label>
      </CustomCB>
      <div className="label">
        {props.label}{" "}
        {props.count && <span className="fc-grey-light">({props.count})</span>}
      </div>
    </Container>
  );
};

export default CustomCheckbox;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .label {
    width: 100%;
    margin-left: 8px;
    margin-top: 10px;
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
    }
  }
  cursor: pointer;
`;

const CustomCB = styled.div`
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 22px;
    background-color: #ffffff;
    box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
    border-radius: 2px;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #1ea4ce;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 3px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

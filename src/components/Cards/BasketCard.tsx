import React from "react";
import styled from "styled-components";

const BasketCard: React.FC = (props) => {
  return <Card>{props.children}</Card>;
};

export default BasketCard;

const Card = styled.div`
  width: 100%;
  padding: 1rem;
  padding-right: 0px;
  background: #ffffff;
  border: 8px solid #1ea4ce;
  box-sizing: border-box;
  position: sticky;
  top: 116px;
`;

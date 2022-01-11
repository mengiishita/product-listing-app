import React from "react";
import styled from "styled-components";

const FilterCard: React.FC = (props) => {
  return <Card>{props.children}</Card>;
};

export default FilterCard;

const Card = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
`;

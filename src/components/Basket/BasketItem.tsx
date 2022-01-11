import React from "react";
import styled from "styled-components";
import { SelectedProduct } from "../../models/SelectedProduct";
import ActionButton from "../Button/ActionButton";
import Divider from "../Divider/Divider";

const BasketItem: React.FC<{
  product: SelectedProduct;
  decrease: Function;
  increse: Function;
}> = (props) => {
  return (
    <div>
      <ItemCard className="mt-2 mb-2">
        <div>
          <Title>{props.product.product.name}</Title>
          <Price>₺ {props.product.product.price}</Price>
        </div>
        <div>
          <CountContainer>
            <ActionButton label="-" onClick={() => props.decrease()} />
            <div className="count-box">{props.product.count}</div>
            <ActionButton label="+" onClick={() => props.increse()} />
          </CountContainer>
        </div>
      </ItemCard>
      <Divider />
    </div>
  );
};

export default BasketItem;

const ItemCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #191919;
`;

const Price = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #1ea4ce;
`;

const CountContainer = styled.div`
  width: 100%;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  .count-box {
    width: 32px;
    height: 32px;
    color: #ffffff;
    background: #1ea4ce;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

import React from "react";
import styled from "styled-components";
import Container from "../Layout/Container";
import Logo from "../../assets/images/Logo.svg";
import Basket from "../../assets/images/Basket.svg";
import { useAppSelector } from "../../hooks/custom-hooks";

const Header = () => {
  const totalPrice = useAppSelector((state) => state.basket.totalPrice);
  return (
    <CustomHeader className="bg-primary">
      <Container
        style={{
          height: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Logo} width={141} height={40} alt="Logo" />
        </div>
        <BasketContent className="align-text-right bg-secondary">
          <img src={Basket} width={24} height={24} alt="Basket" />
          <span className="price">₺ {totalPrice.toFixed(2)}</span>
        </BasketContent>
      </Container>
    </CustomHeader>
  );
};

export default Header;

const CustomHeader = styled.header`
  width: 100%;
  height: 76px;
  position: sticky;
  top: 0px;
  z-index: 2;
`;

const BasketContent = styled.div`
  width: 129px;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .price {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
  }
`;

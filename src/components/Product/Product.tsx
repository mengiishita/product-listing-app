import React from "react";
import styled from "styled-components";
import Product from "../../models/Product";
import AddButton from "../Button/Button";

const ProdcutCard: React.FC<{ product?: Product; addCard: Function }> = (
  props
) => {
  return (
    <Container className="bg-white">
      <ProductImage>
        <div className="image-box"></div>
      </ProductImage>
      <ProductPrice className="fc-primary">
        ₺ <strong>{props.product && props.product.price}</strong>
      </ProductPrice>
      <ProductTitle className="fc-black">
        {props.product && props.product.name}
      </ProductTitle>
      <div className="add-button-container">
        <AddButton
          label="Add"
          onClick={() => {
            props.addCard();
          }}
        />
      </div>
    </Container>
  );
};

export default ProdcutCard;

const Container = styled.div`
  width: 124px;
  height: 235px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .add-button-container {
    position: absolute;
    bottom 0;
  }
`;

const ProductImage = styled.div`
  padding: 1rem;
  background: #fefefe;
  border: 2px solid #f3f0fe;
  border-radius: 12px;
  box-sizing: border-box;

  .image-box {
    height: 92px;
    background: #c4c4c4;
  }
`;

const ProductPrice = styled.div`
  height: 23px;
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #1ea4ce;
`;

const ProductTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

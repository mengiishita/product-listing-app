import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/custom-hooks";
import Product from "../../models/Product";
import { basketSlice } from "../../redux/slices/basketSlice";
import BasketCard from "../Cards/BasketCard";
import BasketItem from "./BasketItem";

const Basket = () => {
  const dispatch = useDispatch();
  const basket = useAppSelector((state) => state.basket.products);
  const totalPrice = useAppSelector((state) => state.basket.totalPrice);

  const increase = (product: Product) => {
    dispatch(basketSlice.actions.addProduct(product));
  };

  const decrease = (product: Product) => {
    dispatch(basketSlice.actions.removeProduct(product));
  };

  return (
    <BasketCard>
      {basket.length === 0 && <EmptyBasket>No products in the basket!</EmptyBasket>}
      {basket.length > 0 && (
        <ProductsContainer>
          {basket.map((item) => (
            <BasketItem
              key={item.product.added}
              product={item}
              increse={() => increase(item.product)}
              decrease={() => decrease(item.product)}
            />
          ))}
        </ProductsContainer>
      )}
      {basket.length > 0 && (
        <TotalPrice>
          <div className="price">₺ {totalPrice.toFixed(2)}</div>
        </TotalPrice>
      )}
    </BasketCard>
  );
};

export default Basket;

const ProductsContainer = styled.div`
  width: 100%;
  max-height: 200px;
  overflow-x: hidden;
  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const TotalPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;

  .price {
    max-width: 92px;
    margin-top: 1rem;
    margin-right: 1rem;
    padding: 1rem;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #1ea4ce;
    background: #ffffff;
    border: 2px solid #1ea4ce;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const EmptyBasket = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

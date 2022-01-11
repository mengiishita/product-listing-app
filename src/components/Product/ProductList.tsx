import React from "react";
import { Column } from "../Layout/Column";
import { Grid } from "../Layout/Grid";
import Product from "./Product";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/custom-hooks";
import { useDispatch } from "react-redux";
import { basketSlice } from "../../redux/slices/basketSlice";
import Pagination from "../Pagination/Pagination";
import TypeButton from "../Button/TypeButton";
import { GET_ITEM_TYPE_FILTER_REQUESTED } from "../../redux/actions/actions-saga";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useAppSelector((state) => state.items.products);
  const types = useAppSelector((state) => state.filters.types);
  const totalRecord = useAppSelector((state) => state.pagination.totalRecord);
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const currentType = useAppSelector((state) => state.query.itemType);

  const changeType = (type: string) => {
    dispatch({
      type: GET_ITEM_TYPE_FILTER_REQUESTED,
      payload: type === currentType ? "" : type,
    });
  };

  return (
    <div>
      <Title className="mb-2 fc-grey-secondary">
        <div className="h4">Products</div>
      </Title>
      <TypesContainer className="mb-2">
        {types.map((type) => {
          return (
            <TypeButton
              key={type.name}
              className={
                currentType === type.name
                  ? "bg-primary fc-white"
                  : "bg-blue fc-primary"
              }
              label={type.name}
              onClick={() => {
                changeType(type.name);
              }}
            />
          );
        })}
      </TypesContainer>
      <ProductListContainer>
        <Grid>
          {products.map((product) => {
            return (
              <Column key={product.added} className="xs-6 sm-6 md-6 lg-3 mb-2">
                <Product
                  product={product}
                  addCard={() => {
                    dispatch(basketSlice.actions.setBasket(product));
                  }}
                />
              </Column>
            );
          })}
        </Grid>
      </ProductListContainer>
      <Pagination
        totalRecord={totalRecord}
        currentPage={parseInt(currentPage.toString())}
      />
    </div>
  );
};

export default ProductList;

const ProductListContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;

  .h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.25px;
  }
`;

const TypesContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
`;

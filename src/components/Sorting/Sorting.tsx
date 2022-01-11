import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/custom-hooks";
import { GET_SORTING_FILTER_REQUESTED } from "../../redux/actions/actions-saga";
import sort from "../../utils/sort";
import FilterCard from "../Cards/FilterCard";
import CustomRadio from "../RadioButton/CustomRadio";

const Sorting: React.FC = (props) => {
  const dispatch = useDispatch();
  const sorting = useAppSelector((state) => state.sorting.title);

  return (
    <div>
      <Title className="mb-1 fc-grey-secondary">Sorting</Title>
      <FilterCard>
        <SortingContainer>
          {sort().map((item) => {
            return (
              <SortingItem key={item.id} className="mb-2 fc-black-secondary">
                <CustomRadio
                  checked={sorting === item.title}
                  label={item.title}
                  onClick={() => {
                    dispatch({
                      type: GET_SORTING_FILTER_REQUESTED,
                      payload: item,
                    });
                  }}
                />{" "}
                {/* <label htmlFor={item.id}>{item.title}</label> */}
              </SortingItem>
            );
          })}
        </SortingContainer>
      </FilterCard>
    </div>
  );
};

export default Sorting;

const SortingContainer = styled.div`
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
`;

const SortingItem = styled.div`
  margin-bottom: 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 0.16px;
  display: flex;

  label {
    margin-left: 12px;
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  display: flex;
  align-items: center;
`;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/custom-hooks";
import { GET_BRAND_FILTER_REQUESTED } from "../../redux/actions/actions-saga";
import search from "../../utils/search";
import FilterCard from "../Cards/FilterCard";
import CustomCheckbox from "../Checkbox/CustomCheckbox";
import CustomInput from "../Input/CustomInput";
const Brands: React.FC = (props) => {
  const dispatch = useDispatch();
  const slug_companies = useAppSelector(
    (state) => state.filters.slug_companies
  );
  const [companies, setCompanies] = useState([...slug_companies]);
  const selectedBrands = useAppSelector((state) => state.brands.brands);

  useEffect(() => {
    setCompanies([...slug_companies]);
  }, [slug_companies]);

  return (
    <div>
      <Title className="mt-2 mb-1 fc-grey-secondary">Brands</Title>
      <FilterCard>
        <SortingContainer>
          <div>
            <CustomInput
              placeholder="Search brand"
              onChange={(text) => {
                setCompanies(search(slug_companies, text));
              }}
            />
          </div>
          <ItemsContainer className="mt-1">
            {companies.map((item) => {
              return (
                <SortingItem
                  key={item.name}
                  className="mb-2 fc-black-secondary"
                >
                  <CustomCheckbox
                    id={item.name}
                    checked={selectedBrands.includes(item.name)}
                    label={item.name}
                    count={item.count}
                    onChange={() => {
                      dispatch({
                        type: GET_BRAND_FILTER_REQUESTED,
                        payload: item.name,
                      });
                    }}
                  />{" "}
                  {/* <label htmlFor={item.id}>{item.title}</label> */}
                </SortingItem>
              );
            })}
          </ItemsContainer>
        </SortingContainer>
      </FilterCard>
    </div>
  );
};

export default Brands;

const SortingContainer = styled.div`
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
`;

const ItemsContainer = styled.div`
  width: 100%;
  height: 142px;
  overflow-x: auto;
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

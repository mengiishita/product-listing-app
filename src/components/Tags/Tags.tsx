import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/custom-hooks";
import { GET_TAG_FILTER_REQUESTED } from "../../redux/actions/actions-saga";
import search from "../../utils/search";
import FilterCard from "../Cards/FilterCard";
import CustomCheckbox from "../Checkbox/CustomCheckbox";
import CustomInput from "../Input/CustomInput";
const Tags: React.FC = (props) => {
  const dispatch = useDispatch();
  const allTags = useAppSelector((state) => state.filters.tags);
  const [tags, setTags] = useState([...allTags]);
  const selectedTags = useAppSelector((state) => state.tags.tags);

  useEffect(() => {
    setTags([...allTags]);
  }, [allTags]);

  return (
    <div>
      <Title className="mt-2 mb-1 fc-grey-secondary">Tags</Title>
      <FilterCard>
        <SortingContainer>
          <div>
            <CustomInput
              placeholder="Search tags"
              onChange={(text) => {
                setTags(search(allTags, text));
              }}
            />
          </div>
          <ItemsContainer className="mt-1">
            {tags.map((item) => {
              return (
                <SortingItem
                  key={item.name}
                  className="mb-2 fc-black-secondary"
                >
                  <CustomCheckbox
                    id={item.name}
                    checked={selectedTags.includes(item.name)}
                    label={item.name}
                    count={item.count}
                    onChange={() => {
                      dispatch({
                        type: GET_TAG_FILTER_REQUESTED,
                        payload: item.name,
                      });
                    }}
                  />{" "}
                </SortingItem>
              );
            })}
          </ItemsContainer>
        </SortingContainer>
      </FilterCard>
    </div>
  );
};

export default Tags;

const SortingContainer = styled.div`
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
`;

const ItemsContainer = styled.div`
  width: 100%;
  height: 142px;
  overflow: auto;

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

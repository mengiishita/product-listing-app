import React from "react";
import styled from "styled-components";
import pagination from "../../utils/pagination";
import PaginationButton from "./PaginationButton";
import PaginationNumber from "./PaginationNumber";
import { useDispatch } from "react-redux";
import { GET_PAGINATION_REQUESTED } from "../../redux/actions/actions-saga";
import { useAppSelector } from "../../hooks/custom-hooks";

const Pagination: React.FC<{ totalRecord: number; currentPage: number }> = (
  props
) => {
  const dispatch = useDispatch();
  const totalRecord = useAppSelector((state) => state.pagination.totalRecord);
  const currentPage = useAppSelector((state) =>
    parseInt(state.pagination.currentPage.toString())
  );

  const changePage = (page: number) => {
    dispatch({ type: GET_PAGINATION_REQUESTED, payload: page });
  };

  const prevPage = () => {
    if (currentPage > 1) {
      dispatch({ type: GET_PAGINATION_REQUESTED, payload: currentPage - 1 });
    }
  };

  const nextPage = () => {
    const lastPage = Math.ceil(totalRecord > 16 ? totalRecord / 16 : 1);
    if (currentPage < lastPage) {
      dispatch({ type: GET_PAGINATION_REQUESTED, payload: currentPage + 1 });
    }
  };

  return (
    <CustomPagination>
      <PaginationButton
        label="Prev"
        onClick={() => {
          prevPage();
        }}
      />
      <div>
        {pagination(props.totalRecord, props.currentPage).map((page, index) => {
          if (page === "...") {
            return <span key={index}>...</span>;
          } else {
            return (
              <PaginationNumber
                key={index}
                label={page.toString()}
                onClick={() => {
                  if (typeof page === "number") {
                    changePage(page);
                  }
                }}
                isActive={props.currentPage === page}
              />
            );
          }
        })}
      </div>
      <PaginationButton
        label="Next"
        onClick={() => {
          nextPage();
        }}
      />
    </CustomPagination>
  );
};

export default Pagination;

const CustomPagination = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

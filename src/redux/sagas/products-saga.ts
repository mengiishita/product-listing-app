import { put, call, takeEvery, select } from "redux-saga/effects";
import Product from "../../models/Product";
import { Products } from "../../models/Products";
import { Filters } from '../../models/Filters';

import {
  GET_BRAND_FILTER_REQUESTED,
  GET_FILTERS_REQUESTED,
  GET_ITEMS_REQUESTED,
  GET_ITEM_TYPE_FILTER_REQUESTED,
  GET_PAGINATION_REQUESTED,
  GET_SORTING_FILTER_REQUESTED,
  GET_TAG_FILTER_REQUESTED
} from "../actions/actions-saga";

import { getAllProducts, getAllFilters } from "../apis/api";
import { itemsSlice } from "../slices/itemsSlice";
import { filtersSlice } from "../slices/filtersSlice";
import { brandsSlice } from "../slices/brandsSlice";
import { SelectedBrands } from "../../models/SelectedBrands";
import { Query } from "../../models/Query";
import { querySlice } from "../slices/querySlice";
import queryBuilder from "../../utils/queryBuilder";
import { tagsSlice } from "../slices/tagsSlice";
import { SelectedTags } from "../../models/SelectedTags";
import { sortingSlice } from "../slices/sortingSlice";
import { Sorting } from "../../models/Sorting";
import { paginationSlice } from "../slices/paginationSlice";
import { loadingSlice } from "../slices/loadingSlice";

type ItemType = {
  type: string,
  payload: string,
}

type SortingItemType = {
  type: string,
  payload: Sorting,
}

type Pagination = {
  type: string,
  payload: number,
}

type Response = {
  meta: {
    total: number,
    currentPage: number,
  },
  data: {
    dataItems: Product[]
  },
}

// fetch all products
function* getItems({ payload }: ItemType) {
  yield put(loadingSlice.actions.setLoading(true));
  const response: Response = yield call(getAllProducts, payload);

  const meta = response.meta;
  const items: Product[] = response.data.dataItems;

  const allItems: Products = {
    products: [...items]
  }

  yield put(itemsSlice.actions.setItems(allItems));
  yield put(paginationSlice.actions.setPagination({ totalRecord: meta.total, currentPage: 1 }));
  yield put(loadingSlice.actions.setLoading(false));
}

// fetch all filters
function* getFilters() {
  const filters: Filters = yield call(getAllFilters);

  filters.types.splice(0, 1);

  yield put(filtersSlice.actions.setFilters(filters));
}

// filter the data with the specified brand and fetch the relevant products
function* getItemsByBrandsFilter({ payload }: ItemType) {
  yield put(loadingSlice.actions.setLoading(true));
  yield put(brandsSlice.actions.setBrands(payload));

  let query: Query = yield select(state => state.query);

  const selectedBrands: SelectedBrands = yield select(state => state.brands);

  query = { ...query, page: "1", brand: [...selectedBrands.brands] };

  yield put(querySlice.actions.setQuery({ ...query }));

  const response: Response = yield call(getAllProducts, queryBuilder(query));

  const meta = response.meta;
  const items: Product[] = response.data.dataItems;

  const allItems: Products = {
    products: [...items]
  }

  yield put(itemsSlice.actions.setItems(allItems));
  yield put(paginationSlice.actions.setPagination({ totalRecord: meta.total, currentPage: 1 }));
  yield put(loadingSlice.actions.setLoading(false));
}

// filter the data with the specified tags and fetch the relevant products
function* getItemsByTagsFilter({ payload }: ItemType) {
  yield put(loadingSlice.actions.setLoading(true));
  yield put(tagsSlice.actions.setTags(payload));

  let query: Query = yield select(state => state.query);

  const selectedTags: SelectedTags = yield select(state => state.tags);

  query = { ...query, page: "1", tags: [...selectedTags.tags] };

  yield put(querySlice.actions.setQuery({ ...query }));

  const response: Response = yield call(getAllProducts, queryBuilder(query));

  const meta = response.meta;
  const items: Product[] = response.data.dataItems;

  const allItems: Products = {
    products: [...items]
  }

  yield put(itemsSlice.actions.setItems(allItems));
  yield put(paginationSlice.actions.setPagination({ totalRecord: meta.total, currentPage: 1 }));
  yield put(loadingSlice.actions.setLoading(false));
}

// filter the data with the specified sort and fetch the relevant products
function* getItemsBySortingFilter({ payload }: SortingItemType) {
  yield put(loadingSlice.actions.setLoading(true));
  yield put(sortingSlice.actions.setSorting(payload));

  let query: Query = yield select(state => state.query);

  query = { ...query, page: "1", _order: payload.order, _sort: payload.sort };

  yield put(querySlice.actions.setQuery({ ...query }));

  const response: Response = yield call(getAllProducts, queryBuilder(query));

  const meta = response.meta;
  const items: Product[] = response.data.dataItems;

  const allItems: Products = {
    products: [...items]
  }

  yield put(itemsSlice.actions.setItems(allItems));
  yield put(paginationSlice.actions.setPagination({ totalRecord: meta.total, currentPage: meta.currentPage }));
  yield put(loadingSlice.actions.setLoading(false));
}

// fetch all the products on the specified page
function* getItemsByPagination({ payload }: Pagination) {
  yield put(loadingSlice.actions.setLoading(true));
  yield put(paginationSlice.actions.setCurrentPage(payload));

  let query: Query = yield select(state => state.query);

  query = { ...query, page: `${payload}`, };

  yield put(querySlice.actions.setQuery({ ...query }));

  const response: Response = yield call(getAllProducts, queryBuilder(query));

  const meta = response.meta;
  const items: Product[] = response.data.dataItems;

  const allItems: Products = {
    products: [...items]
  }

  yield put(itemsSlice.actions.setItems(allItems));
  yield put(paginationSlice.actions.setPagination({ totalRecord: meta.total, currentPage: payload }));
  yield put(loadingSlice.actions.setLoading(false));
}

// filter the data with the specified item type and fetch the relevant products
function* getItemsByItemType({ payload }: ItemType) {
  yield put(loadingSlice.actions.setLoading(true));
  let query: Query = yield select(state => state.query);

  query = { ...query, page: "1", itemType: payload };

  yield put(querySlice.actions.setQuery({ ...query }));

  const response: Response = yield call(getAllProducts, queryBuilder(query));

  const meta = response.meta;
  const items: Product[] = response.data.dataItems;

  const allItems: Products = {
    products: [...items]
  }

  yield put(itemsSlice.actions.setItems(allItems));
  yield put(paginationSlice.actions.setPagination({ totalRecord: meta.total, currentPage: 1 }));
  yield put(loadingSlice.actions.setLoading(false));
}

export default function* productsSaga() {
  yield takeEvery(GET_ITEMS_REQUESTED, getItems);
  yield takeEvery(GET_FILTERS_REQUESTED, getFilters);
  yield takeEvery(GET_BRAND_FILTER_REQUESTED, getItemsByBrandsFilter);
  yield takeEvery(GET_TAG_FILTER_REQUESTED, getItemsByTagsFilter);
  yield takeEvery(GET_SORTING_FILTER_REQUESTED, getItemsBySortingFilter);
  yield takeEvery(GET_PAGINATION_REQUESTED, getItemsByPagination);
  yield takeEvery(GET_ITEM_TYPE_FILTER_REQUESTED, getItemsByItemType);
}
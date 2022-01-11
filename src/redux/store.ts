import { configureStore } from "@reduxjs/toolkit";
// Middleware used inn redux-saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { querySlice } from "./slices/querySlice";
import { basketSlice } from "./slices/basketSlice";
import { brandsSlice } from "./slices/brandsSlice";
import { filtersSlice } from "./slices/filtersSlice";
import { itemsSlice } from "./slices/itemsSlice";
import { loadingSlice } from "./slices/loadingSlice";
import { paginationSlice } from "./slices/paginationSlice";
import { sortingSlice } from "./slices/sortingSlice";
import { tagsSlice } from "./slices/tagsSlice";

const sagaMiddleware = createSagaMiddleware();

// Configure store by combining all the reducers and using saga middleware
const store = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        filters: filtersSlice.reducer,
        brands: brandsSlice.reducer,
        tags: tagsSlice.reducer,
        query: querySlice.reducer,
        basket: basketSlice.reducer,
        sorting: sortingSlice.reducer,
        pagination: paginationSlice.reducer,
        loading: loadingSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware ],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
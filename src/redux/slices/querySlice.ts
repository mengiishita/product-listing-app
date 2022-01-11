import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Query } from "../../models/Query";

const initialState: Query = {
    page: "1",
    _order: "asc",
    _sort: "",
    tags: [],
    brand: [],
    itemType: "",
}

export const querySlice = createSlice({
    name: "query",
    initialState,
    reducers: {
        setQuery(state, actions: PayloadAction<Query>) {
            const payloads = actions.payload;
            state.page = payloads.page;
            state._order = payloads._order;
            state._sort = payloads._sort;
            state.tags = payloads.tags;
            state.brand = payloads.brand;
            state.itemType = payloads.itemType;
        },
    },
});
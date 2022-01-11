import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sorting } from "../../models/Sorting";

const initialState: Sorting = { id: "1", title: "Price low to high", order: "asc", sort: "price" };

export const sortingSlice = createSlice({
    name: "sorting",
    initialState,
    reducers: {
        setSorting(state, actions: PayloadAction<Sorting>) {
            state.id = actions.payload.id;
            state.title = actions.payload.title;
            state.order = actions.payload.order;
            state.sort = actions.payload.sort;
        },
    },
});
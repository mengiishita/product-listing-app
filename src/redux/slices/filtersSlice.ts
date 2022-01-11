import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "../../models/Filters";

const initialState: Filters = {
    slug_companies: [],
    tags: [],
    types: [],
}

export const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilters(state, actions: PayloadAction<Filters>) {
            state.slug_companies = [...actions.payload.slug_companies];
            state.tags = [...actions.payload.tags];
            state.types = [...actions.payload.types];

        },
    },
});
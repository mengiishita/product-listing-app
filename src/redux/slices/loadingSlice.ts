import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: "loading",
    initialState: { loading: true },
    reducers: {
        setLoading(state, actions: PayloadAction<boolean>) {
            state.loading = actions.payload;

        },
    },
});
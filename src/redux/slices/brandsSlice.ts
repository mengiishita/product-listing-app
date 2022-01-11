import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectedBrands } from "../../models/SelectedBrands";

const initialState: SelectedBrands = {
    brands: ["All"],
}

export const brandsSlice = createSlice({
    name: "brands",
    initialState,
    reducers: {
        setBrands(state, actions: PayloadAction<string>) {
            const brandIndex = state.brands.indexOf(actions.payload);

            if (actions.payload === "All") {
                state.brands = ["All"];
            } else if (brandIndex === -1) {
                if (state.brands[0] === "All") {
                    state.brands.splice(brandIndex, 1)
                }
                state.brands.push(actions.payload);
            } else {
                state.brands.splice(brandIndex, 1)
                if (state.brands.length === 0) {
                    state.brands.push("All");
                }
            }
        },
    },
});
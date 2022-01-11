import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from '../../models/Products';

const initialState: Products = {
    products: [],
}

export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        setItems(state, actions: PayloadAction<Products>) {
            state.products = [...actions.payload.products];
        },
    }
})
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketType } from "../../models/Basket";
import Product from "../../models/Product";
import { SelectedProduct } from "../../models/SelectedProduct";

const initialState: BasketType = {
    products: [],
    totalPrice: 0,
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setBasket(state, actions: PayloadAction<Product>) {
            const indexOf = state.products.findIndex(product => product.product.added === actions.payload.added);

            if (indexOf > -1) {
                state.products[indexOf].count += 1;
                state.totalPrice += actions.payload.price;
            } else {
                const newProduct: SelectedProduct = {
                    product: actions.payload,
                    count: 1,
                }
                state.products.push(newProduct);
                state.totalPrice += newProduct.product.price;
            }
        },
        addProduct(state, actions: PayloadAction<Product>) {
            const indexOf = state.products.findIndex(product => product.product.added === actions.payload.added);
            state.products[indexOf].count += 1;
            state.totalPrice += actions.payload.price;
        },
        removeProduct(state, actions: PayloadAction<Product>) {
            const indexOf = state.products.findIndex(product => product.product.added === actions.payload.added);
            state.products[indexOf].count -= 1;
            state.totalPrice -= actions.payload.price;

            if (state.products[indexOf].count === 0) {
                state.products.splice(indexOf, 1);
            }
        }
    },
});

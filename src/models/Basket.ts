import { SelectedProduct } from "./SelectedProduct"

export type BasketType = {
    products: SelectedProduct[],
    totalPrice: number,
}
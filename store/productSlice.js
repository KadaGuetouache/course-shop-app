import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from '../data/dummy-data';

const productSlice = createSlice({
    name: "product",
    initialState: {
        availableProducts: PRODUCTS,
        userProducts: PRODUCTS.filter(product => product.id === "u1"),
    },
    reducers: {}
});

export default productSlice.reducer;
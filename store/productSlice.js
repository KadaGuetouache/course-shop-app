import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from '../data/dummy-data';

const productSlice = createSlice({
    name: "product",
    initialState: {
        availableProducts: PRODUCTS,
        userProducts: []
    },
    reducers: {
        addNewProduct: (state, action) => {
            const index = state.userProducts.map(product => product.id).indexOf(action.payload.id)

            if (index === -1) {
                state.userProducts.push(action.payload)
            }
        },
        editProduct: (state, action) => {
            const index = state.userProducts.findIndex(product => product.id === action.payload.id)
            const { title, description, imageUrl, price } = action.payload

            if (index !== -1) {
                state.userProducts[index].title = title
                state.userProducts[index].description = description
                state.userProducts[index].imageUrl = imageUrl
                state.userProducts[index].price = price
            }
        },
        addToUserProducts: (state, action) => {
            const index = state.userProducts.map(product => product.id).indexOf(action.payload.id)

            if (index === -1) {
                state.userProducts.push(action.payload)
            }
        },
        removeUserProduct: (state, action) => {
            const id = action.payload
            state.userProducts = state.userProducts.filter(product => product.id !== id)
        }
    }
});

export const { addToUserProducts, removeUserProduct, addNewProduct, editProduct } = productSlice.actions

export default productSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalAmount: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;

            const index = state.items.map(item => item.id).indexOf(product.id)

            if (index !== -1) {
                state.items = state.items.map(item => {
                    if (item.id === product.id) {
                        item.quantity += 1
                    }

                    return item
                })
                state.totalAmount += product.price
            } else {
                const newProduct = { ...product, quantity: 1 }
                state.items.push(newProduct)
                state.totalAmount += product.price
            }
        }
    }
});

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer;
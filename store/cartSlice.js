import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalAmount: 0.00
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
                state.totalAmount += Math.floor(product.price)
            } else {
                const newProduct = { ...product, quantity: 1 }
                state.items.push(newProduct)
                state.totalAmount += Math.floor(product.price)
            }
        },
        removeFromCart: (state, action) => {
            const product = action.payload;
            if (product) {
                const amount = Math.floor(product.price) * product.quantity
                state.totalAmount = state.totalAmount - amount
                state.items = state.items.filter(item => item.id !== product.id)
            }
        },
        clearCart: (state) => {
            state.items = []
            state.totalAmount = 0.00
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer;
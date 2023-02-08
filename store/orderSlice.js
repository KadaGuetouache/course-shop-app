import { createSlice } from "@reduxjs/toolkit";
import urid from 'urid'

const orderSlice = createSlice({
    name: "order",
    initialState: {
        items: []
    },
    reducers: {
        addOrder: (state, action) => {
            const newDate = new Date().toDateString();
            const newOrder = ({
                id: urid(),
                date: newDate,
                items: action.payload[0],
                totalAmount: action.payload[1]
            })

            state.items.push(newOrder)
        },
        removeOrder: (state, action) => {
            const id = action.payload
            state.items = state.items.filter(item => item.id !== id)
        }
    },
})

export const { addOrder, removeOrder } = orderSlice.actions

export default orderSlice.reducer
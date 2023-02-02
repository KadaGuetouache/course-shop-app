import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        availableProducts: "",
        userProducts: "",
    },
    reducers: {}
});

export default productSlice.reducer;
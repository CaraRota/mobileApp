import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        products: [],
        categories: [],
        categorySelected: "",
        productIdSelected: "",
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload;
        },
        setProductIdSelected: (state, action) => {
            state.productIdSelected = action.payload;
        },
    },
});

export const { setProducts, setCategories, setCategorySelected, setProductIdSelected } =
    shopSlice.actions;

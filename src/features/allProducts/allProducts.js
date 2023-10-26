import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllProducts = createAsyncThunk('products/all', async () => {
    try {
        const { data } = await axios.get('http://localhost:8080/api/products');
        return data;
    } catch (error) {
        console.log('fetchAllProducts', error);
    }
});

const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const getAllProducts = (state) => {
    return state.productsList;
};

export default productsSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk(
  'fetchProduct', async (productId) => {
    try {
      const {data} = await axios.get(`http://localhost:8080/api/products/${productId}`);
      return data;
    } catch (error) {
      console.log('fetchProduct', error);
    }
  });

const productSlice = createSlice({
  name: 'product',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
        return action.payload;
    });
  },
});

export const getProduct = (state) => state.product;

export default productSlice.reducer;
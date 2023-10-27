import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const editProduct = createAsyncThunk('editProduct',
async (newInfo) => {
    const token = window.localStorage.getItem("token");
    try{
        const { data } = await axios.put(`https://mass-pro-shops-pjot.onrender.com/products/${newInfo.id}`,newInfo, {
            headers: {
                authorization: token,
            },
        });
        return data;
    }catch(err){
        console.log('editProduct error',err)
    }
})

export const deleteProduct = createAsyncThunk('deleteProduct',
async (id) => {
    const token = window.localStorage.getItem("token");
    try{
        const { data } = await axios.delete(`https://mass-pro-shops-pjot.onrender.com/api/products/${id}`, {
            headers: {
                authorization: token,
            },
        })
        return data
    }catch(err){
        console.log('delete product error:',err)
    }
})

export const addProduct = createAsyncThunk('addProduct',
async (newInfo) => {
    const token = window.localStorage.getItem("token");
    try{
        const { data } = await axios.post('https://mass-pro-shops-pjot.onrender.com/api/products',newInfo,{
            headers: {
                authorization: token,
            },
        })
        console.log(data)
        return data
    }catch(err){
        console.log('add product error', err)
    }
})

const editProductSlice = createSlice({
    name:'editProduct',
    initialState:{},
    extraReducers:(builder) => {
        builder.addCase(editProduct.fulfilled, (state,action) => {
            state = action.payload
            return action.payload
        }),
        builder.addCase(deleteProduct.fulfilled, (state,action) => {
            state =[]
        }),
        builder.addCase(addProduct.fulfilled, (state,action) => {
            return action.payload
        })
    }
})

export default editProductSlice.reducer;
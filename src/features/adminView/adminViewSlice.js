import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = window.localStorage.getItem('token')

export const fetchUsers = createAsyncThunk(
    "users", async () => {
        const token = window.localStorage.getItem('token')
        try {
            if (token) {
            const {data} = await axios.get(`https://mass-pro-shops-pjot.onrender.com/api/users`,{
                headers: {
                    authorization: token,
                },
            })
            return data
        }
        } catch (err) {
            throw new Error(err.response.data)
        }
    }
)

export const fetchProducts = createAsyncThunk(
    "products", async () => {
        try {
            const {data} = await axios.get(`https://mass-pro-shops-pjot.onrender.com/api/products`)
            return data
            
        } catch (err) {
            throw new Error(err.response.data)
        }
    }
)

// export const editUser = createAsyncThunk(
//     "editUser", async (userId) => {
//         try {
//             const {data} = await axios.put(`/api/users/${userId.id}`,userId)
//             return data
//         } catch (err) {
//             throw new Error(err.response.data.errors[0].message)
//         }
//     }
// )

// export const deleteUser = createAsyncThunk(
//     "deleteUser", async (userId) => {
//         try {
//             const {data} = await axios.delete(`/api/users/${userId}`)
//             return userId
//         } catch (err) {
//             console.log(err)
//         }
//     }
// )

const adminViewSlice = createSlice({
    name:"adminView",
    initialState:{
        users:[],
        products:[],
        error:""
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state,action) => {
            state.users = action.payload
        }),
        builder.addCase(fetchUsers.rejected, (state,action) => {
            state.error = "there was an issue with users"
        }),
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            state.products = action.payload
        }),
        builder.addCase(fetchProducts.rejected, (state,action) => {
            state.error = "there was an issue with products"
        })
        // ,
        // builder.addCase(editUser.fulfilled, (state,action) => {
        //     state.displayMe = action.payload
        // }),
        // builder.addCase(deleteUser.fulfilled, (state, action) => {
        //     state.displayMe = []
        // })
    }
})

export default adminViewSlice.reducer
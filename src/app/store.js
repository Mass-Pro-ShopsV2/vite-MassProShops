import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import productsReducer from '../features/allProducts/allProducts';
import productSliceReducer from '../features/product/productSlices';
import userProfileSlice from '../features/userProfile/userProfileSlice';
import cartSliceReducer, { getTotals } from '../features/cart/cartSlice';
import adminViewSlice from '../features/adminView/adminViewSlice';
import editProductSlice from '../features/updateForms/editProductSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        productsList: productsReducer,
        singleUser: userProfileSlice,
        product: productSliceReducer,
        cart: cartSliceReducer,
        adminView: adminViewSlice,
        editProduct: editProductSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.dispatch(getTotals());

export default store;
export * from '../features/auth/authSlice';

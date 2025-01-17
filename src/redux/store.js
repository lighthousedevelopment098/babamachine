import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../../../../baba-machine-admin/src/redux/slices/admin/authSlice';
import productReducer from './slices/categorySlice';
import productCategorySlice from './slices/categorySlice'; 
import manufacturersReducer from './slices/manufacturersSlice'; 
// import businessGeneralReducer from '../../../../baba-machine-admin/src/redux/slices/admin/bussinessSlices/generalSlice'; 

const store = configureStore({
  reducer: {
    // auth: authReducer,
    product: productReducer,
    productCategory: productCategorySlice,
    manufacturers: manufacturersReducer,  // subscriber slice
    // businessGeneral: businessGeneralReducer, 


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable state invariant middleware
    }),
});

export default store;

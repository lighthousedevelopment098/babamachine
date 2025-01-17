import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../config/apiConfig';

// Use the admin endpoint for products
const API_URL = `${BASE_URL}`;

// Fetch categories
export const fetchCategories = createAsyncThunk(
  'productCategory/fetchCategories',
  async (searchParams, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/categories`, { params: searchParams });
      console.log("category slice response====", response)
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Get category by ID
export const fetchCategoryById = createAsyncThunk(
  'productCategory/fetchCategoryById',
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/api/categories/${categoryId}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Create category
export const createCategory = createAsyncThunk(
  'productCategory/createCategory',
  async (categoryData, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      for (const key in categoryData) {
        formData.append(key, categoryData[key]);
      }
      const response = await axios.post(`${API_URL}/api/categories`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Update category
export const updateCategory = createAsyncThunk(
  'productCategory/updateCategory',
  async ({ categoryId, categoryData }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      for (const key in categoryData) {
        formData.append(key, categoryData[key]);
      }
      const response = await axios.put(`${API_URL}/api/categories/${categoryId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Delete category
export const deleteCategory = createAsyncThunk(
  'productCategory/deleteCategory',
  async (categoryId, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/api/categories/${categoryId}`);
      return categoryId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Initial state
const initialState = {
  categories: [],
  currentCategory: null,
  loading: false,
  error: null,
};

// Create slice
const productCategorySlice = createSlice({
  name: 'productCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        console.log("Categories fetched:", action.payload);
        state.categories = action.payload;
      })
      
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCategoryById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCategory = action.payload;
      })
      .addCase(fetchCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        const updatedCategory = action.payload;
        state.categories = state.categories.map((c) =>
          c._id === updatedCategory._id ? updatedCategory : c
        );
        if (state.currentCategory && state.currentCategory._id === updatedCategory._id) {
          state.currentCategory = updatedCategory;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        const categoryId = action.payload;
        state.categories = state.categories.filter((c) => c._id !== categoryId);
        if (state.currentCategory && state.currentCategory._id === categoryId) {
          state.currentCategory = null;
        }
      });
  },
});

export default productCategorySlice.reducer;

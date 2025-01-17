import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../config/apiConfig';

// Use the admin endpoint for manufacturers
const API_URL = `${BASE_URL}/api/manufacturers`;

// Fetch manufacturers
export const fetchManufacturers = createAsyncThunk(
  'manufacturers/fetchManufacturers',
  async (searchParams, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, { params: searchParams });
      console.log("response of category ", response)
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Create manufacturer
export const createManufacturer = createAsyncThunk(
  'manufacturers/createManufacturer',
  async (manufacturerData, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      for (const key in manufacturerData) {
        formData.append(key, manufacturerData[key]);
      }
      const response = await axios.post(API_URL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Delete manufacturer
export const deleteManufacturer = createAsyncThunk(
  'manufacturers/deleteManufacturer',
  async (manufacturerId, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${manufacturerId}`);
      return manufacturerId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Manufacturers slice
const manufacturersSlice = createSlice({
  name: 'manufacturers',
  initialState: {
    manufacturers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchManufacturers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchManufacturers.fulfilled, (state, action) => {
        state.loading = false;
        state.manufacturers = action.payload;
      })
      .addCase(fetchManufacturers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createManufacturer.pending, (state) => {
        state.loading = true;
      })
      .addCase(createManufacturer.fulfilled, (state, action) => {
        state.loading = false;
        state.manufacturers.push(action.payload);
      })
      .addCase(createManufacturer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteManufacturer.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteManufacturer.fulfilled, (state, action) => {
        state.loading = false;
        state.manufacturers = state.manufacturers.filter(
          (manufacturer) => manufacturer._id !== action.payload
        );
      })
      .addCase(deleteManufacturer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default manufacturersSlice.reducer;

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://bitbucket-backend.onrender.com';

export const fetchProductbyFarm = createAsyncThunk(
  'farm/fetchProduct',
  async (id, thunkAPI) => {
    try {
      // console.log('ID - ', id);
      const { data } = await axios.get(`${URL}/api/product/${id}`);
      // console.log('Data - ', data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  'farm/fetchProductById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`${URL}/api/product/id/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://657855f2f08799dc8044f5c2.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'camper/fetchCamper',
  async (id, thunkAPI) => {
    try {
      // console.log('ID - ', id);
      const { data } = await axios.get(`${URL}/campers`);
      // console.log('Data - ', data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

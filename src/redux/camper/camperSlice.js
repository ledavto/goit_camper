import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchCampers, fetchCampersById } from './camper-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
};

const camperSlice = createSlice({
  name: 'camper',
  initialState,

  extraReducers: builder => {
    builder
      //Запит Камперів
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.camper = [...action.payload];
        state.isLoading = false;
      })
      .addCase(fetchCampers.rejected, handleRejected)

      //Запит Кемпера по ID
      .addCase(fetchCampersById.pending, handlePending)
      .addCase(fetchCampersById.fulfilled, (state, action) => {
        state.camper = [...action.payload];
        state.isLoading = false;
      })
      .addCase(fetchCampersById.rejected, handleRejected);
  },
});

export const presistReducerCamper = camperSlice.reducer;

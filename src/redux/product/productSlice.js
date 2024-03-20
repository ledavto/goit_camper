import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchProductbyFarm, fetchProductById } from './product-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
};

const productSlice = createSlice({
  name: 'product',
  initialState,

  extraReducers: builder => {
    builder
      //Запит продуктів
      .addCase(fetchProductbyFarm.pending, handlePending)
      .addCase(fetchProductbyFarm.fulfilled, (state, action) => {
        state.product = [...action.payload];
        state.isLoading = false;
        // console.log('Action', state.product);
      })
      .addCase(fetchProductbyFarm.rejected, handleRejected)

      //Запит продукта по ID
      .addCase(fetchProductById.pending, handlePending)
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.productId = action.payload;
        state.isLoading = false;
        // console.log('Action', state.product);
      })
      .addCase(fetchProductById.rejected, handleRejected);
  },
});

export const presistReducerProduct = productSlice.reducer;

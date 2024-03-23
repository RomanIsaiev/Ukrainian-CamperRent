import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./api";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 1, // Добавляем поле page в состояние
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, ...action.payload];
        state.page += 1; // Увеличиваем страницу после успешной загрузки
      })
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;

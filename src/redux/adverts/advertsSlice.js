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
    page: 1, // Добавляем состояние для отслеживания номера текущей страницы
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.page === 1) {
          state.items = action.payload.data; // Если это первая страница, заменяем объявления
        } else {
          state.items = [...state.items, ...action.payload.data]; // Иначе добавляем дополнительные объявления
        }
        state.page = action.payload.page; // Обновляем номер страницы
      })
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;

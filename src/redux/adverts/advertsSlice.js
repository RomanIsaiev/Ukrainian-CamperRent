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
    page: 1,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.page === 1) {
          state.items = action.payload.data;
        } else {
          const uniqueItems = action.payload.data.filter(
            (newItem) =>
              !state.items.some(
                (existingItem) => existingItem._id === newItem._id
              )
          );
          state.items = [...state.items, ...uniqueItems];
        }
        state.page = action.payload.page;
      })
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;

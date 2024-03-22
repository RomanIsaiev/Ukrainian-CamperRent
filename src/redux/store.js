import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./adverts/advertsSlice";
import { favoritesReducer } from "./adverts/favoriteSlice";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: favoritesReducer,
  },
});

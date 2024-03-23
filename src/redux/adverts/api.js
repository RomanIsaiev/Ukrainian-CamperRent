import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6571ecbfd61ba6fcc013fab2.mockapi.io/api";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=${page}&limit=${limit}`);
      return { data: response.data, page };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

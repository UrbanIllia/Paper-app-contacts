import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const setAuthHeader = (token) => {
  axiosApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registerUserThunk = createAsyncThunk(
  "registerUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosApi.post("/users/signup", credentials);
      console.log("Response register:", response.data);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.error(
        "Error in registerUserThunk:",
        error.response?.data || error.message,
      );
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const loginUserThunk = createAsyncThunk(
  "loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosApi.post("/users/login", credentials);
      console.log("Response login:", response.data);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.error(
        "Error in registerUserThunk:",
        error.response?.data || error.message,
      );
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const logOutThunk = createAsyncThunk(
  "logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await axiosApi.post("/users/logout");
      setAuthHeader("");
    } catch (error) {
      console.error(
        "Error in logOutThunk:",
        error.response?.data || error.message,
      );
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const refreshUserThunk = createAsyncThunk(
  "refreshUser",
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (!savedToken) {
      return thunkApi.rejectWithValue("Token is not exist");
    }
    setAuthHeader(savedToken);
    try {
      const response = await axiosApi.get("/users/current");
      console.log("Response refreshUserThunk:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error in refreshUserThunk:",
        error.response?.data || error.message,
      );
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  },
);

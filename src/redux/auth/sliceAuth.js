import { createSlice } from "@reduxjs/toolkit";

import {
  loginUserThunk,
  logOutThunk,
  refreshUserThunk,
  registerUserThunk,
} from "./operationsAuth";

const initialState = {
  isLoggedIn: false,
  isRefreshing: false,
  user: {
    name: "",
    email: "",
  },
  token: "",
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        console.log("Slice register action payload", action.payload);
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        console.log("Slice login action payload", action.payload);
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUserThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = slice.reducer;

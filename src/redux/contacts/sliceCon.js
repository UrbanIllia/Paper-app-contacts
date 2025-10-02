import { createSlice } from "@reduxjs/toolkit";
import {
  deleteContactById,
  editContactByIdThunk,
  getAllContactsThunk,
  postContactThunk,
} from "./operationsCon";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllContactsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ..................................................................
      .addCase(postContactThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ........................................................................
      .addCase(deleteContactById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContactById.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContactById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ...........................................................................
      .addCase(editContactByIdThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editContactByIdThunk.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id,
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(editContactByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = slice.reducer;

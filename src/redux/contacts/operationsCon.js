import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../auth/operationsAuth";

export const getAllContactsThunk = createAsyncThunk(
  "getAllContacts",
  async (_, thunkApi) => {
    // const savedToken = thunkApi.getState().auth.token;
    // if (!savedToken) {
    //   return thunkApi.rejectWithValue("Token is not exist");
    // }
    // setAuthHeader(savedToken);
    try {
      const response = await axiosApi.get("/contacts");
      console.log("Response getAllContactsThunk:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error in getAllContactsThunk:",
        error.response?.data || error.message,
      );
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const postContactThunk = createAsyncThunk(
  "postContact",
  async (body, thunkApi) => {
    try {
      const response = await axiosApi.post("/contacts", body);
      return response.data;
    } catch (error) {
      console.error(
        "Error in postContactThunk:",
        error.response?.data || error.message,
      );
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  },
);
export const deleteContactById = createAsyncThunk(
  "deleteContact",
  async (id, thunkApi) => {
    try {
      await axiosApi.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      console.error(
        "Error in deleteContactById:",
        error.response?.data || error.message,
      );
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const editContactByIdThunk = createAsyncThunk(
  "editContact",
  async ({ id, updatedData }, thunkApi) => {
    try {
      const response = await axiosApi.patch(`/contacts/${id}`, updatedData);
      return response.data;
    } catch (error) {
      console.error(
        "Error in deleteContactById:",
        error.response?.data || error.message,
      );
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  },
);

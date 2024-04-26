import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slices";
import getAllLessonsService from "../services/AdminGetLessons.services";

export const GetLessonsAdmin = createAsyncThunk(
  "admin/getLessonsAdmin",
  async (thunkAPI) => {
    try {
      const data = await getAllLessonsService.GetAllLessons();
      console.log("lessons slices", data);
      return { admin: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.error("Error fetching student lessons:", message);
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  details: null,
};

export const adminLessonSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetLessonsAdmin.fulfilled, (state, action) => {
      state.details = action.payload.admin;
    });
    builder.addCase(GetLessonsAdmin.rejected, (state) => {
      state.details = null;
    });
  },
});
const { reducer } = adminLessonSlice;

export default reducer;
